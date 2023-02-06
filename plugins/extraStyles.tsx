import { Plugin } from "$fresh/server.ts";

const extraStyles: Plugin = {
  name: "extraStyles",
  render: (ctx) => {
    return {
      scripts: [{ entrypoint: "main", state: [] }],
      styles: [{
        cssText:
          ".dropbtn{background-color:#3498DB;color:white;padding:16px;font-size:16px;border:none;cursor:pointer}.dropbtn:hover,.dropbtn:focus{background-color:#2980B9}.dropdown{position:relative;display:inline-block}.dropdown-content{display:none;position:absolute;background-color:#f1f1f1;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1}.dropdown-content a{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content a:hover{background-color:#ddd;}.show{display:block;}",
      }],
    };
  },
};

export default extraStyles;
