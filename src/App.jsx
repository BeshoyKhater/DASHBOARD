import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Bar from "./scences/bar/Bar";
import Calendar from "./scences/calendar/Calendar";
import Contacts from "./scences/contacts/Contacts";
import Dashboard from "./scences/dashboard";
import FAQs from "./scences/faq/FAQs";
import FormUser from "./scences/form/Form";
import Geography from "./scences/geography/Geography";
import SideBar from "./scences/global/Sidebar";
import Topbar from "./scences/global/Topbar";
import Invoices from "./scences/invoices/Invoices";
import Line from "./scences/line/Line";
import Pie from "./scences/pie/Pie";
import Team from "./scences/team/Team";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/formUser" element={<FormUser />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQs />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
