"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[461],{5448:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(5043),s=n(649);const l=(e,t)=>{const[n,l]=(0,a.useState)(!1);return[n,(n,a,o,r)=>{l(!0),s.A.invoke(n,a,o,r).then((t=>{l(!1),e(t)})).catch((e=>{l(!1),t(e)}))}]}},8461:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(5043),s=n(9923),l=n(4159),o=n(2961),r=n(5448),c=n(8661),i=n(579);const d=e=>{let{deleteOpen:t,selectedTenant:n,closeDeleteModalAndRefresh:d}=e;const m=(0,o.jL)(),[p,u]=(0,a.useState)(""),[h,x]=(0,a.useState)(!1),[b,j]=(0,r.A)((()=>d(!0)),(e=>m((0,l.C9)(e))));return(0,i.jsx)(c.A,{title:"Delete Tenant",confirmText:"Delete",isOpen:t,titleIcon:(0,i.jsx)(s.xWY,{}),isLoading:b,onConfirm:()=>{p===n.name?j("DELETE","/api/v1/namespaces/".concat(n.namespace,"/tenants/").concat(n.name),{delete_pvcs:h}):(0,l.C9)({errorMessage:"Tenant name is incorrect",detailedError:""})},onClose:()=>d(!1),confirmButtonProps:{disabled:p!==n.name||b},confirmationContent:(0,i.jsxs)(s.Hbc,{withBorders:!1,containerPadding:!1,children:[h&&(0,i.jsx)(s.xA9,{item:!0,xs:12,className:"inputItem",children:(0,i.jsx)(s.Wei,{variant:"error",title:"WARNING",message:"Delete Volumes: Data will be permanently deleted. Please proceed with caution."})}),"To continue please type ",(0,i.jsx)("b",{children:n.name})," in the box.",(0,i.jsxs)(s.xA9,{item:!0,xs:12,children:[(0,i.jsx)(s.cl_,{id:"retype-tenant",name:"retype-tenant",onChange:e=>{u(e.target.value)},label:"",value:p}),(0,i.jsx)(s.dOG,{checked:h,id:"delete-volumes",label:"Delete Volumes",name:"delete-volumes",onChange:()=>{x(!h)}})]})]})})}}}]);
//# sourceMappingURL=461.dbb22491.chunk.js.map