import React from "react";
import "./styles.css";
import { Card, Button } from "semantic-ui-react";
import moment from "moment";

const refreshButton = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  <div id="wrapper">
    <Card id="card">
      <Card.Content id="content">
        <Card.Header className="header">
          {weatherData.name}{" "}
          <Button
            id="refreshButton"
            inverted
            color="blue"
            icon="refresh"
            circular
            onClick={refreshButton}
          ></Button>
        </Card.Header>

        <p>Day: {moment().format("dddd")}</p>
        <p>Date: {moment().format("LL")}</p>
        <p>Temperature: {weatherData.main.temp}&deg;C</p>
        <p>Feels like: {weatherData.main.feels_like}&deg;C</p>
        <p>Humidity: {weatherData.main.humidity}</p>
        <p>
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("pt-br")}
        </p>
        <p>
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("pt-br")}
        </p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Wind: {weatherData.wind.speed}</p>
      </Card.Content>
    </Card>
  </div>
);

export default WeatherCard;
