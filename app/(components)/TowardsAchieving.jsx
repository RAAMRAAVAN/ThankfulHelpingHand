import { Box, Grid, Typography } from "@mui/material";
import { MedantaOrange } from "./Global";
import Image from "next/image";
import { MonitorHeart } from "@mui/icons-material";

const UpcomingAchievements = [{id: 1, color:'#ba75b2', text:'Good Health & Whell Being', img:"FIELDS/health_icon.gif"}, 
  {id: 2,color:'#f1719c', text:'Gender Equality', img:'FIELDS/equality.png'}, 
  {id: 3,color:'#f8be46', text:'Quality Education', img:'FIELDS/education.gif'}, 
  {id: 4,color:'#50b256', text:'Decent Work & Economic Groth', img:'FIELDS/economic-growth.gif'}, 
  {id: 5,color:'#606ec2', text:'Partnerships for the Goal', img:'FIELDS/handshake.gif'}];
const TowardsAchieving = () => {
  return (
    <>
      <Box
        display="flex"
        width="100%"
        // border="1px black solid"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          fontWeight="bold"
          fontSize={25}
          color={MedantaOrange}
          textAlign="center"
        >
          TOWARDS ACHIEVING
        </Typography>

        <Typography fontSize={25} textAlign='center'>SUSTAINABLE DEVELOPMENT GOALS</Typography>
        <Grid container justifyContent="center" marginY={5}>
          {UpcomingAchievements.map((achieve, index) => {
            return (
              <Grid item lg={2} md={4} sm={6} xs={6}>
                <Box
                  display="flex"
                  width="100%"
                  position="relative"
                  justifyContent="center"
                >
                  <svg
                    width="200"
                    height="200"
                    // style={{ border: "1px solid #ccc" }}
                  >
                    <path
                      d="
                      M100,10
                      L173.3,50
                      Q180,55 173.3,60
                      L173.3,140
                      Q180,145 173.3,150
                      L100,190
                      Q93.3,195 100,190
                      L26.7,150
                      Q20,145 26.7,140
                      L26.7,60
                      Q20,55 26.7,50
                      Z
                    "
                      fill={achieve.color}
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>

                  <Box
                    position="absolute"
                    display="flex"
                    justifyContent="center"
                    width="80%"
                    top={30}
                    // marginRight={2}
                  >
                    <Image src={achieve.img} width={60} height={60} alt='health'/>
                  </Box>

                  <Box
                    position="absolute"
                    display="flex"
                    justifyContent="center"
                    // border='1px black solid'
                    width="70%"
                    top={100}
                  >
                    <Typography
                      fontSize={12}
                      color="white"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {achieve.text}
                    </Typography>
                  </Box>

                  <Box
                    position="absolute"
                    display="flex"
                    justifyContent="center"
                    // width="30%"
                    
                    bottom={25}
                    marginRight={1}
                  >
                    <Typography
                      fontSize={16}
                      color="white"
                      fontWeight="bold"
                      textAlign="center"
                    >
                      #{achieve.id}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default TowardsAchieving;
