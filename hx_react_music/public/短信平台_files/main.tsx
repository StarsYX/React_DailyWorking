var _jsxFileName = "/Users/mac/ai-text-message-web/src/main.tsx";
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=4576858e"; const createContext = __vite__cjsImport0_react["createContext"];
import __vite__cjsImport1_reactDom from "/node_modules/.vite/deps/react-dom.js?v=4576858e"; const ReactDOM = __vite__cjsImport1_reactDom.__esModule ? __vite__cjsImport1_reactDom.default : __vite__cjsImport1_reactDom;
import App from "/src/App.tsx?t=1684406196311";
import ENV from "/src/config/env.ts";
import { createBrowserHistory } from "/node_modules/.vite/deps/history.js?v=4576858e";
import { Provider } from "/node_modules/.vite/deps/mobx-react.js?v=4576858e";
import { ConfigProvider } from "/node_modules/.vite/deps/antd.js?v=4576858e";
import "/src/index.css";
import login, { storeLogin, getQueryString } from "/src/utils/auth.ts";
import commonStore from "/src/stores/commonStore.ts";
import payStore from "/src/stores/checkGroupStore.ts";
import { jsxDEV as _jsxDEV } from "/@id/__x00__react/jsx-dev-runtime";
const ssoUrl = `${ENV.GETEWAY_BASE}/xin/sso/authorize?client_id=${ENV.SSO.client_id}&scope=all&state=oa&response_type=code&redirect_uri=${ENV.SSO.redirect_url}`;
const history = createBrowserHistory({
  basename: ""
});
const sto = {
  commonStore,
  payStore
};
const CrContext = createContext(sto);
export { CrContext };
function loader() {
  const Els = /* @__PURE__ */ _jsxDEV(Provider, {
    children: /* @__PURE__ */ _jsxDEV(CrContext.Provider, {
      value: sto,
      children: /* @__PURE__ */ _jsxDEV(ConfigProvider, {
        children: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
  ReactDOM.render(Els, document.getElementById("root"));
}
async function bootstrap() {
  if (login()) {
    loader();
    return;
  }
  if (getQueryString("code")) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        const ssologin = JSON.parse(xhr.response);
        if (!ssologin.error) {
          storeLogin("SSOLOGIN")(ssologin);
          let commingUrl = localStorage.commingUrl;
          localStorage.removeItem("commingUrl");
          commingUrl = commingUrl && !commingUrl.includes("?code=") ? commingUrl : "";
          commingUrl = commingUrl.replace(ENV.SSO.redirect_url, "");
          commingUrl = commingUrl.replace("/webapps/e-signature-web", "");
          history.push({
            pathname: commingUrl
          });
        }
      }
    };
    xhr.open("GET", `${ENV.GETEWAY_BASE}/xin/oauth2/token?client_id=${ENV.SSO.client_id}&client_secret=${ENV.SSO.client_secret}&grant_type=authorization_code&code=${String(getQueryString("code"))}`, false);
    xhr.send();
    loader();
    return;
  }
  if (window.location.href !== ENV.SSO.redirect_url && window.location.href !== `${ENV.SSO.redirect_url}/`) {
    localStorage.commingUrl = window.location.href;
  }
  window.location.href = ssoUrl;
}
export default bootstrap();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBZ0Q7QUFFaEQsTUFBTUEsU0FBVSxHQUFFQyxJQUFJQyw0Q0FBNENELElBQUlFLElBQUlDLGdFQUFnRUgsSUFBSUUsSUFBSUU7QUFDbEosTUFBTUMsVUFBVUMscUJBQXFCO0FBQUEsRUFDbkNDLFVBQVU7QUFDWixDQUFDO0FBWUQsTUFBTUMsTUFBTTtBQUFBLEVBQ1ZDO0FBQUFBLEVBQ0FDO0FBQ0Y7QUFDQSxNQUFNQyxZQUFZQyxjQUFjSixHQUFHO0FBQ25DO0FBQ0Esa0JBQWtCO0FBQ2hCLFFBQU1LLE1BQ0pDLHdCQUFDQyxVQUFRO0FBQUEsY0FDUEQsd0JBQUNILFVBQVVJLFVBQVE7QUFBQSxNQUFDQyxPQUFPUjtBQUFBQSxNQUFJUyxVQUMzQkgsd0JBQUNJLGdCQUFjO0FBQUEsa0JBQ2JKLHdCQUFDSyxLQUFHO0FBQUE7QUFBQUM7QUFBQTtBQUFBLGVBQUU7QUFBQSxNQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGFBQ087QUFBQSxJQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLFdBQ0Q7QUFBQSxFQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLFNBQ2I7QUFHWkMsV0FBU0MsT0FBT1QsS0FBS1UsU0FBU0MsZUFBZSxNQUFNLENBQUM7QUFDdEQ7QUFFQSwyQkFBMkI7QUFFekIsTUFBSUMsTUFBTSxHQUFHO0FBQ1hDLFdBQU87QUFDUDtBQUFBLEVBQ0Y7QUFDQSxNQUFJQyxlQUFlLE1BQU0sR0FBRztBQUMxQixRQUFJQyxNQUFNLElBQUlDLGVBQWU7QUFDN0JELFFBQUlFLHFCQUFxQixXQUFZO0FBQ25DLFVBQUlGLElBQUlHLGVBQWUsR0FBRztBQUN4QixjQUFNQyxXQUFXQyxLQUFLQyxNQUFNTixJQUFJTyxRQUFRO0FBQ3hDLFlBQUksQ0FBQ0gsU0FBU0ksT0FBTztBQUVuQkMscUJBQVcsVUFBVSxFQUFFTCxRQUFRO0FBQy9CLGNBQUlNLGFBQWFDLGFBQWFEO0FBQzlCQyx1QkFBYUMsV0FBVyxZQUFZO0FBQ3BDRix1QkFDRUEsY0FBYyxDQUFDQSxXQUFXRyxTQUFTLFFBQVEsSUFBSUgsYUFBYTtBQUM5REEsdUJBQWFBLFdBQVdJLFFBQVExQyxJQUFJRSxJQUFJRSxjQUFjLEVBQUU7QUFDeERrQyx1QkFBYUEsV0FBV0ksUUFBUSw0QkFBNEIsRUFBRTtBQUM5RHJDLGtCQUFRc0MsS0FBSztBQUFBLFlBQ1hDLFVBQVVOO0FBQUFBLFVBQ1osQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBVixRQUFJaUIsS0FDRixPQUNDLEdBQUU3QyxJQUFJQywyQ0FDTEQsSUFBSUUsSUFBSUMsMkJBRVJILElBQUlFLElBQUk0QyxvREFDNkJDLE9BQU9wQixlQUFlLE1BQU0sQ0FBQyxLQUNwRSxLQUNGO0FBQ0FDLFFBQUlvQixLQUFLO0FBQ1R0QixXQUFPO0FBQ1A7QUFBQSxFQUNGO0FBR0EsTUFDRXVCLE9BQU9DLFNBQVNDLFNBQVNuRCxJQUFJRSxJQUFJRSxnQkFDakM2QyxPQUFPQyxTQUFTQyxTQUFVLEdBQUVuRCxJQUFJRSxJQUFJRSxpQkFDcEM7QUFDQW1DLGlCQUFhRCxhQUFhVyxPQUFPQyxTQUFTQztBQUFBQSxFQUM1QztBQUVBRixTQUFPQyxTQUFTQyxPQUFPcEQ7QUFDekI7QUFFQSxlQUFlcUQsVUFBVSIsIm5hbWVzIjpbInNzb1VybCIsIkVOViIsIkdFVEVXQVlfQkFTRSIsIlNTTyIsImNsaWVudF9pZCIsInJlZGlyZWN0X3VybCIsImhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsImJhc2VuYW1lIiwic3RvIiwiY29tbW9uU3RvcmUiLCJwYXlTdG9yZSIsIkNyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJFbHMiLCJfanN4REVWIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiQ29uZmlnUHJvdmlkZXIiLCJBcHAiLCJfanN4RmlsZU5hbWUiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbiIsImxvYWRlciIsImdldFF1ZXJ5U3RyaW5nIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3NvbG9naW4iLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZSIsImVycm9yIiwic3RvcmVMb2dpbiIsImNvbW1pbmdVcmwiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwicHVzaCIsInBhdGhuYW1lIiwib3BlbiIsImNsaWVudF9zZWNyZXQiLCJTdHJpbmciLCJzZW5kIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYm9vdHN0cmFwIl0sInNvdXJjZXMiOlsiL1VzZXJzL21hYy9haS10ZXh0LW1lc3NhZ2Utd2ViL3NyYy9tYWluLnRzeCJdLCJmaWxlIjoiL1VzZXJzL21hYy9haS10ZXh0LW1lc3NhZ2Utd2ViL3NyYy9tYWluLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcbmltcG9ydCBFTlYgZnJvbSBcIi4vY29uZmlnL2VudlwiO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiO1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpbGVTYXZlciBmcm9tIFwiZmlsZS1zYXZlclwiO1xuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCBsb2dpbiwgeyBzdG9yZUxvZ2luLCBnZXRRdWVyeVN0cmluZyB9IGZyb20gXCIuL3V0aWxzL2F1dGhcIjtcbmltcG9ydCBjb21tb25TdG9yZSBmcm9tIFwiLi9zdG9yZXMvY29tbW9uU3RvcmVcIjtcbmltcG9ydCBwYXlTdG9yZSBmcm9tIFwiLi9zdG9yZXMvY2hlY2tHcm91cFN0b3JlXCI7XG5cbmNvbnN0IHNzb1VybCA9IGAke0VOVi5HRVRFV0FZX0JBU0V9L3hpbi9zc28vYXV0aG9yaXplP2NsaWVudF9pZD0ke0VOVi5TU08uY2xpZW50X2lkfSZzY29wZT1hbGwmc3RhdGU9b2EmcmVzcG9uc2VfdHlwZT1jb2RlJnJlZGlyZWN0X3VyaT0ke0VOVi5TU08ucmVkaXJlY3RfdXJsfWA7XG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnkoe1xuICBiYXNlbmFtZTogXCJcIixcbn0pO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGJ0b2E6IGFueTtcbiAgICAkZW1pdHRlcjogYW55O1xuICAgIHJlZnJlc2hpbmc6IGFueTtcbiAgICBzYXZlQXM6IHR5cGVvZiBGaWxlU2F2ZXIuc2F2ZUFzO1xuICAgIElFVkVSU0lPTjogYW55O1xuICB9XG59XG5cbmNvbnN0IHN0byA9IHtcbiAgY29tbW9uU3RvcmUsXG4gIHBheVN0b3JlLFxufTtcbmNvbnN0IENyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoc3RvKTtcbmV4cG9ydCB7IENyQ29udGV4dCB9O1xuZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBFbHMgPSAoXG4gICAgPFByb3ZpZGVyPlxuICAgICAgPENyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RvfT5cbiAgICAgICAgICA8Q29uZmlnUHJvdmlkZXIgPlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgIDwvQ29uZmlnUHJvdmlkZXI+XG4gICAgICA8L0NyQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihFbHMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgLy8g5bey55m76ZmGXG4gIGlmIChsb2dpbigpKSB7XG4gICAgbG9hZGVyKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChnZXRRdWVyeVN0cmluZyhcImNvZGVcIikpIHtcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICBjb25zdCBzc29sb2dpbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgaWYgKCFzc29sb2dpbi5lcnJvcikge1xuICAgICAgICAgIC8vIOeZu+W9leaIkOWKnyAtPiDlrZjlgqjlpb10b2tlbuaVsOaNrui3s+i9rOWIsOS4u+mhtemdolxuICAgICAgICAgIHN0b3JlTG9naW4oXCJTU09MT0dJTlwiKShzc29sb2dpbik7XG4gICAgICAgICAgbGV0IGNvbW1pbmdVcmwgPSBsb2NhbFN0b3JhZ2UuY29tbWluZ1VybDtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNvbW1pbmdVcmxcIik7XG4gICAgICAgICAgY29tbWluZ1VybCA9XG4gICAgICAgICAgICBjb21taW5nVXJsICYmICFjb21taW5nVXJsLmluY2x1ZGVzKFwiP2NvZGU9XCIpID8gY29tbWluZ1VybCA6IFwiXCI7XG4gICAgICAgICAgY29tbWluZ1VybCA9IGNvbW1pbmdVcmwucmVwbGFjZShFTlYuU1NPLnJlZGlyZWN0X3VybCwgXCJcIik7XG4gICAgICAgICAgY29tbWluZ1VybCA9IGNvbW1pbmdVcmwucmVwbGFjZShcIi93ZWJhcHBzL2Utc2lnbmF0dXJlLXdlYlwiLCBcIlwiKTsgLy/mnKzlnLDlvIDlj5HkuJPnlKgg5pys5Zyw5byA5Y+R6YeN5a6a5ZCR5Zyw5Z2A5LiN5ZCr6Lev5b6EXG4gICAgICAgICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBjb21taW5nVXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4aHIub3BlbihcbiAgICAgIFwiR0VUXCIsXG4gICAgICBgJHtFTlYuR0VURVdBWV9CQVNFfS94aW4vb2F1dGgyL3Rva2VuP2NsaWVudF9pZD0ke1xuICAgICAgICBFTlYuU1NPLmNsaWVudF9pZFxuICAgICAgfSZjbGllbnRfc2VjcmV0PSR7XG4gICAgICAgIEVOVi5TU08uY2xpZW50X3NlY3JldFxuICAgICAgfSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZSZjb2RlPSR7U3RyaW5nKGdldFF1ZXJ5U3RyaW5nKFwiY29kZVwiKSl9YCxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICB4aHIuc2VuZCgpO1xuICAgIGxvYWRlcigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8v5rKh5pyJ55m76ZmG77yM5Zyo6Lez6L2s5Yiw55m76ZmG5LmL5YmN6K6w5b2V5Zyw5Z2A77yM6aaW6aG15LiN6K6w5b2VXG4gIGlmIChcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gRU5WLlNTTy5yZWRpcmVjdF91cmwgJiZcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiAhPT0gYCR7RU5WLlNTTy5yZWRpcmVjdF91cmx9L2BcbiAgKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNvbW1pbmdVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgfVxuXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc3NvVXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBib290c3RyYXAoKTtcbiJdfQ==