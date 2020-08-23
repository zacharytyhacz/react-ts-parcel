import createStore from "pure-store/react"

const userStore = createStore({
  name: "",
});

export const name = () => {
  return userStore.state.name;
}

export const setName = (newName: string) => {
  userStore.update(s => {
    s.name = newName
  });
}
