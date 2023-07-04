import React, {useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import cflogo from '../images/codeforceslogo.png';
import gfglogo from '../images/geeksforgeekslogo.png';
import cclogo from '../images/codecheflogo.png';
import lclogo from '../images/leetcodelogo.png';
import '../styles/table.css'
import '../styles/home.css'
import '../styles/results.css'
import {AppContext} from '../App';
import DataBox from './databox';
import LcBox from './lc_box';
import CcBox from './ccbox';

const Home = () => {
const {user, setUser}= useContext(AppContext);
  const [codeforcesUsername, setCodeforcesUsername] = useState('');
  const [codechefUsername, setCodechefUsername] = useState('');
  const [geeksforgeeksUsername, setGeeksforgeeksUsername] = useState('');
  const [leetcodeUsername, setleetcodeUsername] = useState('');
  const [CFContestDetails,setCFContestDetails]=useState([]);  
  const [CCContestDetails,setCCContestDetails]=useState(null);
  const [LCContestDetails,setLCContestDetails]=useState(null);
  const [GFGContestDetails,setGFGContestDetails]=useState(null);
  const navigate = useNavigate();
  const handleCFsubmit =(event) =>{
    event.preventDefault();
    if (user) {
      console.log(user)
      // Process the form submission
      // You can add your logic to handle the form submission here
     // const test=document.getElementById("CFResults");
      var apiUrl = `https://codeforces.com/api/user.rating?handle=${codeforcesUsername}`;
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
       //test.innerHTML = JSON.stringify(data.result);
       console.log(data);
        setCFContestDetails(data.result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      // Redirect to the login page
      window.alert("please login to submit");
      navigate('/'); // Replace '/login' with the actual login page route
    }
  };



  const handleCCsubmit =(event) =>{
    event.preventDefault();
    if (user) {
      // Process the form submission
      // You can add your logic to handle the form submission here
     // const test=document.getElementById("CFResults");
      var apiUrl = `https://codechef-api-1.onrender.com/codechef/${codechefUsername}`;
      console.log(apiUrl)
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
       //test.innerHTML = JSON.stringify(data.result);
       console.log(JSON.stringify(data));
       setCCContestDetails(data);
        //setCCContestDetails(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      // Redirect to the login page

      window.alert("please login to submit");
      navigate('/'); // Replace '/login' with the actual login page route
    }
  };


  const handleLCsubmit =(event) =>{
    event.preventDefault();
    if (user) {
      // Process the form submission
      // You can add your logic to handle the form submission here
     // const test=document.getElementById("CFResults");
      var apiUrl = `https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`;
      console.log(apiUrl)
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
       //test.innerHTML = JSON.stringify(data.result);
       setLCContestDetails(data);
        //setCCContestDetails(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      // Redirect to the login page

      window.alert("please login to submit");
      navigate('/'); // Replace '/login' with the actual login page route
    }
  };


  const handleGFGsubmit =(event) =>{
    event.preventDefault();
    if (user) {
      // Process the form submission
      // You can add your logic to handle the form submission here
     // const test=document.getElementById("CFResults");
      var apiUrl = `https://gfg-api.onrender.com/?userName=${geeksforgeeksUsername}`;
      console.log(apiUrl)
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
       //test.innerHTML = JSON.stringify(data.result);
       setGFGContestDetails(data);
        //setCCContestDetails(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      // Redirect to the login page

      window.alert("please login to submit");
      navigate('/'); // Replace '/login' with the actual login page route
    }
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className="boxi">
          <div>
            <img className="logo" src={cflogo} alt="Codeforces Logo" />
            </div>
            <Form onSubmit={handleCFsubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Codeforces Handle"
                  value={codeforcesUsername}
                  onChange={(e) => setCodeforcesUsername(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
          <div id="CFResults">
          {codeforcesUsername!=='' && 
          <table className="table table-striped table-bordered CFTable">
          <thead className="thead-dark">
          <tr>
            <th>Contest Id</th>
            <th>Contest Name</th>
            <th>Rank</th>
            <th>Old Rating</th>
            <th>New Rating</th>
          </tr>
          </thead>
          {CFContestDetails.map((e)=>{
            return (<tr>
            <td>{e.contestId}</td>
            <td>{e.contestName}</td> 
            <td>{e.rank}</td>
            <td>{e.oldRating}</td>
            <td>{e.newRating}</td>
          </tr>)
          })}
        </table>
          }
          </div>
        </Col>
        <Col md={3}>
          <div className="boxi">
            <img className="logo" src={cclogo} alt="Codechef Logo" />
            <Form onSubmit={handleCCsubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Codechef Username"
                  value={codechefUsername}
                  onChange={(e) => setCodechefUsername(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
          <div id="CCResults">
          {CCContestDetails && 
          <div>
          <CcBox data={CCContestDetails}/>
          </div>
          }
          </div>
        </Col>
        <Col md={3}>
          <div className="boxi">
            <img className="logo" src={gfglogo} alt="GeeksforGeeks Logo" />
            <Form onSubmit={handleGFGsubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="GeeksforGeeks Username"
                  value={geeksforgeeksUsername}
                  onChange={(e) => setGeeksforgeeksUsername(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
          
          <div id="GFGResults">
          {GFGContestDetails && 
            <div>
              <DataBox data={GFGContestDetails} />  
            </div>
          }
          </div>
        </Col>
        <Col md={3}>
          <div className="boxi">
            <img className="logo" src={lclogo} alt="Leetcode Logo" />
            <Form onSubmit={handleLCsubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Leetcode Username"
                  value={leetcodeUsername}
                  onChange={(e) => setleetcodeUsername(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
            <h3>For Leetcode contest predictions You can <a href="https://lccn.lbao.site" style={{textDecoration: "none"}}>click here</a></h3>
          </div>
          <div id="LCResults" className='LCR'>
          {LCContestDetails && 
            <div>
            <LcBox data={LCContestDetails}/>
          </div>
        }
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
