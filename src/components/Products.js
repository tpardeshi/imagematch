import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ansible from "./logo/ansible.png";
import rhel from "./logo/rhel.png";
import AppPage from "./page";
import {
  Gallery,
  GalleryItem,
  CardBody,
  Card,
  Button,
  CardFooter,
  GutterSize,
  CardHead
} from "@patternfly/react-core";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product1: {},
      product2: {},
      locales: {}
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get("http://localhost:3001/api/v1/products/1"),
        axios.get("http://localhost:3001/api/v1/products/2"),
        axios.get("http://localhost:3001/api/v1/locales")
      ])
      .then(([product1, product2, locales]) =>
        this.setState({
          product1: product1.data,
          product2: product2.data,
          locales: locales.data
        })
      );
  }
  render() {
    // return this.state.product1.map(product1 => {
    return (
      <AppPage>
        <Gallery gutter="lg">
          <Card isHoverable>
            <CardHead>
              <img src={rhel}></img>
            </CardHead>
            <CardBody>
              <Link to={`/products/${this.state.product1.id}/product_versions`}>
                {this.state.product1.name}
              </Link>
            </CardBody>
          </Card>
          <Card isHoverable>
            <CardHead>
              <img src={ansible}></img>
            </CardHead>
            <CardBody>
              <Link to={`/products/${this.state.product2.id}/product_versions`}>
                {this.state.product2.name}
              </Link>
            </CardBody>
          </Card>
        </Gallery>
      </AppPage>
    );
  }
}

export default Products;
