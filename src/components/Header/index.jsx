// import React, { useState } from 'react';
// import classes from "./Header.module.css";
// import { Col, Container, Row } from 'react-bootstrap';
// import Drawer from 'react-modern-drawer';
// import 'react-modern-drawer/dist/index.css';
// import { HEADER_ICONS, HEADER_TAB } from '../../data/app-data';
// import { FaBars } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// export default function Header() {
//   const navigate = useNavigate();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(prevState => !prevState);
//   };

//   return (
//     <>
//     <Container fluid>
//       <Row className={classes.rowClass}>
//         <Col md={4}>
//           <h1 className={classes.title}>Muniba Rahman</h1>
//         </Col>
//         <Col md={4}>
//           <div className={classes.tabDiv}>
//             {HEADER_TAB?.map((e, i) => (
//               <div key={i}>
//                 <p className={classes.tab} onClick={()=> navigate(`${e?.path}`)}>{e?.tab}</p>
//               </div>
//             ))}
//           </div>
//         </Col>
//         <Col md={4} className={classes.iconDiv}>
//           {HEADER_ICONS?.map((e, i) => (
//             <a href={`${e?.path}`} target='_blank' className={classes.icon} key={i} rel="noopener noreferrer">
//               {e?.icon}
//             </a>
//           ))}
//         </Col>
//         <span onClick={toggleDrawer} className={classes.drawerButton}>
//           <FaBars color='var(--white-color)' size={26} />
//           </span>
//       </Row>

//       <Drawer
//         open={isDrawerOpen}
//         onClose={toggleDrawer}
//         direction='right'
//         className={classes.drawer}
//       >
//         <div className={classes.drawerContent}>
//           {HEADER_TAB?.map((e, i) => (
//             <p key={i} className={classes.drawerTab} onClick={()=> navigate(`${e?.path}`)}>{e?.tab}</p>
//           ))}
//           <div className={classes.drawerIcons}>
//             {HEADER_ICONS?.map((e, i) => (
//               <a href={`${e?.path}`} target='_blank' className={classes.icon} key={i} rel="noopener noreferrer">
//                 {e?.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </Drawer>
//     </Container>
//     </>
//   );
// }



import React, { useState } from 'react';
import classes from "./Header.module.css";
import { Col, Container, Row } from 'react-bootstrap';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { HEADER_ICONS, HEADER_TAB } from '../../data/app-data';
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(prevState => !prevState);
  };

  return (
    <>
      <Container fluid>
        <Row className={classes.rowClass}>
          <Col md={4}>
            <h1 className={classes.title}>Muniba Rahman</h1>
          </Col>
          <Col md={4} className={classes.tabDiv}>
            {HEADER_TAB?.map((e, i) => (
              <p key={i} className={classes.tab} onClick={() => navigate(`${e?.path}`)}>{e?.tab}</p>
            ))}
          </Col>
          <Col md={4} xs={6} className={classes.iconDiv}>
            {HEADER_ICONS?.map((e, i) => (
              <a href={`${e?.path}`} target='_blank' className={classes.icon} key={i} rel="noopener noreferrer">
                {e?.icon}
              </a>
            ))}
          </Col>
          <Col><span onClick={toggleDrawer} className={classes.drawerButton}>
            <FaBars color='var(--white-color)' size={26} />
          </span></Col>
        </Row>


        <Drawer
          open={isDrawerOpen}
          onClose={toggleDrawer}
          direction='right'
          className={classes.drawer}
        >
          <div className={classes.drawerContent}>
            {HEADER_TAB?.map((e, i) => (
              <p key={i} className={classes.drawerTab} onClick={() => navigate(`${e?.path}`)}>{e?.tab}</p>
            ))}
            <div className={classes.drawerIcons}>
              {HEADER_ICONS?.map((e, i) => (
                <a href={`${e?.path}`} target='_blank' className={classes.icon} key={i} rel="noopener noreferrer">
                  {e?.icon}
                </a>
              ))}
            </div>
          </div>
        </Drawer>
      </Container>
    </>
  );
}
