import React from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Tabs,
  Tab,
  MenuItem,
  Select,
  MobileStepper,
  Button
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const styles = {
  tab: {
    background: "rgba(0,0,0,.6)",
    color: "black",
    borderRadius: 100,
    padding: " 0px 50px"
  },
  tabIndicator: {
    style: {
      height: 0
    }
  },
  slide: {
    padding: 15,
    minHeight: "50vh",
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

class DemoTabs extends React.Component {
  state = {
    index: 0
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  handleNext = () => {
    if (this.state.index < 2) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  handleBack = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <MobileStepper
          variant="dots"
          index={this.state.index}
          steps={3}
          onDotClick={index => this.setState({ index })}
        />
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            slide n°1
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
            <Select value={10} autoWidth={false}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div>
        </SwipeableViews>
        <Tabs
          value={index}
          TabIndicatorProps={styles.tabIndicator}
          scrollable
          centered
          onChange={this.handleChange}
        >
          <Tab label="°" style={styles.tab} disableRipple />
          <Tab label="°" style={styles.tab} disableRipple />
          <Tab label="°" style={styles.tab} disableRipple />
        </Tabs>

        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          activeStep={this.state.index}
          className={styles.tab}
          nextButton={
            <Button size="small" onClick={this.handleNext} disableRipple>
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disableRipple>
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </div>
    );
  }
}

export default DemoTabs;

//disabled={activeStep === 5}
