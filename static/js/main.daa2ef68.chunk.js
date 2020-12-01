(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__iwrH0",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1JcAO"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3Xdru",Modal:"Modal_Modal__xb_mw"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2yGWR"}},25:function(e,t,a){e.exports={Button:"Button_Button__1nx81"}},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(21),s=a.n(o),l=a(12),i=a(4),u=a(5),m=a(7),h=a(6),p=a(22),d=a.n(p),g=a(8),b=a.n(g),j=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){var a=t.target;e.setState({inputValue:a.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:b.a.Searchbar,children:Object(n.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(n.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})]})})}}]),a}(r.Component),f=a(10),y=a.n(f),O=function(e){var t=e.item,a=e.toOpen,r=t.webformatURL,c=t.largeImageURL,o=t.tags;return Object(n.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:r,onClick:a,alt:o,className:y.a.ImageGalleryItemImage,"data-src":c})})},v=a(23),S=a.n(v),_=function(e){var t=e.list,a=e.toOpen;return Object(n.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(O,{toOpen:a,item:e},e.id)}))})},I=a(24),x=a.n(I),w=function(){return Object(n.jsx)(x.a,{type:"Hearts",color:"#00BFFF",height:80,width:80,timeout:3e3})},F=a(25),k=a.n(F),B=function(e){var t=e.toAdd;return Object(n.jsx)("button",{className:k.a.Button,onClick:t,type:"button",children:" Load more.. "})},C=a(11),G=a.n(C),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeByEsc=function(t){"Escape"===t.code&&e.props.toClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeByEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeByEsc)}},{key:"render",value:function(){var e=this.props,t=e.source,a=e.toClose;return Object(n.jsx)("div",{onClick:a,className:G.a.Overlay,children:Object(n.jsx)("div",{className:G.a.Modal,children:Object(n.jsx)("img",{onClick:a,src:t,alt:""})})})}}]),a}(r.Component),M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,page:1,error:null,searchQuery:"",imgUrl:null},e.fetchImages=function(){e.setState({loading:!0});var t=e.state,a=t.page,n=t.searchQuery,r="https://pixabay.com/api/?q=".concat(n,"&page=").concat(a,"&key=18952122-26c4c8572f246f891e5c3799b&image_type=photo&orientation=horizontal&per_page=12");d.a.get(r).then((function(e){return e.data.hits})).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.searchImages=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.openModal=function(t){e.setState({imgUrl:t.target.dataset.src})},e.closeModal=function(){e.setState({imgUrl:null})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.images,r=e.error,c=e.imgUrl;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{onSubmit:this.searchImages}),r&&Object(n.jsx)("p",{children:r.message}),a.length>0&&Object(n.jsx)(_,{toOpen:this.openModal,list:a}),t&&Object(n.jsx)(w,{}),a.length>0&&Object(n.jsx)(B,{toAdd:this.fetchImages}),c?Object(n.jsx)(N,{toClose:this.closeModal,source:c}):""]})}}]),a}(r.Component);a(69);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2xYIO",SearchForm:"Searchbar_SearchForm__1J5TO",SearchFormButton:"Searchbar_SearchFormButton__1nI0N",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2Mf5v",SearchFormInput:"Searchbar_SearchFormInput__3ARea"}}},[[70,1,2]]]);
//# sourceMappingURL=main.daa2ef68.chunk.js.map