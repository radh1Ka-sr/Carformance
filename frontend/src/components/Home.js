// import React from 'react';
// import { Link } from "react-router-dom";

// const Home = () => {
//   const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqBanhmhsDEGLgbfzW22NoHc6YFhFY91Rkg&s';

//   return (
//     <div style={styles.homeContainer}>
//       <img src={image} alt="Background" style={styles.backgroundImage} />
//       <div style={styles.overlay}></div>
//       <div style={styles.container}>
//         <div style={styles.cardContainer}>
//           <div style={styles.card}>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHsqnDcecy2x1mS3WVphJpH1Yo26TQIUG7Q&s" alt="ServiceCentre" style={styles.cardImage} />
//             <div style={styles.cardBody}>
//               <p style={styles.cardText}>Click Here for Registering as a Car Service Center.</p>
//               <Link to="/serviceCentreRegister" style={styles.button}>Service Center</Link>
//             </div>
//           </div>
//           <div style={styles.card}>
//             <img src="https://admin.autofix.ae/public/images/blogs/large/1693215549-L3RtcC9waHBHbUVxbVA=.jpg" alt="Customer" style={styles.cardImage} />
//             <div style={styles.cardBody}>
//               <p style={styles.cardText}>Click Here for Registering as a User.</p>
//               <Link to="/userRegister" style={styles.button}>Customer</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   homeContainer: {
//     position: 'relative',
//     height: '100%', // Ensure container grows with content
//     overflowY: 'auto', // Enable scrolling if content exceeds height
//     textAlign: 'center',
//     color: 'white',
//   },
//   backgroundImage: {
//     position: 'fixed', // Use fixed to keep the image in place
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: -2,
//     objectFit: 'cover',
//   },
//   overlay: {
//     position: 'fixed', // Use fixed to ensure overlay covers background image
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'rgba(0, 0, 0, 0.5)',
//     zIndex: -1,
//   },
//   container: {
//     zIndex: 1,
//     marginTop: '50px',
//     padding: '0 20px',
//     width: '100%',
//     maxWidth: '1200px',
//     boxSizing: 'border-box',
//   },
//   cardContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap', // Allow cards to wrap to the next line
//   },
//   card: {
//     width: '20rem',
//     border: '2px solid royalblue',
//     margin: '10px',
//     boxSizing: 'border-box',
//   },
//   cardImage: {
//     width: '100%',
//     height: 'auto',
//   },
//   cardBody: {
//     padding: '1rem',
//   },
//   cardText: {
//     marginBottom: '1rem',
//   },
//   button: {
//     display: 'inline-block',
//     padding: '0.5rem 1rem',
//     backgroundColor: 'lightsteelblue',
//     color: 'white',
//     textDecoration: 'none',
//     borderRadius: '5px',
//   },
//   // Responsive design
//   '@media (max-width: 768px)': {
//     cardContainer: {
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     card: {
//       width: '90%',
//       margin: '10px 0',
//     },
//     cardBody: {
//       padding: '0.5rem',
//     },
//     cardText: {
//       fontSize: '0.9rem',
//     },
//     button: {
//       padding: '0.4rem 0.8rem',
//       fontSize: '0.9rem',
//     },
//   },
// };

// export default Home;
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const image = 'https://media.istockphoto.com/id/540533738/photo/blue-background.jpg?s=612x612&w=0&k=20&c=X3doabKNqbK6hBhq7vq5c8zQOYwycVFubOkxZC9NMoc=';

  return (
    <div style={styles.homeContainer}>
      <img src={image} alt="Background" style={styles.backgroundImage} />
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Car Service Portal</h1>
        <p style={styles.subText}>Choose your role to get started</p>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHsqnDcecy2x1mS3WVphJpH1Yo26TQIUG7Q&s" alt="Service Centre" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardText}>Register as a Car Service Center</p>
              <Link to="/serviceCentreRegister" style={styles.button}>Service Center</Link>
            </div>
          </div>
          <div style={styles.card}>
            <img src="https://www.shutterstock.com/image-photo/adult-man-customer-male-buyer-600nw-2472557887.jpg" alt="Customer" style={styles.cardImage} />
            <div style={styles.cardBody}>
              <p style={styles.cardText}>Register as a User for best service</p>
              <Link to="/userRegister" style={styles.button}>Customer</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  homeContainer: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
  },
  backgroundImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -2,
    objectFit: 'cover',
    // filter: 'brightness(50%)', // Dim the background image
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: -1,
  },
  content: {
    zIndex: 1,
    padding: '20px',
    width: '100%',
    maxWidth: '1200px',
    color: 'white',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  subText: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    width: '280px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '20px',
  },
  cardText: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: '#fff',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1e90ff',
    color: 'white',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#104f94',
  },
  cardContainerHover: {
    transform: 'scale(1.05)', // Scale effect on hover
  },
  // Responsive design
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2rem',
    },
    subText: {
      fontSize: '1rem',
    },
    cardContainer: {
      flexDirection: 'column',
    },
  },
};

export default Home;
