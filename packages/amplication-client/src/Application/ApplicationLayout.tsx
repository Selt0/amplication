import React, { useState, useCallback, useEffect } from "react";
import { Switch, Route, match } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { SideNav } from "@primer/components";

import ApplicationHome from "./ApplicationHome";
import Entities from "../Entity/Entities";
import Pages from "../Pages/Pages";
import EntityPage from "../Pages/EntityPage";
import Entity from "../Entity/Entity";

import NewEntityPage from "../Pages/NewEntityPage";
import PendingChanges from "../VersionControl/PendingChanges";

import "./ApplicationLayout.scss";
import iconEntitySelected from "../assets/icons/entity-selected.svg";
import iconPagesSelected from "../assets/icons/pages-selected.svg";
import iconFlowSelected from "../assets/icons/flow-selected.svg";
import iconConnectorSelected from "../assets/icons/connector-selected.svg";
import iconApiSelected from "../assets/icons/api-selected.svg";
import iconSettingsSelected from "../assets/icons/settings-selected.svg";
import * as models from "../models";

import MenuItem from "../Layout/MenuItem";
import MainLayout from "../Layout/MainLayout";
import ApplicationBadge from "./ApplicationBadge";
import PendingChangesContext, {
  PendingChangeItem,
} from "../VersionControl/PendingChangesContext";

export type PendingChangeStatusData = {
  pendingChanges: PendingChangeItem[];
};

type Props = {
  match: match<{
    application: string;
    appModule: string;
    className?: string;
  }>;
};

function ApplicationLayout({ match }: Props) {
  const { application } = match.params;

  const [pendingChanges, setPendingChanges] = useState<PendingChangeItem[]>([]);

  const { data, refetch } = useQuery<PendingChangeStatusData>(
    GET_PENDING_CHANGES_STATUS,
    {
      variables: {
        applicationId: application,
      },
    }
  );

  useEffect(() => {
    if (data) {
      setPendingChanges(data.pendingChanges);
    } else {
      setPendingChanges([]);
    }
  }, [data, setPendingChanges]);

  const addChange = useCallback(
    (
      resourceId: string,
      resourceType: models.EnumPendingChangeResourceType
    ) => {
      const existingChange = pendingChanges.find(
        (changeItem) =>
          changeItem.resourceId === resourceId &&
          changeItem.resourceType === resourceType
      );
      if (existingChange) {
        return;
      }

      setPendingChanges(
        pendingChanges.concat([
          {
            resourceId,
            resourceType,
          },
        ])
      );
    },
    [pendingChanges, setPendingChanges]
  );

  const addEntity = useCallback(
    (entityId: string) => {
      addChange(entityId, models.EnumPendingChangeResourceType.Entity);
    },
    [addChange]
  );

  const addBlock = useCallback(
    (blockId: string) => {
      addChange(blockId, models.EnumPendingChangeResourceType.Block);
    },
    [addChange]
  );

  return (
    <PendingChangesContext.Provider
      value={{ pendingChanges, addEntity, addBlock, reset: refetch }}
    >
      <MainLayout>
        <MainLayout.Menu
          render={(expanded) => {
            return (
              <>
                <ApplicationBadge
                  expanded={expanded}
                  url={`/${application}/home`}
                  name="My Cool App"
                />
                <SideNav className="side-nav">
                  <MenuItem
                    title="Entities"
                    to={`/${application}/entities`}
                    icon={iconEntitySelected}
                  />
                  <MenuItem
                    title="Pages"
                    to={`/${application}/pages`}
                    icon={iconPagesSelected}
                  />
                  <MenuItem
                    title="Workflow"
                    to={`/${application}/workflow`}
                    icon={iconFlowSelected}
                  />
                  <MenuItem
                    title="Connectors"
                    to={`/${application}/connectors`}
                    icon={iconConnectorSelected}
                  />
                  <MenuItem
                    title="API"
                    to={`/${application}/api`}
                    icon={iconApiSelected}
                  />
                  <MenuItem
                    title="Settings"
                    to={`/${application}/settings`}
                    icon={iconSettingsSelected}
                  />
                </SideNav>
              </>
            );
          }}
        />
        <MainLayout.Content>
          <Switch>
            <Route exact path="/:application/" component={ApplicationHome} />
            <Route
              exact
              path="/:application/pending-changes"
              component={PendingChanges}
            />

            <Route exact path="/:application/entities/" component={Entities} />
            <Route path="/:application/entities/:entityId" component={Entity} />

            <Route path="/:application/pages/" component={Pages} />
            <Route
              path="/:application/entity-page/new"
              component={NewEntityPage}
            />
            <Route
              path="/:application/entity-page/:entityPageId"
              component={EntityPage}
            />
          </Switch>
        </MainLayout.Content>
      </MainLayout>
    </PendingChangesContext.Provider>
  );
}

export default ApplicationLayout;

export const GET_PENDING_CHANGES_STATUS = gql`
  query pendingChangesStatus($applicationId: String!) {
    pendingChanges(where: { app: { id: $applicationId } }) {
      resourceId
      resourceType
    }
  }
`;
