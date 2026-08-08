import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FaXmark } from 'react-icons/fa6';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Edit({ open, handleClose }) {
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]); // replace with resumeData.skills if editing existing data

  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleDeleteSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box>
            {/* personal details */}
            <TextField id="fullname" label="Full Name" variant="standard" fullWidth className="mb-3" />
            <TextField id="phone" label="Phone" variant="standard" fullWidth className="mb-3" />
            <TextField id="email" label="Email" variant="standard" fullWidth className="mb-3" />
            <TextField id="linkedin" label="Linkedin Link" variant="standard" fullWidth className="mb-3" />
            <TextField id="github" label="Github Link" variant="standard" fullWidth className="mb-3" />

            {/* educational details */}
            <h3>Educational Details</h3>
            <TextField id="degree" label="Bachelor's Degree" variant="standard" fullWidth className="mb-3" />
            <TextField id="college" label="College/University Name" variant="standard" fullWidth className="mb-3" />
            <TextField id="year" label="Year of Graduation" variant="standard" fullWidth className="mb-3" />

            {/* skills */}
            <div>
              <h3>Skills</h3>
              <div className="d-flex p-3">
                <input
                  type="text"
                  placeholder="Add New Skill"
                  className="form-control"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                />
                <Button onClick={handleAddSkill}>add</Button>
              </div>

              <h6>Added Skills : </h6>

              <div className="p-3 d-flex justify-content-between flex-wrap">
                {skills.map((skill, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    sx={{ backgroundColor: '#b19596', margin: '4px' }}
                    onClick={() => handleDeleteSkill(index)}
                  >
                    {skill} <FaXmark className="ms-2" />
                  </Button>
                ))}
              </div>
            </div>

            {/* summary */}
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField id="summary" label="Summary" multiline variant="standard" />
              </div>
            </div>

            {/* update button */}
            <button
              className="btn text-light mt-3"
              style={{ backgroundColor: '#213a5d' }}
            >
              UPDATE CV
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;