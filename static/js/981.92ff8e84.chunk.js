"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[981],{8981:function(t,s,e){e.r(s),e.d(s,{default:function(){return R}});var a=e(8683),o=e(5671),r=e(3144),n=e(136),i=e(5716),u=e(2791),l=e(4294),d="Profile_INfo__sIwqu",p="ProfileInfo_description__BvgVD",c="ProfileInfo_descriptionTextInfo__B5n8q",f="ProfileInfo_parentDivProfileInfo__+aQdH",h=e(7809),x=e(885),v=e(184),m=function(t){var s=(0,u.useState)(!1),e=(0,x.Z)(s,2),a=e[0],o=e[1],r=(0,u.useState)(t.status),n=(0,x.Z)(r,2),i=n[0],l=n[1];(0,u.useEffect)((function(){l(t.status)}),[t.status]);return(0,v.jsxs)("div",{children:[!a&&(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Status:"})," ",(0,v.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status})]}),a&&(0,v.jsx)("div",{children:(0,v.jsx)("input",{value:i,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(i)}})})]})},A=e(4353),j=function(t){if(!t.profile)return(0,v.jsx)(h.p,{});var s=t.profile.photos.large;return(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)(m,{status:t.status?t.status:"No status",updateStatus:t.updateStatus}),t.isOwner&&(0,v.jsxs)("label",{children:[(0,v.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&t.savePhoto(s.target.files[0])},style:{width:"120px"}}),(0,v.jsx)("span",{children:"Upload your avatar"}),"   "]}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("img",{src:s||A,alt:"Users Avatar losted",style:{width:"300px"}}),(0,v.jsxs)("div",{className:c,children:[(0,v.jsxs)("div",{children:["Fullname: ",(0,v.jsx)("b",{children:t.profile.fullName})]}),(0,v.jsxs)("div",{children:["about me: ",t.profile.aboutMe?t.profile.aboutMe:"not yet added"]}),(0,v.jsx)("div",{children:(0,v.jsx)("b",{children:"Contacts:"})}),(0,v.jsxs)("div",{children:["facebook: ",t.profile.contacts.facebook?t.profile.contacts.facebook:"not yet added"]}),(0,v.jsxs)("div",{children:["github: ",t.profile.contacts.github?t.profile.contacts.instagram:"not yet added"]}),(0,v.jsxs)("div",{children:["instagram:",t.profile.contacts.instagram?t.profile.contacts.instagram:"not yet added"]}),(0,v.jsxs)("div",{children:["vk: ",t.profile.contacts.vk?t.profile.contacts.vk:"not yet added"]}),(0,v.jsxs)("div",{children:["website: ",t.profile.contacts.website?t.profile.contacts.website:"not yet added"]}),(0,v.jsxs)("div",{children:["youtube: ",t.profile.contacts.youtube?t.profile.contacts.youtube:"not yet added"]}),(0,v.jsx)("hr",{})]})]})]})},P={postsBlock:"MyPosts_postsBlock__7JsbF",posts:"MyPosts_posts__syEqK",formText:"MyPosts_formText__NcpBS",textAreaInput:"MyPosts_textAreaInput__bK6Zx"},g="Post_item__8Cr6b",y="Post_avatarPost__iLU56",k="Post_footerPost__3Jib6",I=e(9576),b=function(t){var s=(0,u.useState)(t.Likes),e=(0,x.Z)(s,2),a=e[0],o=e[1];return(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)("img",{src:t.avatars?t.avatars:A,alt:"download img fail",className:y}),t.message,(0,v.jsxs)("div",{className:k,children:[(0,v.jsx)("img",{onClick:function(){return o(a+1)},src:I,alt:"Likes",style:{height:"30px"}}),(0,v.jsxs)("span",{children:[" ",a]})]})]})},C=e(6139),N=e(704),q=e(3079),O=e(7520),D=(0,q.D)(50),T=u.memo((function(t){var s=t.state.postsData.map((function(s){return(0,v.jsx)("div",{className:P.posts,children:(0,v.jsx)(b,{message:s.message,Likes:s.Likes,avatars:t.state.profile.photos.large})},s.id)}));return(0,v.jsxs)("div",{className:P.postsBlock,children:[(0,v.jsx)("div",{children:(0,v.jsx)(B,{onSubmit:function(s){t.sendPostHandler(s.newPosts),s.newPosts=""}})}),s]})})),H=u.memo((function(t){return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{onSubmit:t.handleSubmit,className:P.formText,children:[(0,v.jsx)(C.Z,{component:O.Kx,validate:[q.P,D],name:"newPosts",placeholder:"Enter your message",className:P.textAreaInput}),(0,v.jsx)("button",{className:P.buttonInTextArea,children:"Send"})]})})})),B=(0,N.Z)({form:"postsFormRedux"})(H),Z=e(364),E=(0,Z.$j)((function(t){return{state:t.profilePage}}),(function(t){return{sendPostHandler:function(s){t((0,l.q2)(s))},keyPressHandlerText:function(s,e){"Enter"===s.key&&t((0,l.q2)(e))}}}))(T),w=function(t){return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)(j,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,postsData:t.postsData}),(0,v.jsx)(E,{})]})},S=e(9271),Q=e(2163),K=e(7781),L=function(t){(0,n.Z)(e,t);var s=(0,i.Z)(e);function e(){return(0,o.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)(w,(0,a.Z)((0,a.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,postsData:this.props.postsData}))}}]),e}(u.Component),R=(0,K.qC)((0,Z.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth,postsData:t.profilePage.postsData}}),{updateStatus:l.Nf,getStatus:l.lR,setUserProfile:l.$l,savePhoto:l.Ju,getUserProfile:l.et}),S.EN,Q.e)(L)},2163:function(t,s,e){e.d(s,{e:function(){return d}});var a=e(8683),o=e(5987),r=(e(2791),e(9271)),n=e(364),i=e(184),u=["isAuth"],l=function(t){return{isAuth:t.auth.isAuth}};function d(t){return(0,n.$j)(l)((function(s){var e=s.isAuth,n=(0,o.Z)(s,u);return e?(0,i.jsx)(t,(0,a.Z)({},n)):(0,i.jsx)(r.l_,{to:"/login"})}))}},9576:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=981.92ff8e84.chunk.js.map