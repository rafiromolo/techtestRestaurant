import React from "react";
import axios from "axios";

export default class RestaurantsList extends React.Component {
  state = {
    names: [],
  };

  componentDidMount() {
    axios
      .get("https://travel-advisor.p.rapidapi.com/restaurants/list")
      .then((res) => {
        console.log(res);
      });
  }
}
