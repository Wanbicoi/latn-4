import { Refine } from "@refinedev/core";
import {
  useNotificationProvider,
  ErrorComponent,
  RefineThemes,
  ThemedLayoutV2,
} from "@refinedev/antd";
import { dataProvider } from "@refinedev/supabase";
import routerProvider, {
  NavigateToResource,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "./pages/posts";

import { ConfigProvider, App as AntdApp } from "antd";
import { ColorModeContextProvider } from "./contexts";
import { supabaseClient } from "./utils";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <ColorModeContextProvider>
          <AntdApp>
            <Refine
              dataProvider={dataProvider(supabaseClient)}
              routerProvider={routerProvider}
              resources={[
                {
                  name: "posts",
                  list: "/posts",
                  create: "/posts/create",
                  edit: "/posts/edit/:id",
                  show: "/posts/show/:id",
                },
              ]}
              notificationProvider={useNotificationProvider}
              options={{
                warnWhenUnsavedChanges: true,
                syncWithLocation: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <ThemedLayoutV2>
                      <Outlet />
                    </ThemedLayoutV2>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="posts" />}
                  />

                  <Route path="posts">
                    <Route index element={<PostList />} />
                    <Route path="create" element={<PostCreate />} />
                    <Route path="edit/:id" element={<PostEdit />} />
                    <Route path="show/:id" element={<PostShow />} />
                  </Route>

                  <Route path="*" element={<ErrorComponent />} />
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </AntdApp>
        </ColorModeContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
