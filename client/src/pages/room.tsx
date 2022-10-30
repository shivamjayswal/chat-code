// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import RoomControls from "../components/RoomControls";
// import { Grid, GridItem, Box } from "@chakra-ui/react";
// import { ChatDiscord, ChatDiscordButton } from "../components/ChatDiscord";

// const Room = (props) => {
//   const [isChatOpen, setIsChatOpen] = useState(true);
//   const [editorSize, setEditorSize] = useState(8);
//   const [chatSize, setChatSize] = useState(2);

//   const manageSize = () => {
//     if (isChatOpen) {
//       setEditorSize(10);
//       setChatSize(0);
//     } else {
//       setEditorSize(8);
//       setChatSize(2);
//     }
//     setIsChatOpen(!isChatOpen);
//   };
//   return (
//     <div>
//       <Navbar />
//       <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(10, 1fr)">
//         <GridItem colSpan={chatSize} colStart={11} bg="tsizeomato">
//           <div onClick={manageSize}>
//             <ChatDiscordButton></ChatDiscordButton>
//           </div>
//         </GridItem>
//       </Grid>

//       <Grid
//         h="80vh"
//         templateRows="repeat(1, 1fr)"
//         templateColumns="repeat(10, 1fr)"
//       >
//         <GridItem colSpan={editorSize}>
//           <RoomControls />
//         </GridItem>
//         <GridItem colSpan={chatSize}>
//           {/* <div onClick={manageSize}><ChatDiscordButton></ChatDiscordButton></div> */}
//           {isChatOpen ? (
//             <Box
//               h="85vh"
//               borderLeft="4px"
//               borderLeftColor="whiteAlpha.400"
//               p="20px"
//               backgroundColor="whiteAlpha.400"
//             >
//               // ! there is no room in /room/ so room id is undefined
//               <ChatDiscord roomId=""></ChatDiscord>{" "}
//             </Box>
//           ) : null}
//         </GridItem>
//       </Grid>
//     </div>
//   );
// };

// export default Room;

import React from "react";

interface roomProps {}

export const room: React.FC<roomProps> = ({}) => {
  return <div>this is just for room test</div>;
};

export default room;
