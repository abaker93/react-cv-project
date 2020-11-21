(this["webpackJsonpreact-cv-project"]=this["webpackJsonpreact-cv-project"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),l=n.n(a),c=n(8),o=n.n(c),s=n(2),d=n(3),r=n(5),h=n(4),u=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{id:"Instructions",children:"Instructions"})}}]),n}(a.Component),j=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handlePhotoChange=function(t){e.setState({photo:t.target.value})},e.handleAddress1Change=function(t){e.setState({address1:t.target.value})},e.handleAddress2Change=function(t){e.setState({address2:t.target.value})},e.handlePhoneChange=function(t){e.setState({phone:t.target.value})},e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.handleWebsiteChange=function(t){e.setState({website:t.target.value})},e.handleLinkedinChange=function(t){e.setState({linkedin:t.target.value})},e.toggleEdit=function(){e.setState((function(e){return{edit:!e.edit}}))},e.toggleEditPhoto=function(){e.setState((function(e){return{editPhoto:!e.editPhoto}}))},e.state={photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",address1:"",address2:"",phone:"",email:"",website:"",linkedin:"",edit:!1,editPhoto:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.photo,n=e.address1,a=e.address2,l=e.phone,c=e.email,o=e.website,s=e.linkedin,d=e.edit,r=e.editPhoto,h={backgroundImage:"url("+t+")"};return Object(i.jsxs)("div",{id:"Info",children:[Object(i.jsx)("div",{className:"header",children:"Resume"}),Object(i.jsx)("div",{id:"profile-photo",style:h,onClick:this.toggleEditPhoto}),Object(i.jsxs)("div",{className:"address",children:[Object(i.jsx)("h2",{children:"Address"}),Object(i.jsx)("p",{children:n||"123 Address St"}),Object(i.jsx)("p",{children:a||"City, ST 55555"})]}),Object(i.jsxs)("div",{className:"phone",children:[Object(i.jsx)("h2",{children:"Phone"}),Object(i.jsx)("p",{children:l||"555-555-5555"})]}),Object(i.jsxs)("div",{className:"email",children:[Object(i.jsx)("h2",{children:"Email"}),Object(i.jsx)("p",{children:c||"info@website.com"})]}),Object(i.jsxs)("div",{className:"online",children:[Object(i.jsx)("h2",{children:"Online"}),Object(i.jsx)("p",{children:o||"website.com"}),Object(i.jsxs)("p",{children:["linkedin.com/in/",s||"user-name"]})]}),Object(i.jsx)("button",{className:"edit-toggle",type:"button",onClick:this.toggleEdit,children:"Edit"}),d&&Object(i.jsxs)("form",{id:"intro-edit",className:"edit-form",children:[Object(i.jsx)("label",{htmlFor:"address1",children:"Address"}),Object(i.jsx)("input",{id:"address1",type:"text",placeholder:"123 Address St",onChange:this.handleAddress1Change}),Object(i.jsx)("label",{htmlFor:"address2",children:"City, State, & Zip Code"}),Object(i.jsx)("input",{id:"address2",type:"text",placeholder:"City, ST 55555",onChange:this.handleAddress2Change}),Object(i.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(i.jsx)("input",{id:"phone",type:"text",onChange:this.handlePhoneChange}),Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{id:"email",type:"text",onChange:this.handleEmailChange}),Object(i.jsx)("label",{htmlFor:"website",children:"Website"}),Object(i.jsx)("input",{id:"website",type:"text",onChange:this.handleWebsiteChange}),Object(i.jsx)("label",{htmlFor:"linkedin",children:"LinkedIn Username"}),Object(i.jsx)("input",{id:"linkedin",type:"text",onChange:this.handleLinkedinChange}),Object(i.jsx)("button",{type:"button",onClick:this.toggleEdit,children:"Close Edit"})]}),r&&Object(i.jsxs)("form",{id:"photo-edit",className:"edit-form",children:[Object(i.jsx)("label",{htmlFor:"photo",children:"Photo URL"}),Object(i.jsx)("input",{id:"photo",type:"text",onChange:this.handlePhotoChange}),Object(i.jsx)("button",{type:"button",onClick:this.toggleEditPhoto,children:"Close Edit"})]})]})}}]),n}(a.Component),b=n(6),p=n.n(b),g=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSkillChange=function(t){e.setState({skill:t.target.value})},e.onSubmitSkill=function(t){t.preventDefault(),e.setState({skills:e.state.skills.concat(e.state.skill),skill:""}),e.toggleEdit()},e.toggleEdit=function(){e.setState((function(e){return{edit:!e.edit}}))},e.handleRemove=function(t){var n=e.state.skills.filter((function(e){return e.id!==t}));e.setState({skills:n})},e.state={skill:"",skills:[{id:p()(),skill:"Creative thinking"},{id:p()(),skill:"Communication"},{id:p()(),skill:"Listening"},{id:p()(),skill:"Detail-Oriented"},{id:p()(),skill:"Time Management"},{id:p()(),skill:"Problem Solving"},{id:p()(),skill:"Artistic Eye"},{id:p()(),skill:"Adaptability"}],edit:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.skill,a=t.skills,l=t.edit;return Object(i.jsxs)("div",{id:"Skills",children:[Object(i.jsx)("h2",{children:"Skills"}),Object(i.jsx)("ul",{children:a.map((function(t){return Object(i.jsx)("li",{onClick:function(){return e.handleRemove(t.id)},children:t.skill},t.id)}))}),Object(i.jsx)("button",{className:"edit-toggle",type:"button",onClick:this.toggleEdit,children:"Add"}),l&&Object(i.jsxs)("form",{id:"skill-add",className:"edit-form",children:[Object(i.jsx)("label",{htmlFor:"skill",children:"Skill"}),Object(i.jsx)("input",{id:"skill",type:"text",value:n,onChange:this.handleSkillChange}),Object(i.jsx)("button",{type:"button",onClick:this.onSubmitExperience,children:"Add Experience"}),Object(i.jsx)("button",{type:"button",onClick:this.toggleEdit,children:"Close"})]})]})}}]),n}(a.Component),m=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("aside",{id:"Aside",children:[Object(i.jsx)(j,{}),Object(i.jsx)(g,{})]})}}]),n}(a.Component),x=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleNameChange=function(t){e.setState({name:t.target.value})},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleProfileChange=function(t){e.setState({profile:t.target.value})},e.toggleEdit=function(){e.setState((function(e){return{edit:!e.edit}}))},e.state={name:"",title:"",profile:"",edit:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.title,a=e.profile,l=e.edit;return Object(i.jsxs)("div",{id:"Intro",children:[Object(i.jsx)("h1",{children:t||"Your name"}),Object(i.jsx)("p",{className:"title",children:n||"Your title"}),Object(i.jsx)("h2",{children:"Profile"}),Object(i.jsx)("p",{className:"profile",children:a||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(i.jsx)("button",{className:"edit-toggle",type:"button",onClick:this.toggleEdit,children:"Edit"}),l&&Object(i.jsxs)("form",{id:"intro-edit",className:"edit-form",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Your name"}),Object(i.jsx)("input",{id:"name",type:"text",onChange:this.handleNameChange}),Object(i.jsx)("label",{htmlFor:"title",children:"Your title"}),Object(i.jsx)("input",{id:"title",type:"text",onChange:this.handleTitleChange}),Object(i.jsx)("label",{htmlFor:"profile",children:"Profile"}),Object(i.jsx)("textarea",{id:"profile",onChange:this.handleProfileChange}),Object(i.jsx)("button",{type:"button",onClick:this.toggleEdit,children:"Close Edit"})]})]})}}]),n}(a.Component),O=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSchoolChange=function(t){e.setState({school:t.target.value})},e.handleDegreeChange=function(t){e.setState({degree:t.target.value})},e.handleStartDateChange=function(t){e.setState({startDate:t.target.value})},e.handleEndDateChange=function(t){e.setState({endDate:t.target.value})},e.handleLocationChange=function(t){e.setState({location:t.target.value})},e.handleMinorChange=function(t){e.setState({minor:t.target.value})},e.handleGPAChange=function(t){e.setState({gpa:t.target.value})},e.onSubmitEducation=function(t){t.preventDefault(),e.setState({education:e.state.education.concat({id:p()(),school:e.state.school,degree:e.state.degree,date:e.state.startDate+" - "+e.state.endDate,location:e.state.location,minor:e.state.minor,gpa:e.state.gpa}),school:"",degree:"",startDate:"",endDate:"",location:"",minor:"",gpa:""}),e.toggleEdit()},e.toggleEdit=function(){e.setState((function(e){return{edit:!e.edit}}))},e.handleRemove=function(t){var n=e.state.education.filter((function(e){return e.id!==t}));e.setState({education:n})},e.state={school:"",degree:"",startDate:"",endDate:"",location:"",minor:"",gpa:"",education:[{id:p()(),school:"Cool University",degree:"B.S. Web Development",date:"Aug 2019 - July 2020",location:"New York City, NY",minor:"Lorem ipsum dolor",gpa:"4.0"}],edit:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.school,a=t.degree,l=t.startDate,c=t.endDate,o=t.location,s=t.minor,d=t.gpa,r=t.education,h=t.edit;return Object(i.jsxs)("div",{id:"Education",children:[Object(i.jsx)("h2",{children:"Education"}),r.map((function(t){return Object(i.jsxs)("div",{onClick:function(){return e.handleRemove(t.id)},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"education-date",children:t.date}),Object(i.jsx)("p",{className:"education-degree",children:t.degree})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"education-school",children:t.school}),Object(i.jsx)("p",{className:"education-location",children:t.location}),Object(i.jsxs)("p",{className:"education-minor",children:["minor: ",t.minor]}),Object(i.jsxs)("p",{className:"education-gpa",children:["gpa: ",t.gpa]})]})]},t.id)})),Object(i.jsx)("button",{className:"edit-toggle",type:"button",onClick:this.toggleEdit,children:"Add"}),h&&Object(i.jsxs)("form",{id:"education-add",className:"edit-form",children:[Object(i.jsx)("label",{htmlFor:"school",children:"School"}),Object(i.jsx)("input",{id:"school",type:"text",value:n,onChange:this.handleSchoolChange}),Object(i.jsx)("label",{htmlFor:"degree",children:"Degree"}),Object(i.jsx)("input",{id:"degree",type:"text",value:a,onChange:this.handleDegreeChange}),Object(i.jsx)("label",{htmlFor:"start-date",children:"Start Date"}),Object(i.jsx)("input",{id:"start-date",type:"text",value:l,placeholder:"Month & Year",onChange:this.handleStartDateChange}),Object(i.jsx)("label",{htmlFor:"end-date",children:"End Date"}),Object(i.jsx)("input",{id:"end-date",type:"text",value:c,placeholder:"Month & Year",onChange:this.handleEndDateChange}),Object(i.jsx)("label",{htmlFor:"location",children:"Location"}),Object(i.jsx)("input",{id:"location",type:"text",value:o,onChange:this.handleLocationChange}),Object(i.jsx)("label",{htmlFor:"minor",children:"Minor"}),Object(i.jsx)("input",{id:"minor",type:"text",value:s,onChange:this.handleMinorChange}),Object(i.jsx)("label",{htmlFor:"gpa",children:"GPA"}),Object(i.jsx)("input",{id:"gpa",type:"text",value:d,onChange:this.handleGPAChange}),Object(i.jsx)("button",{type:"button",onClick:this.onSubmitEducation,children:"Add Education"}),Object(i.jsx)("button",{type:"button",onClick:this.toggleEdit,children:"Close"})]})]})}}]),n}(a.Component),C=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleCompanyChange=function(t){e.setState({company:t.target.value})},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleStartDateChange=function(t){e.setState({startDate:t.target.value})},e.handleEndDateChange=function(t){e.setState({endDate:t.target.value})},e.handleLocationChange=function(t){e.setState({location:t.target.value})},e.handleDescChange=function(t){e.setState({desc:t.target.value})},e.onSubmitExperience=function(t){t.preventDefault(),e.setState({experience:e.state.experience.concat({id:p()(),company:e.state.company,title:e.state.title,date:e.state.startDate+" - "+e.state.endDate,location:e.state.location,desc:e.state.desc}),company:"",title:"",startDate:"",endDate:"",location:"",desc:""}),e.toggleEdit()},e.toggleEdit=function(){e.setState((function(e){return{edit:!e.edit}}))},e.handleRemove=function(t){var n=e.state.experience.filter((function(e){return e.id!==t}));e.setState({experience:n})},e.state={company:"",title:"",startDate:"",endDate:"",location:"",desc:"",experience:[{id:p()(),company:"Super Awesome Web Company",title:"Senior Web Developer",date:"Aug 2019 - July 2020",location:"New York City, NY",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:p()(),company:"Another Web Company",title:"Junior Web Developer",date:"Nov 2016 - Aug 2019",location:"New York City, NY",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],edit:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.company,a=t.title,l=t.startDate,c=t.endDate,o=t.location,s=t.desc,d=t.experience,r=t.edit;return Object(i.jsxs)("div",{id:"Experience",children:[Object(i.jsx)("h2",{children:"Experience"}),d.map((function(t){return Object(i.jsxs)("div",{onClick:function(){return e.handleRemove(t.id)},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"experience-date",children:t.date}),Object(i.jsx)("p",{className:"experience-title",children:t.title})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"experience-company",children:t.company}),Object(i.jsx)("p",{className:"experience-location",children:t.location}),Object(i.jsx)("p",{className:"experience-desc",children:t.desc})]})]},t.id)})),Object(i.jsx)("button",{className:"edit-toggle",type:"button",onClick:this.toggleEdit,children:"Add"}),r&&Object(i.jsxs)("form",{id:"experience-add",className:"edit-form",children:[Object(i.jsx)("label",{htmlFor:"company",children:"Company"}),Object(i.jsx)("input",{id:"company",type:"text",value:n,onChange:this.handleCompanyChange}),Object(i.jsx)("label",{htmlFor:"title",children:"Title"}),Object(i.jsx)("input",{id:"title",type:"text",value:a,onChange:this.handleTitleChange}),Object(i.jsx)("label",{htmlFor:"start-date",children:"Start Date"}),Object(i.jsx)("input",{id:"start-date",type:"text",value:l,onChange:this.handleStartDateChange}),Object(i.jsx)("label",{htmlFor:"end-date",children:"End Date"}),Object(i.jsx)("input",{id:"end-date",type:"text",value:c,onChange:this.handleEndDateChange}),Object(i.jsx)("label",{htmlFor:"location",children:"Location"}),Object(i.jsx)("input",{id:"location",type:"text",value:o,onChange:this.handleLocationChange}),Object(i.jsx)("label",{htmlFor:"desc",children:"Description"}),Object(i.jsx)("input",{id:"desc",type:"text",value:s,onChange:this.handleDescChange}),Object(i.jsx)("button",{type:"button",onClick:this.onSubmitExperience,children:"Add Experience"}),Object(i.jsx)("button",{type:"button",onClick:this.toggleEdit,children:"Close"})]})]})}}]),n}(a.Component),f=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"Resume",children:[Object(i.jsx)(m,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(x,{}),Object(i.jsx)(O,{}),Object(i.jsx)(C,{})]})]})}}]),n}(a.Component),v=(n(15),function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"App",children:[Object(i.jsx)(u,{}),Object(i.jsx)(f,{})]})}}]),n}(a.Component));o.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7d6195dd.chunk.js.map