import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "lorem10 ipsum dolor sit elit magma frechete inous dsdsdsd"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "lorem10 ipsum dolor sit elit magma frechete inous dsdsdsd"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "lorem10 ipsum dolor sit elit magma frechete inous dsdsdsd"
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info: "lorem10 ipsum dolor sit elit magma frechete inous dsdsdsd"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services " />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
