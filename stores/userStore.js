import empdata from "@/data/empdata.json";

export const useUserStore = defineStore("user", () => {
  const usersData = ref(empdata);
  let filteredUsers = ref(empdata);
  const defaultuserdata = {
    id: "",
    display_name: "",
    login_id: "",
    password: "",
    is_active: false,
    user_image:
      "https://robohash.org/officiisvoluptatemdoloremque.png?size=50x50&set=set1",
  };
  let initialUserFormData = ref({ ...defaultuserdata });
  function searchUser(searchquery) {
    if (searchquery.length >= 1) {
      filteredUsers.value = usersData.value.filter((item) => {
        return item.display_name
          .toLocaleLowerCase()
          .includes(searchquery.toLocaleLowerCase());
      });
    } else {
      filteredUsers.value = usersData.value;
    }
  }
  function addUser(item) {
    console.log("add user", item);
    item.value["id"] = usersData.value.length + 1;
    usersData.value = [item.value, ...filteredUsers.value];
    filteredUsers.value = usersData.value;
  }
  function updateUser(user) {
    console.log("user update", user.value);
    const updatedArray = filteredUsers.value.map((item) => {
      if (item.id === user.value.id) {
        return { ...item, user };
      }
      return item;
    });
    filteredUsers.value = updatedArray;
  }
  function viewUser(item) {
    console.log("view", item);
    item.editable = true;
    initialUserFormData.value = item;
  }
  function resetUserForm() {
    initialUserFormData.value = defaultuserdata;
  }
  return {
    filteredUsers,
    searchUser,
    addUser,
    viewUser,
    initialUserFormData,
    resetUserForm,
    updateUser,
  };
});

export default {
  asyncData({ $pinia }) {
    const store = useStore($pinia);
  },
};
