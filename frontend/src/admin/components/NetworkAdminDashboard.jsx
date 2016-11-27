import React from 'react';

import AdminHeader from './AdminHeader';
import UserMessageView from './UserMessageView';
import BranchDetails from '../branchView/';
import OrganisersViewContainer from './adminsView/OrganisersViewContainer';
import NetworkAdminsViewContainer from './adminsView/NetworkAdminsViewContainer';
import GroupsView from '../groupView';
import MembersViewContainer from '../memberView/MembersViewContainer';

const BranchManagement = () => (
  <section>
    <BranchDetails />
    <OrganisersViewContainer />
    <section>
      <GroupsView />
      <MembersViewContainer />
    </section>
  </section>
);

const NetworkManagement = () => (
  <section>
    <NetworkAdminsViewContainer />
  </section>
);

const NetworkAdminDashboard = () => (
  <div className="admin-container">
    <AdminHeader />
    <UserMessageView />
    <BranchManagement />
    <NetworkManagement />
  </div>
);

export default NetworkAdminDashboard;
