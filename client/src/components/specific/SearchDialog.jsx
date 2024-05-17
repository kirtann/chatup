import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useDispatch, useSelector } from "react-redux";
import { setIsSearch } from "../../redux/reducers/misc";
import { useLazySearchUserQuery } from "../../redux/api/api";

const SearchDialog = () => {
  const search = useInputValidation("");

  const { isSearch } = useSelector((state) => state.misc);

  const [searchUser] = useLazySearchUserQuery();

  const dispatch = useDispatch();

  const addFriendHandler = (id) => {
    console.log(id);
  };
  let isLoadingSendFriendRequest = false;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      searchUser(search.value)
        .then(({ data }) => {
          setUsers(data.users);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [search.value]);

  return (
    <Dialog open={isSearch} onClose={() => dispatch(setIsSearch(false))}>
      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default SearchDialog;
