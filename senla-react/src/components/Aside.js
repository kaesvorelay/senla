import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { store } from "../store/reducers/counterReducer";

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside-index">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi
        sequi, neque omnis eum iste laudantium eius. Eveniet doloremque,
        temporibus minus odio delectus natus quisquam cupiditate hic tempora
        aspernatur alias?
        <Provider store={store}>
          <Counter />
        </Provider>
      </aside>
    );
  }
}

export default Aside;
