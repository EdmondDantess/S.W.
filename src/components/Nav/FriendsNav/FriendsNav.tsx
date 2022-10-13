 import React from 'react';
// import obc from './FriendsNav.module.css';
// import { usersPropsDataType} from '../../../redux/usersPage-reducer';
//
// type friendsNavProps = {
//     id: number;
//     name: string;
//     urlAvatar: string;
// };
//
// type FriendsElementNavProps = {
//     friends: usersPropsDataType[];
// };
//
// export const FriendsNav = (props: FriendsElementNavProps) => {
//
//     let myFriends = props.friends.filter(u => u.followed)
//
//   console.log(myFriends)
//
//     let friends = myFriends.map((el) => {
//       if (el.id < 5) {
//         return (
//           <div key={el.id} className={obc.friensBlockParent}>
//             <div className={obc.blockImgName}>
//               <img src={el.urlPhoto} className={obc.friendsAvatars} alt="No avatar" />
//             <p>{el.fullName}</p>
//             </div>
//           </div>
//         );
//       }
//     });
//
//
//     return <div className={obc.friendsObj}>{friends}</div>;
// };
