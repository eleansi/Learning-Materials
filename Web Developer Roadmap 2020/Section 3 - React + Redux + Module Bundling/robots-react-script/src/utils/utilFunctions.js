
// Filter users functionality and can be used on ARRAYS only
const filterUsers = (users, searchFieldInput) => {
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchFieldInput));
    return filteredUsers;
}

export { filterUsers };