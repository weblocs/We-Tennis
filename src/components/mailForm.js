import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  typography: {
    fontFamily: '"Avenir Next", serif',
  },
  
});

function getSteps() {
  return ['Your Name', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <form method="GET" action="/">
          <TextField
      id="name"
      label="Name and Surname"
      margin="normal"
    /></form>
    case 1:
      return <form method="GET" action="/"><TextField
      id="name"
      label="Name and Surname"
      margin="normal"
    /><div></div>
    <TextField
      type="email"
      id="email"
      label="Email"
      margin="normal"
    /></form>
    case 2:
    return <form method="GET" action="/"><TextField
    id="name"
    name="name"
    label="Name and Surname"
    margin="normal"
  /><div></div>
  <TextField
    type="email"
    id="email"
    name="email"
    label="Email"
    margin="normal"
  /><div></div>
  <TextField
    type="text"
    id="your-club"
    name="your-club"
    label="Your Tennis Club"
    margin="normal"
  /><div></div>
  <input type="submit" value="Send" /></form>
    default:
      return 'Unknown stepIndex';
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button className={activeStep === steps.length - 1 ? 'nodisplay' : ''} variant="contained" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? '' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
