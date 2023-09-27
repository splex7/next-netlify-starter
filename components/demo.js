import { Component } from "react";
import Flicking from "@egjs/react-flicking";
import styles from './demo.module.css'

export default class DemoComponent extends Component {
  render() {
    return <Flicking align="prev" moveType="snap" bound={true} horizontal={true}>
      <span>🥝 Kiwi</span>
      <span>🍎 Apple</span>
      <span>🍉 Watermelon</span>
      <span>🥝 Kiwi</span>
      <span>🍎 Apple</span>
      <span>🍉 Watermelon</span>
      <span>🥝 Kiwi</span>
      <span>🍎 Apple</span>
      <span>🍉 Watermelon</span>
      <span>🥝 Kiwi</span>
      <span>...</span> 
    </Flicking>;
  }
}