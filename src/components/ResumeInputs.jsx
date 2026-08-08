import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import jobRole from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'

const steps = [
  'Basic Informations',
  'Contact Detials',
  'Education Detials',
  'Reviw And Submit'
];

function ResumeInputs() {

  const [resumeDetails, setReumeDetails] = React.useState({
    fullName: "",
    location: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    degree: "",
    college: "",
    year: "",
    skills: [],
    summary: ""
  })

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormContent = (stepCount) => {

    switch (stepCount) {

      case 0:
        return (
          <div>

            <h3>Personal Details</h3>

            <div className="p-3 row">

              <TextField
                value={resumeDetails.fullName}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  fullName: e.target.value
                })}
                id="standard-basic-name"
                label="FullName"
                variant="standard"
              />

              <TextField
                value={resumeDetails.location}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  location: e.target.value
                })}
                id="standard-basic-loc"
                label="Location"
                variant="standard"
              />

              <FormControl variant="standard">

                <InputLabel id="demo-simple-select-label">
                  Choose Job Title
                </InputLabel>

                <Select
                  defaultValue={''}
                  onChange={e => setReumeDetails({
                    ...resumeDetails,
                    job: e.target.value
                  })}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Job"
                >

                  {
                    jobRole.jobRoles.map(job => (
                      <MenuItem
                        key={job}
                        value={job}
                      >
                        {job}
                      </MenuItem>
                    ))
                  }

                </Select>

              </FormControl>

            </div>

          </div>
        );

      case 1:
        return (
          <div>

            <h3>Contact Details</h3>

            <div className="p-3 row">

              <TextField
                value={resumeDetails.email}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  email: e.target.value
                })}
                id="standard-basic-email"
                label="Email"
                variant="standard"
              />

              <TextField
                value={resumeDetails.phone}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  phone: e.target.value
                })}
                id="standard-basic-num"
                label="Contact Number"
                variant="standard"
              />

              <TextField
                value={resumeDetails.linkedin}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  linkedin: e.target.value
                })}
                id="standard-basic-linkedin"
                label="Linkedin Link"
                variant="standard"
              />

              <TextField
                value={resumeDetails.github}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  github: e.target.value
                })}
                id="standard-basic-github"
                label="Github Link"
                variant="standard"
              />

            </div>

          </div>
        );

      case 2:
        return (
          <div>

            <h3>Educational Details</h3>

            <div className="p-3 row">

              <TextField
                value={resumeDetails.degree}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  degree: e.target.value
                })}
                id="standard-basic-degree"
                label="Bacherlor's Degree"
                variant="standard"
              />

              <TextField
                value={resumeDetails.college}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  college: e.target.value
                })}
                id="standard-basic-college"
                label="College/University Name"
                variant="standard"
              />

              <TextField
                value={resumeDetails.year}
                onChange={e => setReumeDetails({
                  ...resumeDetails,
                  year: e.target.value
                })}
                id="standard-basic-year"
                label="Year of Graduation"
                variant="standard"
              />

            </div>

          </div>
        );

      case 3:
        return (
          <div>

            <p>
              Our AI will generate Skills & Summary according to your job role.
              Click the <b>Generate AI Skill & Summary</b> button to Proceed.
            </p>

          </div>
        );

      default:
        return null;
    }
  };

  const generateSkillAndSummary = () => {

    setReumeDetails({
      ...resumeDetails,
      skills: jobSkills[resumeDetails.job],
      summary: summaries[resumeDetails.job]
    });

    handleNext();

  };

  return (

    <Box sx={{ width: '100%' }}>

      <Stepper activeStep={activeStep}>

        {steps.map((label, index) => {

          const stepProps = {};
          const labelProps = {};

          return (

            <Step key={label} {...stepProps}>

              <StepLabel {...labelProps}>
                {label}
              </StepLabel>

            </Step>

          );

        })}

      </Stepper>


      {activeStep === steps.length ? (

        <React.Fragment>

          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2
            }}
          >

            <Box sx={{ flex: '1 1 auto' }} />

            <Button>
              FINISH
            </Button>

          </Box>

        </React.Fragment>

      ) : (

        <React.Fragment>

          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
          </Typography>

          <Box>

            {renderFormContent(activeStep)}

          </Box>


          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              pt: 2
            }}
          >

            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />


            {
              activeStep === steps.length - 1 ?

                <Button
                  onClick={generateSkillAndSummary}
                >
                  Generate AI Skills & Summary
                </Button>

                :

                <Button
                  onClick={handleNext}
                >
                  Next
                </Button>
            }


          </Box>

        </React.Fragment>

      )}

    </Box>

  );

}

export default ResumeInputs;