<div align="left">

[![Visit Box](./header.png)](https://box.com)

# [Box](https://box.com)<a id="box"></a>

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

  * [Installation](#installation)
  * [Getting Started](#getting-started)
  * [Reference](#reference)
    + [`box.authorization.authorize`](#boxauthorizationauthorize)
    + [`box.authorization.refreshAccessToken`](#boxauthorizationrefreshaccesstoken)
    + [`box.authorization.requestAccessToken`](#boxauthorizationrequestaccesstoken)
    + [`box.authorization.revokeAccessToken`](#boxauthorizationrevokeaccesstoken)
    + [`box.classifications.addNewClassifications`](#boxclassificationsaddnewclassifications)
    + [`box.classifications.initializeTemplate`](#boxclassificationsinitializetemplate)
    + [`box.classifications.listAllClassifications`](#boxclassificationslistallclassifications)
    + [`box.classifications.updateLabelsDescriptions`](#boxclassificationsupdatelabelsdescriptions)
    + [`box.classificationsOnFiles.addClassification`](#boxclassificationsonfilesaddclassification)
    + [`box.classificationsOnFiles.getClassificationMetadataInstance`](#boxclassificationsonfilesgetclassificationmetadatainstance)
    + [`box.classificationsOnFiles.removeClassification`](#boxclassificationsonfilesremoveclassification)
    + [`box.classificationsOnFiles.updateClassificationMetadataInstance`](#boxclassificationsonfilesupdateclassificationmetadatainstance)
    + [`box.classificationsOnFolders.addClassificationToFolder`](#boxclassificationsonfoldersaddclassificationtofolder)
    + [`box.classificationsOnFolders.getClassificationMetadata`](#boxclassificationsonfoldersgetclassificationmetadata)
    + [`box.classificationsOnFolders.removeFromFolder`](#boxclassificationsonfoldersremovefromfolder)
    + [`box.classificationsOnFolders.updateClassification`](#boxclassificationsonfoldersupdateclassification)
    + [`box.collaborations.collaborations`](#boxcollaborationscollaborations)
    + [`box.collaborations.getSingleCollaboration`](#boxcollaborationsgetsinglecollaboration)
    + [`box.collaborations.removeSingleCollaboration`](#boxcollaborationsremovesinglecollaboration)
    + [`box.collaborations.updateCollaboration`](#boxcollaborationsupdatecollaboration)
    + [`box.collaborationsList.collaborations`](#boxcollaborationslistcollaborations)
    + [`box.collaborationsList.fileAccessList`](#boxcollaborationslistfileaccesslist)
    + [`box.collaborationsList.folderAccess`](#boxcollaborationslistfolderaccess)
    + [`box.collaborationsList.groupAccessDetails`](#boxcollaborationslistgroupaccessdetails)
    + [`box.collections.collections`](#boxcollectionscollections)
    + [`box.collections.listItems`](#boxcollectionslistitems)
    + [`box.comments.comments`](#boxcommentscomments)
    + [`box.comments.getById`](#boxcommentsgetbyid)
    + [`box.comments.listFileComments`](#boxcommentslistfilecomments)
    + [`box.comments.removeById`](#boxcommentsremovebyid)
    + [`box.comments.updateMessage`](#boxcommentsupdatemessage)
    + [`box.devicePinners.getPinnerInfo`](#boxdevicepinnersgetpinnerinfo)
    + [`box.devicePinners.listPinnerInfo`](#boxdevicepinnerslistpinnerinfo)
    + [`box.devicePinners.removeDevicePin`](#boxdevicepinnersremovedevicepin)
    + [`box.domainRestrictionsUserExemptions.createUserExemptionFromCollaborationDomainRestrictions`](#boxdomainrestrictionsuserexemptionscreateuserexemptionfromcollaborationdomainrestrictions)
    + [`box.domainRestrictionsUserExemptions.getUserExemption`](#boxdomainrestrictionsuserexemptionsgetuserexemption)
    + [`box.domainRestrictionsUserExemptions.listExemptUsers`](#boxdomainrestrictionsuserexemptionslistexemptusers)
    + [`box.domainRestrictionsUserExemptions.removeExemption`](#boxdomainrestrictionsuserexemptionsremoveexemption)
    + [`box.domainRestrictionsForCollaborations.addAllowedDomainEntry`](#boxdomainrestrictionsforcollaborationsaddalloweddomainentry)
    + [`box.domainRestrictionsForCollaborations.allowedCollaborationDomain`](#boxdomainrestrictionsforcollaborationsallowedcollaborationdomain)
    + [`box.domainRestrictionsForCollaborations.listAllowedCollaborationDomains`](#boxdomainrestrictionsforcollaborationslistallowedcollaborationdomains)
    + [`box.domainRestrictionsForCollaborations.removeAllowedDomainEntry`](#boxdomainrestrictionsforcollaborationsremovealloweddomainentry)
    + [`box.downloads.fileContentGet`](#boxdownloadsfilecontentget)
    + [`box.emailAliases.createNewAlias`](#boxemailaliasescreatenewalias)
    + [`box.emailAliases.listUserEmailAliases`](#boxemailaliaseslistuseremailaliases)
    + [`box.emailAliases.removeAlias`](#boxemailaliasesremovealias)
    + [`box.events.events`](#boxeventsevents)
    + [`box.events.events_0`](#boxeventsevents_0)
    + [`box.fileActivities.listByFileId`](#boxfileactivitieslistbyfileid)
    + [`box.fileRequests.copyRequestToFolder`](#boxfilerequestscopyrequesttofolder)
    + [`box.fileRequests.deletePermanently`](#boxfilerequestsdeletepermanently)
    + [`box.fileRequests.getInformation`](#boxfilerequestsgetinformation)
    + [`box.fileRequests.updateRequest`](#boxfilerequestsupdaterequest)
    + [`box.fileVersionLegalHolds.getFileVersionLegalHoldInfo`](#boxfileversionlegalholdsgetfileversionlegalholdinfo)
    + [`box.fileVersionLegalHolds.listFileVersionLegalHolds`](#boxfileversionlegalholdslistfileversionlegalholds)
    + [`box.fileVersionRetentions.getFileVersionRetentionInfo`](#boxfileversionretentionsgetfileversionretentioninfo)
    + [`box.fileVersionRetentions.listRetentions`](#boxfileversionretentionslistretentions)
    + [`box.fileVersions.getSpecificVersion`](#boxfileversionsgetspecificversion)
    + [`box.fileVersions.listAllVersions`](#boxfileversionslistallversions)
    + [`box.fileVersions.moveToTrash`](#boxfileversionsmovetotrash)
    + [`box.fileVersions.promoteFileVersion`](#boxfileversionspromotefileversion)
    + [`box.fileVersions.restoreVersion`](#boxfileversionsrestoreversion)
    + [`box.files.createCopy`](#boxfilescreatecopy)
    + [`box.files.deleteFile`](#boxfilesdeletefile)
    + [`box.files.getDetails`](#boxfilesgetdetails)
    + [`box.files.getThumbnail`](#boxfilesgetthumbnail)
    + [`box.files.preflightCheckBeforeUpload`](#boxfilespreflightcheckbeforeupload)
    + [`box.files.updateFile`](#boxfilesupdatefile)
    + [`box.folderLocks.create`](#boxfolderlockscreate)
    + [`box.folderLocks.deleteFolderLock`](#boxfolderlocksdeletefolderlock)
    + [`box.folderLocks.listDetails`](#boxfolderlockslistdetails)
    + [`box.folders.createCopy`](#boxfolderscreatecopy)
    + [`box.folders.deleteById`](#boxfoldersdeletebyid)
    + [`box.folders.folders`](#boxfoldersfolders)
    + [`box.folders.getFolderDetails`](#boxfoldersgetfolderdetails)
    + [`box.folders.listItemsInFolder`](#boxfolderslistitemsinfolder)
    + [`box.folders.updateFolder`](#boxfoldersupdatefolder)
    + [`box.groupMemberships.createMembership`](#boxgroupmembershipscreatemembership)
    + [`box.groupMemberships.getAll`](#boxgroupmembershipsgetall)
    + [`box.groupMemberships.getSpecificMembership`](#boxgroupmembershipsgetspecificmembership)
    + [`box.groupMemberships.listMembersOfGroup`](#boxgroupmembershipslistmembersofgroup)
    + [`box.groupMemberships.removeUserFromGroup`](#boxgroupmembershipsremoveuserfromgroup)
    + [`box.groupMemberships.updateMembership`](#boxgroupmembershipsupdatemembership)
    + [`box.groups.getInfo`](#boxgroupsgetinfo)
    + [`box.groups.groups`](#boxgroupsgroups)
    + [`box.groups.groups_0`](#boxgroupsgroups_0)
    + [`box.groups.remove`](#boxgroupsremove)
    + [`box.groups.updateGroup`](#boxgroupsupdategroup)
    + [`box.integrationMappings.createSlackMapping`](#boxintegrationmappingscreateslackmapping)
    + [`box.integrationMappings.deleteSlackMapping`](#boxintegrationmappingsdeleteslackmapping)
    + [`box.integrationMappings.listSlackMappings`](#boxintegrationmappingslistslackmappings)
    + [`box.integrationMappings.updateSlackMapping`](#boxintegrationmappingsupdateslackmapping)
    + [`box.invites.getUserInviteStatus`](#boxinvitesgetuserinvitestatus)
    + [`box.invites.invites`](#boxinvitesinvites)
    + [`box.legalHoldPolicies.createNewPolicy`](#boxlegalholdpoliciescreatenewpolicy)
    + [`box.legalHoldPolicies.getPolicy`](#boxlegalholdpoliciesgetpolicy)
    + [`box.legalHoldPolicies.listAll`](#boxlegalholdpolicieslistall)
    + [`box.legalHoldPolicies.removePolicy`](#boxlegalholdpoliciesremovepolicy)
    + [`box.legalHoldPolicies.updatePolicy`](#boxlegalholdpoliciesupdatepolicy)
    + [`box.legalHoldPolicyAssignments.assignFileLegalHold`](#boxlegalholdpolicyassignmentsassignfilelegalhold)
    + [`box.legalHoldPolicyAssignments.getAssignment`](#boxlegalholdpolicyassignmentsgetassignment)
    + [`box.legalHoldPolicyAssignments.getListItems`](#boxlegalholdpolicyassignmentsgetlistitems)
    + [`box.legalHoldPolicyAssignments.listFileVersions`](#boxlegalholdpolicyassignmentslistfileversions)
    + [`box.legalHoldPolicyAssignments.listPreviousFileVersions`](#boxlegalholdpolicyassignmentslistpreviousfileversions)
    + [`box.legalHoldPolicyAssignments.unassignPolicy`](#boxlegalholdpolicyassignmentsunassignpolicy)
    + [`box.metadataCascadePolicies.applyToChildren`](#boxmetadatacascadepoliciesapplytochildren)
    + [`box.metadataCascadePolicies.createPolicy`](#boxmetadatacascadepoliciescreatepolicy)
    + [`box.metadataCascadePolicies.getPolicyAssignedToFolder`](#boxmetadatacascadepoliciesgetpolicyassignedtofolder)
    + [`box.metadataCascadePolicies.list`](#boxmetadatacascadepolicieslist)
    + [`box.metadataCascadePolicies.removePolicy`](#boxmetadatacascadepoliciesremovepolicy)
    + [`box.metadataInstancesFiles.applyTemplate`](#boxmetadatainstancesfilesapplytemplate)
    + [`box.metadataInstancesFiles.getInstance`](#boxmetadatainstancesfilesgetinstance)
    + [`box.metadataInstancesFiles.listFileMetadata`](#boxmetadatainstancesfileslistfilemetadata)
    + [`box.metadataInstancesFiles.removeInstance`](#boxmetadatainstancesfilesremoveinstance)
    + [`box.metadataInstancesFiles.updateInstanceOnFile`](#boxmetadatainstancesfilesupdateinstanceonfile)
    + [`box.metadataInstancesFolders.applyTemplate`](#boxmetadatainstancesfoldersapplytemplate)
    + [`box.metadataInstancesFolders.getFolderMetadataInstance`](#boxmetadatainstancesfoldersgetfoldermetadatainstance)
    + [`box.metadataInstancesFolders.listOnFolder`](#boxmetadatainstancesfolderslistonfolder)
    + [`box.metadataInstancesFolders.removeInstance`](#boxmetadatainstancesfoldersremoveinstance)
    + [`box.metadataInstancesFolders.updateInstanceOnFolder`](#boxmetadatainstancesfoldersupdateinstanceonfolder)
    + [`box.metadataTemplates.createNewTemplate`](#boxmetadatatemplatescreatenewtemplate)
    + [`box.metadataTemplates.deleteSchema`](#boxmetadatatemplatesdeleteschema)
    + [`box.metadataTemplates.findByInstanceId`](#boxmetadatatemplatesfindbyinstanceid)
    + [`box.metadataTemplates.getById`](#boxmetadatatemplatesgetbyid)
    + [`box.metadataTemplates.getByNameSchema`](#boxmetadatatemplatesgetbynameschema)
    + [`box.metadataTemplates.listForEnterprise`](#boxmetadatatemplateslistforenterprise)
    + [`box.metadataTemplates.listGlobal`](#boxmetadatatemplateslistglobal)
    + [`box.metadataTemplates.updateSchema`](#boxmetadatatemplatesupdateschema)
    + [`box.recentItems.listAccessedItems`](#boxrecentitemslistaccesseditems)
    + [`box.retentionPolicies.createPolicy`](#boxretentionpoliciescreatepolicy)
    + [`box.retentionPolicies.deletePolicy`](#boxretentionpoliciesdeletepolicy)
    + [`box.retentionPolicies.getPolicy`](#boxretentionpoliciesgetpolicy)
    + [`box.retentionPolicies.listAll`](#boxretentionpolicieslistall)
    + [`box.retentionPolicies.updatePolicy`](#boxretentionpoliciesupdatepolicy)
    + [`box.retentionPolicyAssignments.createRetentionAssignment`](#boxretentionpolicyassignmentscreateretentionassignment)
    + [`box.retentionPolicyAssignments.getAssignment`](#boxretentionpolicyassignmentsgetassignment)
    + [`box.retentionPolicyAssignments.listAllAssignments`](#boxretentionpolicyassignmentslistallassignments)
    + [`box.retentionPolicyAssignments.listFileVersionsUnderRetention`](#boxretentionpolicyassignmentslistfileversionsunderretention)
    + [`box.retentionPolicyAssignments.listFilesUnderRetention`](#boxretentionpolicyassignmentslistfilesunderretention)
    + [`box.retentionPolicyAssignments.removeAssignment`](#boxretentionpolicyassignmentsremoveassignment)
    + [`box.search.itemsByMetadata`](#boxsearchitemsbymetadata)
    + [`box.search.search`](#boxsearchsearch)
    + [`box.sessionTermination.createSessionTerminationJobs`](#boxsessionterminationcreatesessionterminationjobs)
    + [`box.sessionTermination.createTerminationJobs`](#boxsessionterminationcreateterminationjobs)
    + [`box.sharedLinksFiles.addSharedLinkToFile`](#boxsharedlinksfilesaddsharedlinktofile)
    + [`box.sharedLinksFiles.getBySharedLink`](#boxsharedlinksfilesgetbysharedlink)
    + [`box.sharedLinksFiles.getSharedLinkInfo`](#boxsharedlinksfilesgetsharedlinkinfo)
    + [`box.sharedLinksFiles.removeSharedLink`](#boxsharedlinksfilesremovesharedlink)
    + [`box.sharedLinksFiles.updateLinkOnFile`](#boxsharedlinksfilesupdatelinkonfile)
    + [`box.sharedLinksFolders.addLinkToFolder`](#boxsharedlinksfoldersaddlinktofolder)
    + [`box.sharedLinksFolders.findFolderBySharedLink`](#boxsharedlinksfoldersfindfolderbysharedlink)
    + [`box.sharedLinksFolders.getSharedLinkForFolder`](#boxsharedlinksfoldersgetsharedlinkforfolder)
    + [`box.sharedLinksFolders.removeFromFolder`](#boxsharedlinksfoldersremovefromfolder)
    + [`box.sharedLinksFolders.updateFolderSharedLink`](#boxsharedlinksfoldersupdatefoldersharedlink)
    + [`box.sharedLinksWebLinks.addLinkToWebLink`](#boxsharedlinksweblinksaddlinktoweblink)
    + [`box.sharedLinksWebLinks.findSharedWebLink`](#boxsharedlinksweblinksfindsharedweblink)
    + [`box.sharedLinksWebLinks.getLinkInfo`](#boxsharedlinksweblinksgetlinkinfo)
    + [`box.sharedLinksWebLinks.removeSharedLink`](#boxsharedlinksweblinksremovesharedlink)
    + [`box.sharedLinksWebLinks.updateSharedLink`](#boxsharedlinksweblinksupdatesharedlink)
    + [`box.shieldInformationBarrierReports.createReport`](#boxshieldinformationbarrierreportscreatereport)
    + [`box.shieldInformationBarrierReports.getById`](#boxshieldinformationbarrierreportsgetbyid)
    + [`box.shieldInformationBarrierReports.listReports`](#boxshieldinformationbarrierreportslistreports)
    + [`box.shieldInformationBarrierSegmentMembers.createNewMember`](#boxshieldinformationbarriersegmentmemberscreatenewmember)
    + [`box.shieldInformationBarrierSegmentMembers.getById`](#boxshieldinformationbarriersegmentmembersgetbyid)
    + [`box.shieldInformationBarrierSegmentMembers.listSegmentMembersBasedOnIds`](#boxshieldinformationbarriersegmentmemberslistsegmentmembersbasedonids)
    + [`box.shieldInformationBarrierSegmentMembers.removeById`](#boxshieldinformationbarriersegmentmembersremovebyid)
    + [`box.shieldInformationBarrierSegmentRestrictions.createBarrierObject`](#boxshieldinformationbarriersegmentrestrictionscreatebarrierobject)
    + [`box.shieldInformationBarrierSegmentRestrictions.getById`](#boxshieldinformationbarriersegmentrestrictionsgetbyid)
    + [`box.shieldInformationBarrierSegmentRestrictions.listBasedOnSegmentId`](#boxshieldinformationbarriersegmentrestrictionslistbasedonsegmentid)
    + [`box.shieldInformationBarrierSegmentRestrictions.removeById`](#boxshieldinformationbarriersegmentrestrictionsremovebyid)
    + [`box.shieldInformationBarrierSegments.createSegment`](#boxshieldinformationbarriersegmentscreatesegment)
    + [`box.shieldInformationBarrierSegments.deleteSegmentById`](#boxshieldinformationbarriersegmentsdeletesegmentbyid)
    + [`box.shieldInformationBarrierSegments.getById`](#boxshieldinformationbarriersegmentsgetbyid)
    + [`box.shieldInformationBarrierSegments.listInformationObjects`](#boxshieldinformationbarriersegmentslistinformationobjects)
    + [`box.shieldInformationBarrierSegments.updateById`](#boxshieldinformationbarriersegmentsupdatebyid)
    + [`box.shieldInformationBarriers.addChangedStatus`](#boxshieldinformationbarriersaddchangedstatus)
    + [`box.shieldInformationBarriers.createBarrier`](#boxshieldinformationbarrierscreatebarrier)
    + [`box.shieldInformationBarriers.getById`](#boxshieldinformationbarriersgetbyid)
    + [`box.shieldInformationBarriers.listInformationObjects`](#boxshieldinformationbarrierslistinformationobjects)
    + [`box.signRequests.cancelRequest`](#boxsignrequestscancelrequest)
    + [`box.signRequests.createRequest`](#boxsignrequestscreaterequest)
    + [`box.signRequests.getById`](#boxsignrequestsgetbyid)
    + [`box.signRequests.list`](#boxsignrequestslist)
    + [`box.signRequests.resendSignRequestEmails`](#boxsignrequestsresendsignrequestemails)
    + [`box.signTemplates.getDetails`](#boxsigntemplatesgetdetails)
    + [`box.signTemplates.listTemplates`](#boxsigntemplateslisttemplates)
    + [`box.skills.applyBoxSkillCards`](#boxskillsapplyboxskillcards)
    + [`box.skills.listBoxSkillCards`](#boxskillslistboxskillcards)
    + [`box.skills.removeBoxSkillCards`](#boxskillsremoveboxskillcards)
    + [`box.skills.updateAllBoxSkillCards`](#boxskillsupdateallboxskillcards)
    + [`box.skills.updateBoxSkillCardsOnFile`](#boxskillsupdateboxskillcardsonfile)
    + [`box.standardAndZonesStoragePolicies.getSpecific`](#boxstandardandzonesstoragepoliciesgetspecific)
    + [`box.standardAndZonesStoragePolicies.listPolicies`](#boxstandardandzonesstoragepolicieslistpolicies)
    + [`box.standardAndZonesStoragePolicyAssignments.createAssignment`](#boxstandardandzonesstoragepolicyassignmentscreateassignment)
    + [`box.standardAndZonesStoragePolicyAssignments.getSpecificAssignment`](#boxstandardandzonesstoragepolicyassignmentsgetspecificassignment)
    + [`box.standardAndZonesStoragePolicyAssignments.listAssignments`](#boxstandardandzonesstoragepolicyassignmentslistassignments)
    + [`box.standardAndZonesStoragePolicyAssignments.unassignStoragePolicy`](#boxstandardandzonesstoragepolicyassignmentsunassignstoragepolicy)
    + [`box.standardAndZonesStoragePolicyAssignments.updateSpecificAssignment`](#boxstandardandzonesstoragepolicyassignmentsupdatespecificassignment)
    + [`box.taskAssignments.assignMultipleUsers`](#boxtaskassignmentsassignmultipleusers)
    + [`box.taskAssignments.deleteSpecificAssignment`](#boxtaskassignmentsdeletespecificassignment)
    + [`box.taskAssignments.getTaskAssignmentInfo`](#boxtaskassignmentsgettaskassignmentinfo)
    + [`box.taskAssignments.listForTask`](#boxtaskassignmentslistfortask)
    + [`box.taskAssignments.updateStateAssignedToUser`](#boxtaskassignmentsupdatestateassignedtouser)
    + [`box.tasks.getInfo`](#boxtasksgetinfo)
    + [`box.tasks.listOnFile`](#boxtaskslistonfile)
    + [`box.tasks.removeFile`](#boxtasksremovefile)
    + [`box.tasks.tasks`](#boxtaskstasks)
    + [`box.tasks.updateTaskConfiguration`](#boxtasksupdatetaskconfiguration)
    + [`box.termsOfService.createForEnterpriseAndType`](#boxtermsofservicecreateforenterpriseandtype)
    + [`box.termsOfService.getSettings`](#boxtermsofservicegetsettings)
    + [`box.termsOfService.getSpecific`](#boxtermsofservicegetspecific)
    + [`box.termsOfService.updateSpecificTerm`](#boxtermsofserviceupdatespecificterm)
    + [`box.termsOfServiceUserStatuses.createUserStatus`](#boxtermsofserviceuserstatusescreateuserstatus)
    + [`box.termsOfServiceUserStatuses.listUserStatuses`](#boxtermsofserviceuserstatuseslistuserstatuses)
    + [`box.termsOfServiceUserStatuses.updateUserStatus`](#boxtermsofserviceuserstatusesupdateuserstatus)
    + [`box.transferFolders.toDestination`](#boxtransferfolderstodestination)
    + [`box.trashedFiles.getFile`](#boxtrashedfilesgetfile)
    + [`box.trashedFiles.permanentlyRemoveFile`](#boxtrashedfilespermanentlyremovefile)
    + [`box.trashedFiles.restoreFile`](#boxtrashedfilesrestorefile)
    + [`box.trashedFolders.getdFolder`](#boxtrashedfoldersgetdfolder)
    + [`box.trashedFolders.permanentlyRemoveFolder`](#boxtrashedfolderspermanentlyremovefolder)
    + [`box.trashedFolders.restoreFolder`](#boxtrashedfoldersrestorefolder)
- [Folder locking](#folder-locking)
    + [`box.trashedItems.listRetrievedItems`](#boxtrasheditemslistretrieveditems)
    + [`box.trashedWebLinks.getTrashedLink`](#boxtrashedweblinksgettrashedlink)
    + [`box.trashedWebLinks.permanentlyRemove`](#boxtrashedweblinkspermanentlyremove)
    + [`box.trashedWebLinks.restoreWebLink`](#boxtrashedweblinksrestoreweblink)
    + [`box.uploads.fileContentUpdate`](#boxuploadsfilecontentupdate)
- [Request body order](#request-body-order)
    + [`box.uploads.smallFile`](#boxuploadssmallfile)
- [Request body order](#request-body-order-1)
    + [`box.uploadsChunked.commitSession`](#boxuploadschunkedcommitsession)
    + [`box.uploadsChunked.createSessionForUpload`](#boxuploadschunkedcreatesessionforupload)
    + [`box.uploadsChunked.createSessionForUpload_0`](#boxuploadschunkedcreatesessionforupload_0)
    + [`box.uploadsChunked.filePartUpdate`](#boxuploadschunkedfilepartupdate)
    + [`box.uploadsChunked.info`](#boxuploadschunkedinfo)
    + [`box.uploadsChunked.listParts`](#boxuploadschunkedlistparts)
    + [`box.uploadsChunked.removeUploadSession`](#boxuploadschunkedremoveuploadsession)
    + [`box.userAvatars.addOrUpdateImage`](#boxuseravatarsaddorupdateimage)
    + [`box.userAvatars.getImage`](#boxuseravatarsgetimage)
    + [`box.userAvatars.removeExisting`](#boxuseravatarsremoveexisting)
    + [`box.users.deleteUser`](#boxusersdeleteuser)
    + [`box.users.getCurrentUser`](#boxusersgetcurrentuser)
    + [`box.users.getUserInfo`](#boxusersgetuserinfo)
    + [`box.users.updateManagedUser`](#boxusersupdatemanageduser)
    + [`box.users.users`](#boxusersusers)
    + [`box.users.users_0`](#boxusersusers_0)
    + [`box.watermarksFiles.applyWatermarkToFile`](#boxwatermarksfilesapplywatermarktofile)
    + [`box.watermarksFiles.get`](#boxwatermarksfilesget)
    + [`box.watermarksFiles.removeWatermark`](#boxwatermarksfilesremovewatermark)
    + [`box.watermarksFolders.applyToFolder`](#boxwatermarksfoldersapplytofolder)
    + [`box.watermarksFolders.getFolderWatermark`](#boxwatermarksfoldersgetfolderwatermark)
    + [`box.watermarksFolders.removeFolderWatermark`](#boxwatermarksfoldersremovefolderwatermark)
    + [`box.webLinks.createObject`](#boxweblinkscreateobject)
    + [`box.webLinks.getInformation`](#boxweblinksgetinformation)
    + [`box.webLinks.removeLink`](#boxweblinksremovelink)
    + [`box.webLinks.updateObject`](#boxweblinksupdateobject)
    + [`box.webhooks.getSpecificWebhook`](#boxwebhooksgetspecificwebhook)
    + [`box.webhooks.remove`](#boxwebhooksremove)
    + [`box.webhooks.updateWebhook`](#boxwebhooksupdatewebhook)
    + [`box.webhooks.webhooks`](#boxwebhookswebhooks)
    + [`box.webhooks.webhooks_0`](#boxwebhookswebhooks_0)
    + [`box.workflows.startBasedOnRequest`](#boxworkflowsstartbasedonrequest)
    + [`box.workflows.workflows`](#boxworkflowsworkflows)
    + [`box.zipDownloads.createRequest`](#boxzipdownloadscreaterequest)
    + [`box.zipDownloads.getContentById`](#boxzipdownloadsgetcontentbyid)
    + [`box.zipDownloads.getStatus`](#boxzipdownloadsgetstatus)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Box&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Box } from "box-typescript-sdk";

const box = new Box({
  // Defining the base path is optional and defaults to https://api.box.com/2.0
  // basePath: "https://api.box.com/2.0",
});

const authorizeResponse = await box.authorization.authorize({
  responseType: "code",
  clientId: "clientId_example",
});

console.log(authorizeResponse);
```

## Reference<a id="reference"></a>


### `box.authorization.authorize`<a id="boxauthorizationauthorize"></a>

Authorize a user by sending them through the [Box](https://box.com)
website and request their permission to act on their behalf.

This is the first step when authenticating a user using
OAuth 2.0. To request a user's authorization to use the Box APIs
on their behalf you will need to send a user to the URL with this
format.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizeResponse = await box.authorization.authorize({
  responseType: "code",
  clientId: "clientId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### responseType: `'code'`<a id="responsetype-code"></a>

The type of response we\'d like to receive.

##### clientId: `string`<a id="clientid-string"></a>

The Client ID of the application that is requesting to authenticate the user. To get the Client ID for your application, log in to your Box developer console and click the **Edit Application** link for the application you\'re working with. In the OAuth 2.0 Parameters section of the configuration page, find the item labelled `client_id`. The text of that item is your application\'s Client ID.

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URI to which Box redirects the browser after the user has granted or denied the application permission. This URI match one of the redirect URIs in the configuration of your application. It must be a valid HTTPS URI and it needs to be able to handle the redirection to complete the next step in the OAuth 2.0 flow. Although this parameter is optional, it must be a part of the authorization URL if you configured multiple redirect URIs for the application in the developer console. A missing parameter causes a `redirect_uri_missing` error after the user grants application access.

##### state: `string`<a id="state-string"></a>

A custom string of your choice. Box will pass the same string to the redirect URL when authentication is complete. This parameter can be used to identify a user on redirect, as well as protect against hijacked sessions and other exploits.

##### scope: `string`<a id="scope-string"></a>

A space-separated list of application scopes you\'d like to authenticate the user for. This defaults to all the scopes configured for the application in its configuration page.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorize` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.authorization.refreshAccessToken`<a id="boxauthorizationrefreshaccesstoken"></a>

Refresh an Access Token using its client ID, secret, and refresh token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshAccessTokenResponse = await box.authorization.refreshAccessToken({
  grant_type: "refresh_token",
  client_id: "ly1nj6n11vionaie65emwzk575hnnmrk",
  client_secret: "hOzsTeFlT6ko0dme22uGbQal04SBPYc1",
  refresh_token:
    "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grantType: `string`<a id="granttype-string"></a>

The type of request being made, in this case a refresh request.

##### clientId: `string`<a id="clientid-string"></a>

The client ID of the application requesting to refresh the token.

##### clientSecret: `string`<a id="clientsecret-string"></a>

The client secret of the application requesting to refresh the token.

##### refreshToken: `string`<a id="refreshtoken-string"></a>

The refresh token to refresh.

#### 🔄 Return<a id="🔄-return"></a>

[AccessToken](./models/access-token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth2/token#refresh` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.authorization.requestAccessToken`<a id="boxauthorizationrequestaccesstoken"></a>

Request an Access Token using either a client-side obtained OAuth 2.0
authorization code or a server-side JWT assertion.

An Access Token is a string that enables Box to verify that a
request belongs to an authorized session. In the normal order of
operations you will begin by requesting authentication from the
[authorize](https://raw.githubusercontent.com) endpoint and Box will send you an
authorization code.

You will then send this code to this endpoint to exchange it for
an Access Token. The returned Access Token can then be used to to make
Box API calls.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestAccessTokenResponse = await box.authorization.requestAccessToken({
  grant_type: "authorization_code",
  client_id: "ly1nj6n11vionaie65emwzk575hnnmrk",
  client_secret: "hOzsTeFlT6ko0dme22uGbQal04SBPYc1",
  code: "n22JPxrh18m4Y0wIZPIqYZK7VRrsMTWW",
  refresh_token:
    "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  assertion: "xxxxx.yyyyy.zzzzz",
  subject_token:
    "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  subject_token_type: "urn:ietf:params:oauth:token-type:access_token",
  actor_token:
    "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
  actor_token_type: "urn:ietf:params:oauth:token-type:id_token",
  scope: "item_upload item_preview base_explorer",
  resource: "https://api.box.com/2.0/files/123456",
  box_subject_type: "enterprise",
  box_subject_id: "123456789",
  box_shared_link: "https://cloud.box.com/s/123456",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grantType: `string`<a id="granttype-string"></a>

The type of request being made, either using a client-side obtained authorization code, a refresh token, a JWT assertion, client credentials grant or another access token for the purpose of downscoping a token.

##### clientId: `string`<a id="clientid-string"></a>

The Client ID of the application requesting an access token.  Used in combination with `authorization_code`, `client_credentials`, or `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.

##### clientSecret: `string`<a id="clientsecret-string"></a>

The client secret of the application requesting an access token.  Used in combination with `authorization_code`, `client_credentials`, or `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.

##### code: `string`<a id="code-string"></a>

The client-side authorization code passed to your application by Box in the browser redirect after the user has successfully granted your application permission to make API calls on their behalf.  Used in combination with `authorization_code` as the `grant_type`.

##### refreshToken: `string`<a id="refreshtoken-string"></a>

A refresh token used to get a new access token with.  Used in combination with `refresh_token` as the `grant_type`.

##### assertion: `string`<a id="assertion-string"></a>

A JWT assertion for which to request a new access token.  Used in combination with `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`.

##### subjectToken: `string`<a id="subjecttoken-string"></a>

The token to exchange for a downscoped token. This can be a regular access token, a JWT assertion, or an app token.  Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.

##### subjectTokenType: `string`<a id="subjecttokentype-string"></a>

The type of `subject_token` passed in.  Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.

##### actorToken: `string`<a id="actortoken-string"></a>

The token used to create an annotator token. This is a JWT assertion.  Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.

##### actorTokenType: `string`<a id="actortokentype-string"></a>

The type of `actor_token` passed in.  Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange` as the `grant_type`.

##### scope: `string`<a id="scope-string"></a>

The space-delimited list of scopes that you want apply to the new access token.  The `subject_token` will need to have all of these scopes or the call will error with **401 Unauthorized**.

##### resource: `string`<a id="resource-string"></a>

Full URL for the file that the token should be generated for.

##### boxSubjectType: `string`<a id="boxsubjecttype-string"></a>

Used in combination with `client_credentials` as the `grant_type`.

##### boxSubjectId: `string`<a id="boxsubjectid-string"></a>

Used in combination with `client_credentials` as the `grant_type`. Value is determined by `box_subject_type`. If `user` use user ID and if `enterprise` use enterprise ID.

##### boxSharedLink: `string`<a id="boxsharedlink-string"></a>

Full URL of the shared link on the file or folder that the token should be generated for.

#### 🔄 Return<a id="🔄-return"></a>

[AccessToken](./models/access-token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.authorization.revokeAccessToken`<a id="boxauthorizationrevokeaccesstoken"></a>

Revoke an active Access Token, effectively logging a user out
that has been previously authenticated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeAccessTokenResponse = await box.authorization.revokeAccessToken({
  client_id: "ly1nj6n11vionaie65emwzk575hnnmrk",
  client_secret: "hOzsTeFlT6ko0dme22uGbQal04SBPYc1",
  token: "n22JPxrh18m4Y0wIZPIqYZK7VRrsMTWW",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### clientId: `string`<a id="clientid-string"></a>

The Client ID of the application requesting to revoke the access token.

##### clientSecret: `string`<a id="clientsecret-string"></a>

The client secret of the application requesting to revoke an access token.

##### token: `string`<a id="token-string"></a>

The access token to revoke.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/oauth2/revoke` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classifications.addNewClassifications`<a id="boxclassificationsaddnewclassifications"></a>

Adds one or more new classifications to the list of classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addNewClassificationsResponse =
  await box.classifications.addNewClassifications([
    {
      op: "addEnumOption",
      fieldKey: "Box__Security__Classification__Key",
      data: {
        key: "Sensitive",
      },
    },
  ]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`ClassificationsAddNewClassificationsRequestInner`](./models/classifications-add-new-classifications-request-inner.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[ClassificationTemplate](./models/classification-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classifications.initializeTemplate`<a id="boxclassificationsinitializetemplate"></a>

When an enterprise does not yet have any classifications, this API call
initializes the classification template with an initial set of
classifications.

If an enterprise already has a classification, the template will already
exist and instead an API call should be made to add additional
classifications.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initializeTemplateResponse = await box.classifications.initializeTemplate(
  {
    scope: "enterprise",
    templateKey: "securityClassification-6VMVochwUWo",
    displayName: "Classification",
    hidden: false,
    copyInstanceOnItemCopy: false,
    fields: [
      {
        type: "enum",
        key: "Box__Security__Classification__Key",
        displayName: "Classification",
        hidden: false,
        options: [
          {
            key: "Sensitive",
          },
        ],
      },
    ],
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

The scope in which to create the classifications. This should be `enterprise` or `enterprise_{id}` where `id` is the unique ID of the enterprise.

##### templateKey: `string`<a id="templatekey-string"></a>

Defines the list of metadata templates.

##### displayName: `string`<a id="displayname-string"></a>

The name of the template as shown in web and mobile interfaces.

##### fields: [`ClassificationsInitializeTemplateRequestFieldsInner`](./models/classifications-initialize-template-request-fields-inner.ts)[]<a id="fields-classificationsinitializetemplaterequestfieldsinnermodelsclassifications-initialize-template-request-fields-innerts"></a>

The classification template requires exactly one field, which holds all the valid classification values.

##### hidden: `boolean`<a id="hidden-boolean"></a>

Determines if the classification template is hidden or available on web and mobile devices.

##### copyInstanceOnItemCopy: `boolean`<a id="copyinstanceonitemcopy-boolean"></a>

Determines if classifications are copied along when the file or folder is copied.

#### 🔄 Return<a id="🔄-return"></a>

[ClassificationTemplate](./models/classification-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/schema#classifications` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classifications.listAllClassifications`<a id="boxclassificationslistallclassifications"></a>

Retrieves the classification metadata template and lists all the
classifications available to this enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllClassificationsResponse =
  await box.classifications.listAllClassifications();
```

#### 🔄 Return<a id="🔄-return"></a>

[ClassificationTemplate](./models/classification-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classifications.updateLabelsDescriptions`<a id="boxclassificationsupdatelabelsdescriptions"></a>

Updates the labels and descriptions of one or more classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelsDescriptionsResponse =
  await box.classifications.updateLabelsDescriptions([
    {
      op: "editEnumOption",
      fieldKey: "Box__Security__Classification__Key",
      enumOptionKey: "Sensitive",
      data: {
        key: "Very Sensitive",
      },
    },
  ]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`ClassificationsUpdateLabelsDescriptionsRequestInner`](./models/classifications-update-labels-descriptions-request-inner.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[ClassificationTemplate](./models/classification-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFiles.addClassification`<a id="boxclassificationsonfilesaddclassification"></a>

Adds a classification to a file by specifying the label of the
classification to add.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addClassificationResponse =
  await box.classificationsOnFiles.addClassification({
    fileId: "fileId_example",
    Box__Security__Classification__Key: "Sensitive",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### Box__Security__Classification__Key: `string`<a id="box__security__classification__key-string"></a>

The name of the classification to apply to this file.  To list the available classifications in an enterprise, use the classification API to retrieve the [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema) which lists all available classification keys.

#### 🔄 Return<a id="🔄-return"></a>

[Classification](./models/classification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFiles.getClassificationMetadataInstance`<a id="boxclassificationsonfilesgetclassificationmetadatainstance"></a>

Retrieves the classification metadata instance that
has been applied to a file.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getClassificationMetadataInstanceResponse =
  await box.classificationsOnFiles.getClassificationMetadataInstance({
    fileId: "fileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[Classification](./models/classification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFiles.removeClassification`<a id="boxclassificationsonfilesremoveclassification"></a>

Removes any classifications from a file.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/files/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeClassificationResponse =
  await box.classificationsOnFiles.removeClassification({
    fileId: "fileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFiles.updateClassificationMetadataInstance`<a id="boxclassificationsonfilesupdateclassificationmetadatainstance"></a>

Updates a classification on a file.

The classification can only be updated if a classification has already been
applied to the file before. When editing classifications, only values are
defined for the enterprise will be accepted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateClassificationMetadataInstanceResponse =
  await box.classificationsOnFiles.updateClassificationMetadataInstance({
    fileId: "12345",
    requestBody: [
      {
        op: "replace",
        path: "/Box__Security__Classification__Key",
        value: "Sensitive",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### requestBody: [`ClassificationsOnFilesUpdateClassificationMetadataInstanceRequestInner`](./models/classifications-on-files-update-classification-metadata-instance-request-inner.ts)[]<a id="requestbody-classificationsonfilesupdateclassificationmetadatainstancerequestinnermodelsclassifications-on-files-update-classification-metadata-instance-request-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Classification](./models/classification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFolders.addClassificationToFolder`<a id="boxclassificationsonfoldersaddclassificationtofolder"></a>

Adds a classification to a folder by specifying the label of the
classification to add.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addClassificationToFolderResponse =
  await box.classificationsOnFolders.addClassificationToFolder({
    folderId: "folderId_example",
    Box__Security__Classification__Key: "Sensitive",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### Box__Security__Classification__Key: `string`<a id="box__security__classification__key-string"></a>

The name of the classification to apply to this folder.  To list the available classifications in an enterprise, use the classification API to retrieve the [classification template](e://get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema) which lists all available classification keys.

#### 🔄 Return<a id="🔄-return"></a>

[Classification](./models/classification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFolders.getClassificationMetadata`<a id="boxclassificationsonfoldersgetclassificationmetadata"></a>

Retrieves the classification metadata instance that
has been applied to a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getClassificationMetadataResponse =
  await box.classificationsOnFolders.getClassificationMetadata({
    folderId: "folderId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🔄 Return<a id="🔄-return"></a>

[Classification](./models/classification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFolders.removeFromFolder`<a id="boxclassificationsonfoldersremovefromfolder"></a>

Removes any classifications from a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromFolderResponse =
  await box.classificationsOnFolders.removeFromFolder({
    folderId: "folderId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.classificationsOnFolders.updateClassification`<a id="boxclassificationsonfoldersupdateclassification"></a>

Updates a classification on a folder.

The classification can only be updated if a classification has already been
applied to the folder before. When editing classifications, only values are
defined for the enterprise will be accepted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateClassificationResponse =
  await box.classificationsOnFolders.updateClassification({
    folderId: "12345",
    requestBody: [
      {
        op: "replace",
        path: "/Box__Security__Classification__Key",
        value: "Sensitive",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### requestBody: [`ClassificationsOnFoldersUpdateClassificationRequestInner`](./models/classifications-on-folders-update-classification-request-inner.ts)[]<a id="requestbody-classificationsonfoldersupdateclassificationrequestinnermodelsclassifications-on-folders-update-classification-request-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Classification](./models/classification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/enterprise/securityClassification-6VMVochwUWo` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborations.collaborations`<a id="boxcollaborationscollaborations"></a>

Adds a collaboration for a single user or a single group to a file
or folder.

Collaborations can be created using email address, user IDs, or a
group IDs.

If a collaboration is being created with a group, access to
this endpoint is dependent on the group's ability to be invited.

If collaboration is in `pending` status, the following fields
are redacted:
- `login` and `name` are hidden if a collaboration was created
using `user_id`,
-  `name` is hidden if a collaboration was created using `login`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const collaborationsResponse = await box.collaborations.collaborations({
  item: {
    type: "file",
    id: "11446498",
  },
  accessible_by: {
    type: "user",
    id: "23522323",
    login: "john@example.com",
  },
  role: "editor",
  is_access_only: true,
  can_view_path: true,
  expires_at: "2019-08-29T23:59:00-07:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### item: [`PostCollaborationsRequestItem`](./models/post-collaborations-request-item.ts)<a id="item-postcollaborationsrequestitemmodelspost-collaborations-request-itemts"></a>

##### accessible_by: [`PostCollaborationsRequestAccessibleBy`](./models/post-collaborations-request-accessible-by.ts)<a id="accessible_by-postcollaborationsrequestaccessiblebymodelspost-collaborations-request-accessible-byts"></a>

##### role: `string`<a id="role-string"></a>

The level of access granted.

##### is_access_only: `boolean`<a id="is_access_only-boolean"></a>

If set to `true`, collaborators have access to shared items, but such items won\\\'t be visible in the All Files list. Additionally, collaborators won\\\'t see the the path to the root folder for the shared item.

##### can_view_path: `boolean`<a id="can_view_path-boolean"></a>

Determines if the invited users can see the entire parent path to the associated folder. The user will not gain privileges in any parent folder and therefore can not see content the user is not collaborated on.  Be aware that this meaningfully increases the time required to load the invitee\\\'s **All Files** page. We recommend you limit the number of collaborations with `can_view_path` enabled to 1,000 per user.  Only owner or co-owners can invite collaborators with a `can_view_path` of `true`.  `can_view_path` can only be used for folder collaborations.

##### expires_at: `string`<a id="expires_at-string"></a>

Set the expiration date for the collaboration. At this date, the collaboration will be automatically removed from the item.  This feature will only work if the **Automatically remove invited collaborators: Allow folder owners to extend the expiry date** setting has been enabled in the **Enterprise Settings** of the **Admin Console**. When the setting is not enabled, collaborations can not have an expiry date and a value for this field will be result in an error.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### notify: `boolean`<a id="notify-boolean"></a>

Determines if users should receive email notification for the action performed.

#### 🔄 Return<a id="🔄-return"></a>

[Collaboration](./models/collaboration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaborations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborations.getSingleCollaboration`<a id="boxcollaborationsgetsinglecollaboration"></a>

Retrieves a single collaboration.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleCollaborationResponse =
  await box.collaborations.getSingleCollaboration({
    collaborationId: "collaborationId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collaborationId: `string`<a id="collaborationid-string"></a>

The ID of the collaboration

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[Collaboration](./models/collaboration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaborations/{collaboration_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborations.removeSingleCollaboration`<a id="boxcollaborationsremovesinglecollaboration"></a>

Deletes a single collaboration.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSingleCollaborationResponse =
  await box.collaborations.removeSingleCollaboration({
    collaborationId: "collaborationId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collaborationId: `string`<a id="collaborationid-string"></a>

The ID of the collaboration

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaborations/{collaboration_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborations.updateCollaboration`<a id="boxcollaborationsupdatecollaboration"></a>

Updates a collaboration.
Can be used to change the owner of an item, or to
accept collaboration invites.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCollaborationResponse =
  await box.collaborations.updateCollaboration({
    collaborationId: "collaborationId_example",
    role: "editor",
    status: "accepted",
    expires_at: "2019-08-29T23:59:00-07:00",
    can_view_path: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### role: `string`<a id="role-string"></a>

The level of access granted.

##### collaborationId: `string`<a id="collaborationid-string"></a>

The ID of the collaboration

##### status: `string`<a id="status-string"></a>

<!--alex ignore reject--> Set the status of a `pending` collaboration invitation, effectively accepting, or rejecting the invite.

##### expires_at: `string`<a id="expires_at-string"></a>

Update the expiration date for the collaboration. At this date, the collaboration will be automatically removed from the item.  This feature will only work if the **Automatically remove invited collaborators: Allow folder owners to extend the expiry date** setting has been enabled in the **Enterprise Settings** of the **Admin Console**. When the setting is not enabled, collaborations can not have an expiry date and a value for this field will be result in an error.  Additionally, a collaboration can only be given an expiration if it was created after the **Automatically remove invited collaborator** setting was enabled.

##### can_view_path: `boolean`<a id="can_view_path-boolean"></a>

Determines if the invited users can see the entire parent path to the associated folder. The user will not gain privileges in any parent folder and therefore can not see content the user is not collaborated on.  Be aware that this meaningfully increases the time required to load the invitee\\\'s **All Files** page. We recommend you limit the number of collaborations with `can_view_path` enabled to 1,000 per user.  Only owner or co-owners can invite collaborators with a `can_view_path` of `true`.  `can_view_path` can only be used for folder collaborations.

#### 🔄 Return<a id="🔄-return"></a>

[Collaboration](./models/collaboration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaborations/{collaboration_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborationsList.collaborations`<a id="boxcollaborationslistcollaborations"></a>

Retrieves all pending collaboration invites for this user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const collaborationsResponse = await box.collaborationsList.collaborations({
  status: "pending",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `'pending'`<a id="status-pending"></a>

The status of the collaborations to retrieve

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[Collaborations](./models/collaborations.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaborations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborationsList.fileAccessList`<a id="boxcollaborationslistfileaccesslist"></a>

Retrieves a list of pending and active collaborations for a
file. This returns all the users that have access to the file
or have been invited to the file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fileAccessListResponse = await box.collaborationsList.fileAccessList({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

#### 🔄 Return<a id="🔄-return"></a>

[Collaborations](./models/collaborations.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/collaborations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborationsList.folderAccess`<a id="boxcollaborationslistfolderaccess"></a>

Retrieves a list of pending and active collaborations for a
folder. This returns all the users that have access to the folder
or have been invited to the folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const folderAccessResponse = await box.collaborationsList.folderAccess({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[Collaborations](./models/collaborations.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/collaborations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collaborationsList.groupAccessDetails`<a id="boxcollaborationslistgroupaccessdetails"></a>

Retrieves all the collaborations for a group. The user
must have admin permissions to inspect enterprise's groups.

Each collaboration object has details on which files or
folders the group has access to and with what role.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const groupAccessDetailsResponse =
  await box.collaborationsList.groupAccessDetails({
    groupId: "groupId_example",
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the group.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

#### 🔄 Return<a id="🔄-return"></a>

[Collaborations](./models/collaborations.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/collaborations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collections.collections`<a id="boxcollectionscollections"></a>

Retrieves all collections for a given user.

Currently, only the `favorites` collection
is supported.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const collectionsResponse = await box.collections.collections({
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[Collections](./models/collections.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.collections.listItems`<a id="boxcollectionslistitems"></a>

Retrieves the files and/or folders contained within
this collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listItemsResponse = await box.collections.listItems({
  collectionId: "collectionId_example",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

The ID of the collection.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[Items](./models/items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collections/{collection_id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.comments.comments`<a id="boxcommentscomments"></a>

Adds a comment by the user to a specific file, or
as a reply to an other comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const commentsResponse = await box.comments.comments({
  message: "Review completed!",
  tagged_message: "@[1234:John] Review completed!",
  item: {
    id: "11446498",
    type: "file",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### message: `string`<a id="message-string"></a>

The text of the comment.  To mention a user, use the `tagged_message` parameter instead.

##### item: [`PostCommentsRequestItem`](./models/post-comments-request-item.ts)<a id="item-postcommentsrequestitemmodelspost-comments-request-itemts"></a>

##### tagged_message: `string`<a id="tagged_message-string"></a>

The text of the comment, including `@[user_id:name]` somewhere in the message to mention another user, which will send them an email notification, letting them know they have been mentioned.  The `user_id` is the target user\\\'s ID, where the `name` can be any custom phrase. In the Box UI this name will link to the user\\\'s profile.  If you are not mentioning another user, use `message` instead.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[CommentFull](./models/comment-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.comments.getById`<a id="boxcommentsgetbyid"></a>

Retrieves the message and metadata for a specific comment, as well
as information on the user who created the comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await box.comments.getById({
  commentId: "commentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `string`<a id="commentid-string"></a>

The ID of the comment.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[CommentFull](./models/comment-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{comment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.comments.listFileComments`<a id="boxcommentslistfilecomments"></a>

Retrieves a list of comments for a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFileCommentsResponse = await box.comments.listFileComments({
  fileId: "fileId_example",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

#### 🔄 Return<a id="🔄-return"></a>

[Comments](./models/comments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.comments.removeById`<a id="boxcommentsremovebyid"></a>

Permanently deletes a comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await box.comments.removeById({
  commentId: "commentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `string`<a id="commentid-string"></a>

The ID of the comment.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{comment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.comments.updateMessage`<a id="boxcommentsupdatemessage"></a>

Update the message of a comment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMessageResponse = await box.comments.updateMessage({
  commentId: "commentId_example",
  message: "Review completed!",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### commentId: `string`<a id="commentid-string"></a>

The ID of the comment.

##### message: `string`<a id="message-string"></a>

The text of the comment to update

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[CommentFull](./models/comment-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/comments/{comment_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.devicePinners.getPinnerInfo`<a id="boxdevicepinnersgetpinnerinfo"></a>

Retrieves information about an individual device pin.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPinnerInfoResponse = await box.devicePinners.getPinnerInfo({
  devicePinnerId: "devicePinnerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### devicePinnerId: `string`<a id="devicepinnerid-string"></a>

The ID of the device pin

#### 🔄 Return<a id="🔄-return"></a>

[DevicePinner](./models/device-pinner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/device_pinners/{device_pinner_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.devicePinners.listPinnerInfo`<a id="boxdevicepinnerslistpinnerinfo"></a>

Retrieves all the device pins within an enterprise.

The user must have admin privileges, and the application
needs the "manage enterprise" scope to make this call.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPinnerInfoResponse = await box.devicePinners.listPinnerInfo({
  enterpriseId: "enterpriseId_example",
  direction: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### enterpriseId: `string`<a id="enterpriseid-string"></a>

The ID of the enterprise

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### direction: `'ASC' | 'DESC'`<a id="direction-asc--desc"></a>

The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.

#### 🔄 Return<a id="🔄-return"></a>

[DevicePinners](./models/device-pinners.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/enterprises/{enterprise_id}/device_pinners` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.devicePinners.removeDevicePin`<a id="boxdevicepinnersremovedevicepin"></a>

Deletes an individual device pin.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeDevicePinResponse = await box.devicePinners.removeDevicePin({
  devicePinnerId: "devicePinnerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### devicePinnerId: `string`<a id="devicepinnerid-string"></a>

The ID of the device pin

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/device_pinners/{device_pinner_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsUserExemptions.createUserExemptionFromCollaborationDomainRestrictions`<a id="boxdomainrestrictionsuserexemptionscreateuserexemptionfromcollaborationdomainrestrictions"></a>

Exempts a user from the restrictions set out by the allowed list of domains
for collaborations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserExemptionFromCollaborationDomainRestrictionsResponse =
  await box.domainRestrictionsUserExemptions.createUserExemptionFromCollaborationDomainRestrictions(
    {
      user: {
        id: "23522323",
      },
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user: [`DomainRestrictionsUserExemptionsCreateUserExemptionFromCollaborationDomainRestrictionsRequestUser`](./models/domain-restrictions-user-exemptions-create-user-exemption-from-collaboration-domain-restrictions-request-user.ts)<a id="user-domainrestrictionsuserexemptionscreateuserexemptionfromcollaborationdomainrestrictionsrequestusermodelsdomain-restrictions-user-exemptions-create-user-exemption-from-collaboration-domain-restrictions-request-userts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CollaborationAllowlistExemptTarget](./models/collaboration-allowlist-exempt-target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_exempt_targets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsUserExemptions.getUserExemption`<a id="boxdomainrestrictionsuserexemptionsgetuserexemption"></a>

Returns a users who has been exempt from the collaboration
domain restrictions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserExemptionResponse =
  await box.domainRestrictionsUserExemptions.getUserExemption({
    collaborationWhitelistExemptTargetId:
      "collaborationWhitelistExemptTargetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collaborationWhitelistExemptTargetId: `string`<a id="collaborationwhitelistexempttargetid-string"></a>

The ID of the exemption to the list.

#### 🔄 Return<a id="🔄-return"></a>

[CollaborationAllowlistExemptTarget](./models/collaboration-allowlist-exempt-target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsUserExemptions.listExemptUsers`<a id="boxdomainrestrictionsuserexemptionslistexemptusers"></a>

Returns a list of users who have been exempt from the collaboration
domain restrictions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listExemptUsersResponse =
  await box.domainRestrictionsUserExemptions.listExemptUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[CollaborationAllowlistExemptTargets](./models/collaboration-allowlist-exempt-targets.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_exempt_targets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsUserExemptions.removeExemption`<a id="boxdomainrestrictionsuserexemptionsremoveexemption"></a>

Removes a user's exemption from the restrictions set out by the allowed list
of domains for collaborations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeExemptionResponse =
  await box.domainRestrictionsUserExemptions.removeExemption({
    collaborationWhitelistExemptTargetId:
      "collaborationWhitelistExemptTargetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collaborationWhitelistExemptTargetId: `string`<a id="collaborationwhitelistexempttargetid-string"></a>

The ID of the exemption to the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsForCollaborations.addAllowedDomainEntry`<a id="boxdomainrestrictionsforcollaborationsaddalloweddomainentry"></a>

Creates a new entry in the list of allowed domains to allow
collaboration for.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAllowedDomainEntryResponse =
  await box.domainRestrictionsForCollaborations.addAllowedDomainEntry({
    domain: "example.com",
    direction: "inbound",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

The domain to add to the list of allowed domains.

##### direction: `string`<a id="direction-string"></a>

The direction in which to allow collaborations.

#### 🔄 Return<a id="🔄-return"></a>

[CollaborationAllowlistEntry](./models/collaboration-allowlist-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_entries` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsForCollaborations.allowedCollaborationDomain`<a id="boxdomainrestrictionsforcollaborationsallowedcollaborationdomain"></a>

Returns a domain that has been deemed safe to create collaborations
for within the current enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const allowedCollaborationDomainResponse =
  await box.domainRestrictionsForCollaborations.allowedCollaborationDomain({
    collaborationWhitelistEntryId: "collaborationWhitelistEntryId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collaborationWhitelistEntryId: `string`<a id="collaborationwhitelistentryid-string"></a>

The ID of the entry in the list.

#### 🔄 Return<a id="🔄-return"></a>

[CollaborationAllowlistEntry](./models/collaboration-allowlist-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_entries/{collaboration_whitelist_entry_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsForCollaborations.listAllowedCollaborationDomains`<a id="boxdomainrestrictionsforcollaborationslistallowedcollaborationdomains"></a>

Returns the list domains that have been deemed safe to create collaborations
for within the current enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllowedCollaborationDomainsResponse =
  await box.domainRestrictionsForCollaborations.listAllowedCollaborationDomains(
    {}
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[CollaborationAllowlistEntries](./models/collaboration-allowlist-entries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_entries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.domainRestrictionsForCollaborations.removeAllowedDomainEntry`<a id="boxdomainrestrictionsforcollaborationsremovealloweddomainentry"></a>

Removes a domain from the list of domains that have been deemed safe to create
collaborations for within the current enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAllowedDomainEntryResponse =
  await box.domainRestrictionsForCollaborations.removeAllowedDomainEntry({
    collaborationWhitelistEntryId: "collaborationWhitelistEntryId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collaborationWhitelistEntryId: `string`<a id="collaborationwhitelistentryid-string"></a>

The ID of the entry in the list.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/collaboration_whitelist_entries/{collaboration_whitelist_entry_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.downloads.fileContentGet`<a id="boxdownloadsfilecontentget"></a>

Returns the contents of a file in binary format.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fileContentGetResponse = await box.downloads.fileContentGet({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### range: `string`<a id="range-string"></a>

The byte range of the content to download.  The format `bytes={start_byte}-{end_byte}` can be used to specify what section of the file to download.

##### boxapi: `string`<a id="boxapi-string"></a>

The URL, and optional password, for the shared link of this item.  This header can be used to access items that have not been explicitly shared with a user.  Use the format `shared_link=[link]` or if a password is required then use `shared_link=[link]&shared_link_password=[password]`.  This header can be used on the file or folder shared, as well as on any files or folders nested within the item.

##### version: `string`<a id="version-string"></a>

The file version to download

##### accessToken: `string`<a id="accesstoken-string"></a>

An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication. When using this parameter, please make sure that the access token is sufficiently scoped down to only allow read access to that file and no other files or folders.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.emailAliases.createNewAlias`<a id="boxemailaliasescreatenewalias"></a>

Adds a new email alias to a user account..

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAliasResponse = await box.emailAliases.createNewAlias({
  userId: "userId_example",
  email: "alias@example.com",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

The email address to add to the account as an alias.  Note: The domain of the email alias needs to be registered  to your enterprise. See the [domain verification guide](https://support.box.com/hc/en-us/articles/4408619650579-Domain-Verification) for steps to add a new domain.

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[EmailAlias](./models/email-alias.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/email_aliases` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.emailAliases.listUserEmailAliases`<a id="boxemailaliaseslistuseremailaliases"></a>

Retrieves all email aliases for a user. The collection
does not include the primary login for the user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserEmailAliasesResponse =
  await box.emailAliases.listUserEmailAliases({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

#### 🔄 Return<a id="🔄-return"></a>

[EmailAliases](./models/email-aliases.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/email_aliases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.emailAliases.removeAlias`<a id="boxemailaliasesremovealias"></a>

Removes an email alias from a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAliasResponse = await box.emailAliases.removeAlias({
  userId: "userId_example",
  emailAliasId: "emailAliasId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

##### emailAliasId: `string`<a id="emailaliasid-string"></a>

The ID of the email alias.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/email_aliases/{email_alias_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.events.events`<a id="boxeventsevents"></a>

Returns up to a year of past events for a given user
or for the entire enterprise.

By default this returns events for the authenticated user. To retrieve events
for the entire enterprise, set the `stream_type` to `admin_logs_streaming`
for live monitoring of new events, or `admin_logs` for querying across
historical events. The user making the API call will
need to have admin privileges, and the application will need to have the
scope `manage enterprise properties` checked.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const eventsResponse = await box.events.events({
  streamType: "all",
  limit: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### streamType: `'all' | 'changes' | 'sync' | 'admin_logs' | 'admin_logs_streaming'`<a id="streamtype-all--changes--sync--admin_logs--admin_logs_streaming"></a>

Defines the type of events that are returned  * `all` returns everything for a user and is the default * `changes` returns events that may cause file tree changes   such as file updates or collaborations. * `sync` is similar to `changes` but only applies to synced folders * `admin_logs` returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for programmatically pulling from a 1 year history of   events across all users within the enterprise and within a   `created_after` and `created_before` time frame. The complete history   of events will be returned in chronological order based on the event   time, but latency will be much higher than `admin_logs_streaming`. * `admin_logs_streaming` returns all events for an entire enterprise and   requires the user making the API call to have admin permissions. This   stream type is for polling for recent events across all users within   the enterprise. Latency will be much lower than `admin_logs`, but   events will not be returned in chronological order and may   contain duplicates.

##### streamPosition: `string`<a id="streamposition-string"></a>

The location in the event stream to start receiving events from.  * `now` will return an empty list events and the latest stream position for initialization. * `0` or `null` will return all events.

##### limit: `number`<a id="limit-number"></a>

Limits the number of events returned  Note: Sometimes, the events less than the limit requested can be returned even when there may be more events remaining. This is primarily done in the case where a number of events have already been retrieved and these retrieved events are returned rather than delaying for an unknown amount of time to see if there are any more results.

##### eventType: `string`[]<a id="eventtype-string"></a>

A comma-separated list of events to filter by. This can only be used when requesting the events with a `stream_type` of `admin_logs` or `adming_logs_streaming`. For any other `stream_type` this value will be ignored.

##### createdAfter: `string`<a id="createdafter-string"></a>

The lower bound date and time to return events for. This can only be used when requesting the events with a `stream_type` of `admin_logs`. For any other `stream_type` this value will be ignored.

##### createdBefore: `string`<a id="createdbefore-string"></a>

The upper bound date and time to return events for. This can only be used when requesting the events with a `stream_type` of `admin_logs`. For any other `stream_type` this value will be ignored.

#### 🔄 Return<a id="🔄-return"></a>

[Events](./models/events.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.events.events_0`<a id="boxeventsevents_0"></a>

Returns a list of real-time servers that can be used for long-polling updates
to the [event stream](https://raw.githubusercontent.com).

Long polling is the concept where a HTTP request is kept open until the
server sends a response, then repeating the process over and over to receive
updated responses.

Long polling the event stream can only be used for user events, not for
enterprise events.

To use long polling, first use this endpoint to retrieve a list of long poll
URLs. Next, make a long poll request to any of the provided URLs.

When an event occurs in monitored account a response with the value
`new_change` will be sent. The response contains no other details as
it only serves as a prompt to take further action such as sending a
request to the [events endpoint](https://raw.githubusercontent.com) with the last known
`stream_position`.

After the server sends this response it closes the connection. You must now
repeat the long poll process to begin listening for events again.

If no events occur for a while and the connection times out you will
receive a response with the value `reconnect`. When you receive this response
you’ll make another call to this endpoint to restart the process.

If you receive no events in `retry_timeout` seconds then you will need to
make another request to the real-time server (one of the URLs in the response
for this endpoint). This might be necessary due to network errors.

Finally, if you receive a `max_retries` error when making a request to the
real-time server, you should start over by making a call to this endpoint
first.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const events_0Response = await box.events.events_0();
```

#### 🔄 Return<a id="🔄-return"></a>

[RealtimeServers](./models/realtime-servers.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events` `OPTIONS`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileActivities.listByFileId`<a id="boxfileactivitieslistbyfileid"></a>

List file activities by file ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByFileIdResponse = await box.fileActivities.listByFileId({
  fileId: "fileId_example",
  status: "open",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

File ID for which to retrieve activity

##### activityTypes: `string`[]<a id="activitytypes-string"></a>

Comma-separated list of activity types to return. This field is ignored if marker is passed in. Defaults to all activity types.

##### commentFields: `string`[]<a id="commentfields-string"></a>

fields that are required for comments

##### versionsFields: `string`[]<a id="versionsfields-string"></a>

fields that are required for versions

##### annotationFields: `string`[]<a id="annotationfields-string"></a>

fields that are required for annotations

##### taskFields: `string`[]<a id="taskfields-string"></a>

fields that are required for tasks

##### appActivityFields: `string`[]<a id="appactivityfields-string"></a>

fields that are required for `app_activity`

##### replyLimit: `string`<a id="replylimit-string"></a>

maximum number of replies the response should contain per each top level activity[annotation, comment]

##### status: `'open' | 'resolved' | 'deleted'`<a id="status-open--resolved--deleted"></a>

Used to filter an annotation or a comment based on the status

##### enableReplies: `boolean`<a id="enablereplies-boolean"></a>

Whether or not replies should be returned

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

#### 🔄 Return<a id="🔄-return"></a>

[Activities](./models/activities.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_activities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileRequests.copyRequestToFolder`<a id="boxfilerequestscopyrequesttofolder"></a>

Copies an existing file request that is already present on one folder,
and applies it to another folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const copyRequestToFolderResponse = await box.fileRequests.copyRequestToFolder({
  fileRequestId: "fileRequestId_example",
  title: "Please upload required documents",
  description: "Please upload required documents",
  status: "active",
  is_email_required: true,
  is_description_required: true,
  expires_at: "2020-09-28T10:53:43-08:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folder: [`FileRequestCopyRequestAllOfFolder`](./models/file-request-copy-request-all-of-folder.ts)<a id="folder-filerequestcopyrequestalloffoldermodelsfile-request-copy-request-all-of-folderts"></a>

##### fileRequestId: `string`<a id="filerequestid-string"></a>

The unique identifier that represent a file request.  The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/filerequest/123` the `file_request_id` is `123`.

##### title: `string`<a id="title-string"></a>

An optional new title for the file request. This can be used to change the title of the file request.  This will default to the value on the existing file request.

##### description: `string`<a id="description-string"></a>

An optional new description for the file request. This can be used to change the description of the file request.  This will default to the value on the existing file request.

##### status: `string`<a id="status-string"></a>

An optional new status of the file request.  When the status is set to `inactive`, the file request will no longer accept new submissions, and any visitor to the file request URL will receive a `HTTP 404` status code.  This will default to the value on the existing file request.

##### is_email_required: `boolean`<a id="is_email_required-boolean"></a>

Whether a file request submitter is required to provide their email address.  When this setting is set to true, the Box UI will show an email field on the file request form.  This will default to the value on the existing file request.

##### is_description_required: `boolean`<a id="is_description_required-boolean"></a>

Whether a file request submitter is required to provide a description of the files they are submitting.  When this setting is set to true, the Box UI will show a description field on the file request form.  This will default to the value on the existing file request.

##### expires_at: `string`<a id="expires_at-string"></a>

The date after which a file request will no longer accept new submissions.  After this date, the `status` will automatically be set to `inactive`.  This will default to the value on the existing file request.

#### 🔄 Return<a id="🔄-return"></a>

[FileRequest](./models/file-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_requests/{file_request_id}/copy` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileRequests.deletePermanently`<a id="boxfilerequestsdeletepermanently"></a>

Deletes a file request permanently.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePermanentlyResponse = await box.fileRequests.deletePermanently({
  fileRequestId: "fileRequestId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileRequestId: `string`<a id="filerequestid-string"></a>

The unique identifier that represent a file request.  The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/filerequest/123` the `file_request_id` is `123`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_requests/{file_request_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileRequests.getInformation`<a id="boxfilerequestsgetinformation"></a>

Retrieves the information about a file request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await box.fileRequests.getInformation({
  fileRequestId: "fileRequestId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileRequestId: `string`<a id="filerequestid-string"></a>

The unique identifier that represent a file request.  The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/filerequest/123` the `file_request_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[FileRequest](./models/file-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_requests/{file_request_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileRequests.updateRequest`<a id="boxfilerequestsupdaterequest"></a>

Updates a file request. This can be used to activate or
deactivate a file request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRequestResponse = await box.fileRequests.updateRequest({
  fileRequestId: "fileRequestId_example",
  title: "Please upload required documents",
  description: "Please upload required documents",
  status: "active",
  is_email_required: true,
  is_description_required: true,
  expires_at: "2020-09-28T10:53:43-08:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileRequestId: `string`<a id="filerequestid-string"></a>

The unique identifier that represent a file request.  The ID for any file request can be determined by visiting a file request builder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/filerequest/123` the `file_request_id` is `123`.

##### title: `string`<a id="title-string"></a>

An optional new title for the file request. This can be used to change the title of the file request.  This will default to the value on the existing file request.

##### description: `string`<a id="description-string"></a>

An optional new description for the file request. This can be used to change the description of the file request.  This will default to the value on the existing file request.

##### status: `string`<a id="status-string"></a>

An optional new status of the file request.  When the status is set to `inactive`, the file request will no longer accept new submissions, and any visitor to the file request URL will receive a `HTTP 404` status code.  This will default to the value on the existing file request.

##### is_email_required: `boolean`<a id="is_email_required-boolean"></a>

Whether a file request submitter is required to provide their email address.  When this setting is set to true, the Box UI will show an email field on the file request form.  This will default to the value on the existing file request.

##### is_description_required: `boolean`<a id="is_description_required-boolean"></a>

Whether a file request submitter is required to provide a description of the files they are submitting.  When this setting is set to true, the Box UI will show a description field on the file request form.  This will default to the value on the existing file request.

##### expires_at: `string`<a id="expires_at-string"></a>

The date after which a file request will no longer accept new submissions.  After this date, the `status` will automatically be set to `inactive`.  This will default to the value on the existing file request.

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

#### 🔄 Return<a id="🔄-return"></a>

[FileRequest](./models/file-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_requests/{file_request_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersionLegalHolds.getFileVersionLegalHoldInfo`<a id="boxfileversionlegalholdsgetfileversionlegalholdinfo"></a>

Retrieves information about the legal hold policies
assigned to a file version.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileVersionLegalHoldInfoResponse =
  await box.fileVersionLegalHolds.getFileVersionLegalHoldInfo({
    fileVersionLegalHoldId: "fileVersionLegalHoldId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileVersionLegalHoldId: `string`<a id="fileversionlegalholdid-string"></a>

The ID of the file version legal hold

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionLegalHold](./models/file-version-legal-hold.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_version_legal_holds/{file_version_legal_hold_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersionLegalHolds.listFileVersionLegalHolds`<a id="boxfileversionlegalholdslistfileversionlegalholds"></a>

Get a list of file versions on legal hold for a legal hold
assignment.

Due to ongoing re-architecture efforts this API might not return all file
versions for this policy ID.

Instead, this API will only return file versions held in the legacy
architecture. Two new endpoints will available to request any file versions
held in the new architecture.

For file versions held in the new architecture, the `GET
/legal_hold_policy_assignments/:id/file_versions_on_hold` API can be used to
return all past file versions available for this policy assignment, and the
`GET /legal_hold_policy_assignments/:id/files_on_hold` API can be used to
return any current (latest) versions of a file under legal hold.

The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
find a list of policy assignments for a given policy ID.

Once the re-architecture is completed this API will be deprecated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFileVersionLegalHoldsResponse =
  await box.fileVersionLegalHolds.listFileVersionLegalHolds({
    policyId: "policyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `string`<a id="policyid-string"></a>

The ID of the legal hold policy to get the file version legal holds for.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionLegalHolds](./models/file-version-legal-holds.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_version_legal_holds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersionRetentions.getFileVersionRetentionInfo`<a id="boxfileversionretentionsgetfileversionretentioninfo"></a>

Returns information about a file version retention.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileVersionRetentionInfoResponse =
  await box.fileVersionRetentions.getFileVersionRetentionInfo({
    fileVersionRetentionId: "fileVersionRetentionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileVersionRetentionId: `string`<a id="fileversionretentionid-string"></a>

The ID of the file version retention

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionRetention](./models/file-version-retention.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_version_retentions/{file_version_retention_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersionRetentions.listRetentions`<a id="boxfileversionretentionslistretentions"></a>

Retrieves all file version retentions for the given enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRetentionsResponse = await box.fileVersionRetentions.listRetentions({
  dispositionAction: "permanently_delete",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

Filters results by files with this ID.

##### fileVersionId: `string`<a id="fileversionid-string"></a>

Filters results by file versions with this ID.

##### policyId: `string`<a id="policyid-string"></a>

Filters results by the retention policy with this ID.

##### dispositionAction: `'permanently_delete' | 'remove_retention'`<a id="dispositionaction-permanently_delete--remove_retention"></a>

Filters results by the retention policy with this disposition action.

##### dispositionBefore: `string`<a id="dispositionbefore-string"></a>

Filters results by files that will have their disposition come into effect before this date.

##### dispositionAfter: `string`<a id="dispositionafter-string"></a>

Filters results by files that will have their disposition come into effect after this date.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionRetentions](./models/file-version-retentions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/file_version_retentions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersions.getSpecificVersion`<a id="boxfileversionsgetspecificversion"></a>

Retrieve a specific version of a file.

Versions are only tracked for Box users with premium accounts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificVersionResponse = await box.fileVersions.getSpecificVersion({
  fileId: "fileId_example",
  fileVersionId: "fileVersionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fileVersionId: `string`<a id="fileversionid-string"></a>

The ID of the file version

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionFull](./models/file-version-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/versions/{file_version_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersions.listAllVersions`<a id="boxfileversionslistallversions"></a>

Retrieve a list of the past versions for a file.

Versions are only tracked by Box users with premium accounts. To fetch the ID
of the current version of a file, use the `GET /file/:id` API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllVersionsResponse = await box.fileVersions.listAllVersions({
  fileId: "fileId_example",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersions](./models/file-versions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/versions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersions.moveToTrash`<a id="boxfileversionsmovetotrash"></a>

Move a file version to the trash.

Versions are only tracked for Box users with premium accounts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const moveToTrashResponse = await box.fileVersions.moveToTrash({
  fileId: "fileId_example",
  fileVersionId: "fileVersionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fileVersionId: `string`<a id="fileversionid-string"></a>

The ID of the file version

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/versions/{file_version_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersions.promoteFileVersion`<a id="boxfileversionspromotefileversion"></a>

Promote a specific version of a file.

If previous versions exist, this method can be used to
promote one of the older versions to the top of the version history.

This creates a new copy of the old version and puts it at the
top of the versions history. The file will have the exact same contents
as the older version, with the the same hash digest, `etag`, and
name as the original.

Other properties such as comments do not get updated to their
former values.

Don't use this endpoint to restore Box Notes,
as it works with file formats such as PDF, DOC,
PPTX or similar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const promoteFileVersionResponse = await box.fileVersions.promoteFileVersion({
  fileId: "fileId_example",
  id: "11446498",
  type: "file_version",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### id: `string`<a id="id-string"></a>

The file version ID

##### type: `string`<a id="type-string"></a>

The type to promote

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionFull](./models/file-version-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/versions/current` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.fileVersions.restoreVersion`<a id="boxfileversionsrestoreversion"></a>

Restores a specific version of a file after it was deleted.
Don't use this endpoint to restore Box Notes,
as it works with file formats such as PDF, DOC,
PPTX or similar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restoreVersionResponse = await box.fileVersions.restoreVersion({
  fileId: "fileId_example",
  fileVersionId: "fileVersionId_example",
  trashed_at: "null",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fileVersionId: `string`<a id="fileversionid-string"></a>

The ID of the file version

##### trashed_at: `string`<a id="trashed_at-string"></a>

Set this to `null` to clear the date and restore the file.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionFull](./models/file-version-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/versions/{file_version_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.files.createCopy`<a id="boxfilescreatecopy"></a>

Creates a copy of a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCopyResponse = await box.files.createCopy({
  fileId: "fileId_example",
  version: "0",
  name: "FileCopy.txt",
  parent: {
    id: "0",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent: [`FilesCreateCopyRequestParent`](./models/files-create-copy-request-parent.ts)<a id="parent-filescreatecopyrequestparentmodelsfiles-create-copy-request-parentts"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### version: `string`<a id="version-string"></a>

An optional ID of the specific file version to copy.

##### name: `string`<a id="name-string"></a>

An optional new name for the copied file.  There are some restrictions to the file name. Names containing non-printable ASCII characters, forward and backward slashes (`/`, `\\\\`), and protected names like `.` and `..` are automatically sanitized by removing the non-allowed characters.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/copy` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.files.deleteFile`<a id="boxfilesdeletefile"></a>

Deletes a file, either permanently or by moving it to
the trash.

The the enterprise settings determine whether the item will
be permanently deleted from Box or moved to the trash.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFileResponse = await box.files.deleteFile({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.files.getDetails`<a id="boxfilesgetdetails"></a>

Retrieves the details about a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await box.files.getDetails({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.  Additionally this field can be used to query any metadata applied to the file by specifying the `metadata` field as well as the scope and key of the template to retrieve, for example `?field=metadata.enterprise_12345.contractTemplate`.

##### ifNoneMatch: `string`<a id="ifnonematch-string"></a>

Ensures an item is only returned if it has changed.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `304 Not Modified` if the item has not changed since.

##### boxapi: `string`<a id="boxapi-string"></a>

The URL, and optional password, for the shared link of this item.  This header can be used to access items that have not been explicitly shared with a user.  Use the format `shared_link=[link]` or if a password is required then use `shared_link=[link]&shared_link_password=[password]`.  This header can be used on the file or folder shared, as well as on any files or folders nested within the item.

##### xRepHints: `string`<a id="xrephints-string"></a>

A header required to request specific `representations` of a file. Use this in combination with the `fields` query parameter to request a specific file representation.  The general format for these representations is `X-Rep-Hints: [...]` where `[...]` is one or many hints in the format `[fileType?query]`.  For example, to request a `png` representation in `32x32` as well as `64x64` pixel dimensions provide the following hints.  `x-rep-hints: [jpg?dimensions=32x32][jpg?dimensions=64x64]`  Additionally, a `text` representation is available for all document file types in Box using the `[extracted_text]` representation.  `x-rep-hints: [extracted_text]`

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.files.getThumbnail`<a id="boxfilesgetthumbnail"></a>

Retrieves a thumbnail, or smaller image representation, of a file.

Sizes of `32x32`,`64x64`, `128x128`, and `256x256` can be returned in
the `.png` format and sizes of `32x32`, `160x160`, and `320x320`
can be returned in the `.jpg` format.

Thumbnails can be generated for the image and video file formats listed
[found on our community site][1].

[1]: https://community.box.com/t5/Migrating-and-Previewing-Content/File-Types-and-Fonts-Supported-in-Box-Content-Preview/ta-p/327

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getThumbnailResponse = await box.files.getThumbnail({
  fileId: "fileId_example",
  extension: "png",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### extension: `'png' | 'jpg'`<a id="extension-png--jpg"></a>

The file format for the thumbnail

##### minHeight: `number`<a id="minheight-number"></a>

The minimum height of the thumbnail

##### minWidth: `number`<a id="minwidth-number"></a>

The minimum width of the thumbnail

##### maxHeight: `number`<a id="maxheight-number"></a>

The maximum height of the thumbnail

##### maxWidth: `number`<a id="maxwidth-number"></a>

The maximum width of the thumbnail

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/thumbnail.{extension}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.files.preflightCheckBeforeUpload`<a id="boxfilespreflightcheckbeforeupload"></a>

Performs a check to verify that a file will be accepted by Box
before you upload the entire file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const preflightCheckBeforeUploadResponse =
  await box.files.preflightCheckBeforeUpload({
    name: "File.mp4",
    size: 1024,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name for the file

##### size: `number`<a id="size-number"></a>

The size of the file in bytes

##### parent: [`FilesPreflightCheckBeforeUploadRequestParent`](./models/files-preflight-check-before-upload-request-parent.ts)<a id="parent-filespreflightcheckbeforeuploadrequestparentmodelsfiles-preflight-check-before-upload-request-parentts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UploadUrl](./models/upload-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/content` `OPTIONS`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.files.updateFile`<a id="boxfilesupdatefile"></a>

Updates a file. This can be used to rename or move a file,
create a shared link, or lock a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFileResponse = await box.files.updateFile({
  fileId: "fileId_example",
  tags: ["approved"],
  description: "The latest reports. Automatically updated",
  name: "NewFile.txt",
  disposition_at: "2012-12-12T10:53:43-08:00",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### tags: `string`[]<a id="tags-string"></a>

The tags for this item. These tags are shown in the Box web app and mobile apps next to an item.  To add or remove a tag, retrieve the item\\\'s current tags, modify them, and then update this field.  There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.

##### description: `string`<a id="description-string"></a>

The description for a file. This can be seen in the right-hand sidebar panel when viewing a file in the Box web app. Additionally, this index is used in the search index of the file, allowing users to find the file by the content in the description.

##### name: `string`<a id="name-string"></a>

An optional different name for the file. This can be used to rename the file.

##### parent: [`FilesUpdateFileRequestParent`](./models/files-update-file-request-parent.ts)<a id="parent-filesupdatefilerequestparentmodelsfiles-update-file-request-parentts"></a>

##### shared_link: [`FilesUpdateFileRequestSharedLink`](./models/files-update-file-request-shared-link.ts)<a id="shared_link-filesupdatefilerequestsharedlinkmodelsfiles-update-file-request-shared-linkts"></a>

##### lock: [`FilesUpdateFileRequestLock`](./models/files-update-file-request-lock.ts)<a id="lock-filesupdatefilerequestlockmodelsfiles-update-file-request-lockts"></a>

##### disposition_at: `string`<a id="disposition_at-string"></a>

The retention expiration timestamp for the given file. This date cannot be shortened once set on a file.

##### permissions: [`FilesUpdateFileRequestPermissions`](./models/files-update-file-request-permissions.ts)<a id="permissions-filesupdatefilerequestpermissionsmodelsfiles-update-file-request-permissionsts"></a>

##### collections: [`Reference1`](./models/reference1.ts)[]<a id="collections-reference1modelsreference1ts"></a>

An array of collections to make this file a member of. Currently we only support the `favorites` collection.  To get the ID for a collection, use the [List all collections][1] endpoint.  Passing an empty array `[]` or `null` will remove the file from all collections.  [1]: e://get-collections

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folderLocks.create`<a id="boxfolderlockscreate"></a>

Creates a folder lock on a folder, preventing it from being moved and/or
deleted.

You must be authenticated as the owner or co-owner of the folder to
use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createResponse = await box.folderLocks.create({
  folder: {
    type: "folder",
    id: "1234567890",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folder: [`FolderLocksCreateRequestFolder`](./models/folder-locks-create-request-folder.ts)<a id="folder-folderlockscreaterequestfoldermodelsfolder-locks-create-request-folderts"></a>

##### locked_operations: [`FolderLocksCreateRequestLockedOperations`](./models/folder-locks-create-request-locked-operations.ts)<a id="locked_operations-folderlockscreaterequestlockedoperationsmodelsfolder-locks-create-request-locked-operationsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FolderLock](./models/folder-lock.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folder_locks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folderLocks.deleteFolderLock`<a id="boxfolderlocksdeletefolderlock"></a>

Deletes a folder lock on a given folder.

You must be authenticated as the owner or co-owner of the folder to
use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFolderLockResponse = await box.folderLocks.deleteFolderLock({
  folderLockId: "folderLockId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderLockId: `string`<a id="folderlockid-string"></a>

The ID of the folder lock.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folder_locks/{folder_lock_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folderLocks.listDetails`<a id="boxfolderlockslistdetails"></a>

Retrieves folder lock details for a given folder.

You must be authenticated as the owner or co-owner of the folder to
use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDetailsResponse = await box.folderLocks.listDetails({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🔄 Return<a id="🔄-return"></a>

[FolderLocks](./models/folder-locks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folder_locks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folders.createCopy`<a id="boxfolderscreatecopy"></a>

Creates a copy of a folder within a destination folder.

The original folder will not be changed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCopyResponse = await box.folders.createCopy({
  folderId: "folderId_example",
  name: "New Folder",
  parent: {
    id: "0",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parent: [`FoldersCreateCopyRequestParent`](./models/folders-create-copy-request-parent.ts)<a id="parent-folderscreatecopyrequestparentmodelsfolders-create-copy-request-parentts"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier of the folder to copy.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder with the ID `0` can not be copied.

##### name: `string`<a id="name-string"></a>

An optional new name for the copied folder.  There are some restrictions to the file name. Names containing non-printable ASCII characters, forward and backward slashes (`/`, `\\\\`), as well as names with trailing spaces are prohibited.  Additionally, the names `.` and `..` are not allowed either.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/copy` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folders.deleteById`<a id="boxfoldersdeletebyid"></a>

Deletes a folder, either permanently or by moving it to
the trash.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await box.folders.deleteById({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

##### recursive: `boolean`<a id="recursive-boolean"></a>

Delete a folder that is not empty by recursively deleting the folder and all of its content.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folders.folders`<a id="boxfoldersfolders"></a>

Creates a new empty folder within the specified parent folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const foldersResponse = await box.folders.folders({
  name: "New Folder",
  parent: {
    id: "0",
  },
  sync_state: "synced",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name for the new folder.  There are some restrictions to the file name. Names containing non-printable ASCII characters, forward and backward slashes (`/`, `\\\\`), as well as names with trailing spaces are prohibited.  Additionally, the names `.` and `..` are not allowed either.

##### parent: [`PostFoldersRequestParent`](./models/post-folders-request-parent.ts)<a id="parent-postfoldersrequestparentmodelspost-folders-request-parentts"></a>

##### folder_upload_email: [`PostFoldersRequestFolderUploadEmail`](./models/post-folders-request-folder-upload-email.ts)<a id="folder_upload_email-postfoldersrequestfolderuploademailmodelspost-folders-request-folder-upload-emailts"></a>

##### sync_state: `string`<a id="sync_state-string"></a>

Specifies whether a folder should be synced to a user\\\'s device or not. This is used by Box Sync (discontinued) and is not used by Box Drive.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folders.getFolderDetails`<a id="boxfoldersgetfolderdetails"></a>

Retrieves details for a folder, including the first 100 entries
in the folder.

Passing `sort`, `direction`, `offset`, and `limit`
parameters in query allows you to manage the
list of returned
[folder items](r://folder--full#param-item-collection).

To fetch more items within the folder, use the
[Get items in a folder](e://get-folders-id-items) endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderDetailsResponse = await box.folders.getFolderDetails({
  folderId: "folderId_example",
  sort: "id",
  direction: "ASC",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.  Additionally this field can be used to query any metadata applied to the file by specifying the `metadata` field as well as the scope and key of the template to retrieve, for example `?field=metadata.enterprise_12345.contractTemplate`.

##### ifNoneMatch: `string`<a id="ifnonematch-string"></a>

Ensures an item is only returned if it has changed.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `304 Not Modified` if the item has not changed since.

##### boxapi: `string`<a id="boxapi-string"></a>

The URL, and optional password, for the shared link of this item.  This header can be used to access items that have not been explicitly shared with a user.  Use the format `shared_link=[link]` or if a password is required then use `shared_link=[link]&shared_link_password=[password]`.  This header can be used on the file or folder shared, as well as on any files or folders nested within the item.

##### sort: `'id' | 'name' | 'date' | 'size'`<a id="sort-id--name--date--size"></a>

Defines the **second** attribute by which items are sorted.  The folder type affects the way the items are sorted:    * **Standard folder**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.    * **Root folder**:   This parameter is not supported   for marker-based pagination   on the root folder    (the folder with an `id` of `0`).    * **Shared folder with parent path   to the associated folder visible to   the collaborator**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.

##### direction: `'ASC' | 'DESC'`<a id="direction-asc--desc"></a>

The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folders.listItemsInFolder`<a id="boxfolderslistitemsinfolder"></a>

Retrieves a page of items in a folder. These items can be files,
folders, and web links.

To request more information about the folder itself, like its size,
use the [Get a folder](https://raw.githubusercontent.com) endpoint instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listItemsInFolderResponse = await box.folders.listItemsInFolder({
  folderId: "folderId_example",
  offset: 0,
  sort: "id",
  direction: "ASC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.  Additionally this field can be used to query any metadata applied to the file by specifying the `metadata` field as well as the scope and key of the template to retrieve, for example `?field=metadata.enterprise_12345.contractTemplate`.

##### usemarker: `boolean`<a id="usemarker-boolean"></a>

Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time.  By setting this value to true, the API will return a `marker` field that can be passed as a parameter to this endpoint to get the next page of the response.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### boxapi: `string`<a id="boxapi-string"></a>

The URL, and optional password, for the shared link of this item.  This header can be used to access items that have not been explicitly shared with a user.  Use the format `shared_link=[link]` or if a password is required then use `shared_link=[link]&shared_link_password=[password]`.  This header can be used on the file or folder shared, as well as on any files or folders nested within the item.

##### sort: `'id' | 'name' | 'date' | 'size'`<a id="sort-id--name--date--size"></a>

Defines the **second** attribute by which items are sorted.  The folder type affects the way the items are sorted:    * **Standard folder**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.    * **Root folder**:   This parameter is not supported   for marker-based pagination   on the root folder    (the folder with an `id` of `0`).    * **Shared folder with parent path   to the associated folder visible to   the collaborator**:   Items are always sorted by   their `type` first, with   folders listed before files,   and files listed   before web links.

##### direction: `'ASC' | 'DESC'`<a id="direction-asc--desc"></a>

The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.

#### 🔄 Return<a id="🔄-return"></a>

[Items](./models/items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.folders.updateFolder`<a id="boxfoldersupdatefolder"></a>

Updates a folder. This can be also be used to move the folder,
create shared links, update collaborations, and more.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFolderResponse = await box.folders.updateFolder({
  folderId: "folderId_example",
  tags: ["approved"],
  description: "Legal contracts for the new ACME deal",
  name: "New Folder",
  sync_state: "synced",
  can_non_owners_invite: true,
  is_collaboration_restricted_to_enterprise: true,
  can_non_owners_view_collaborators: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### tags: `string`[]<a id="tags-string"></a>

The tags for this item. These tags are shown in the Box web app and mobile apps next to an item.  To add or remove a tag, retrieve the item\\\'s current tags, modify them, and then update this field.  There is a limit of 100 tags per item, and 10,000 unique tags per enterprise.

##### description: `string`<a id="description-string"></a>

The optional description of this folder

##### name: `string`<a id="name-string"></a>

The optional new name for this folder.

##### sync_state: `string`<a id="sync_state-string"></a>

Specifies whether a folder should be synced to a user\\\'s device or not. This is used by Box Sync (discontinued) and is not used by Box Drive.

##### can_non_owners_invite: `boolean`<a id="can_non_owners_invite-boolean"></a>

Specifies if users who are not the owner of the folder can invite new collaborators to the folder.

##### parent: [`FoldersUpdateFolderRequestParent`](./models/folders-update-folder-request-parent.ts)<a id="parent-foldersupdatefolderrequestparentmodelsfolders-update-folder-request-parentts"></a>

##### shared_link: [`FoldersUpdateFolderRequestSharedLink`](./models/folders-update-folder-request-shared-link.ts)<a id="shared_link-foldersupdatefolderrequestsharedlinkmodelsfolders-update-folder-request-shared-linkts"></a>

##### folder_upload_email: [`FoldersUpdateFolderRequestFolderUploadEmail`](./models/folders-update-folder-request-folder-upload-email.ts)<a id="folder_upload_email-foldersupdatefolderrequestfolderuploademailmodelsfolders-update-folder-request-folder-upload-emailts"></a>

##### is_collaboration_restricted_to_enterprise: `boolean`<a id="is_collaboration_restricted_to_enterprise-boolean"></a>

Specifies if new invites to this folder are restricted to users within the enterprise. This does not affect existing collaborations.

##### collections: [`Reference2`](./models/reference2.ts)[]<a id="collections-reference2modelsreference2ts"></a>

An array of collections to make this folder a member of. Currently we only support the `favorites` collection.  To get the ID for a collection, use the [List all collections][1] endpoint.  Passing an empty array `[]` or `null` will remove the folder from all collections.  [1]: e://get-collections

##### can_non_owners_view_collaborators: `boolean`<a id="can_non_owners_view_collaborators-boolean"></a>

Restricts collaborators who are not the owner of this folder from viewing other collaborations on this folder.  It also restricts non-owners from inviting new collaborators.  When setting this field to `false`, it is required to also set `can_non_owners_invite_collaborators` to `false` if it has not already been set.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groupMemberships.createMembership`<a id="boxgroupmembershipscreatemembership"></a>

Creates a group membership. Only users with
admin-level permissions will be able to use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMembershipResponse = await box.groupMemberships.createMembership({
  user: {
    id: "1434325",
  },
  group: {
    id: "4545523",
  },
  role: "member",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user: [`GroupMembershipsCreateMembershipRequestUser`](./models/group-memberships-create-membership-request-user.ts)<a id="user-groupmembershipscreatemembershiprequestusermodelsgroup-memberships-create-membership-request-userts"></a>

##### group: [`GroupMembershipsCreateMembershipRequestGroup`](./models/group-memberships-create-membership-request-group.ts)<a id="group-groupmembershipscreatemembershiprequestgroupmodelsgroup-memberships-create-membership-request-groupts"></a>

##### role: `string`<a id="role-string"></a>

The role of the user in the group.

##### configurable_permissions: Record<string, `boolean`><a id="configurable_permissions-record"></a>

Custom configuration for the permissions an admin if a group will receive. This option has no effect on members with a role of `member`.  Setting these permissions overwrites the default access levels of an admin.  Specifying a value of \\\"null\\\" for this object will disable all configurable permissions. Specifying permissions will set them accordingly, omitted permissions will be enabled by default.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[GroupMembership](./models/group-membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/group_memberships` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groupMemberships.getAll`<a id="boxgroupmembershipsgetall"></a>

Retrieves all the groups for a user. Only members of this
group or users with admin-level permissions will be able to
use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await box.groupMemberships.getAll({
  userId: "userId_example",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

#### 🔄 Return<a id="🔄-return"></a>

[GroupMemberships](./models/group-memberships.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groupMemberships.getSpecificMembership`<a id="boxgroupmembershipsgetspecificmembership"></a>

Retrieves a specific group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificMembershipResponse =
  await box.groupMemberships.getSpecificMembership({
    groupMembershipId: "groupMembershipId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupMembershipId: `string`<a id="groupmembershipid-string"></a>

The ID of the group membership.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[GroupMembership](./models/group-membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/group_memberships/{group_membership_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groupMemberships.listMembersOfGroup`<a id="boxgroupmembershipslistmembersofgroup"></a>

Retrieves all the members for a group. Only members of this
group or users with admin-level permissions will be able to
use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembersOfGroupResponse =
  await box.groupMemberships.listMembersOfGroup({
    groupId: "groupId_example",
    offset: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the group.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

#### 🔄 Return<a id="🔄-return"></a>

[GroupMemberships](./models/group-memberships.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groupMemberships.removeUserFromGroup`<a id="boxgroupmembershipsremoveuserfromgroup"></a>

Deletes a specific group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUserFromGroupResponse =
  await box.groupMemberships.removeUserFromGroup({
    groupMembershipId: "groupMembershipId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupMembershipId: `string`<a id="groupmembershipid-string"></a>

The ID of the group membership.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/group_memberships/{group_membership_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groupMemberships.updateMembership`<a id="boxgroupmembershipsupdatemembership"></a>

Updates a user's group membership. Only admins of this
group or users with admin-level permissions will be able to
use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipResponse = await box.groupMemberships.updateMembership({
  groupMembershipId: "groupMembershipId_example",
  role: "member",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupMembershipId: `string`<a id="groupmembershipid-string"></a>

The ID of the group membership.

##### role: `string`<a id="role-string"></a>

The role of the user in the group.

##### configurable_permissions: Record<string, `boolean`><a id="configurable_permissions-record"></a>

Custom configuration for the permissions an admin if a group will receive. This option has no effect on members with a role of `member`.  Setting these permissions overwrites the default access levels of an admin.  Specifying a value of \\\"null\\\" for this object will disable all configurable permissions. Specifying permissions will set them accordingly, omitted permissions will be enabled by default.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[GroupMembership](./models/group-membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/group_memberships/{group_membership_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groups.getInfo`<a id="boxgroupsgetinfo"></a>

Retrieves information about a group. Only members of this
group or users with admin-level permissions will be able to
use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await box.groups.getInfo({
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the group.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[GroupFull](./models/group-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groups.groups`<a id="boxgroupsgroups"></a>

Retrieves all of the groups for a given enterprise. The user
must have admin permissions to inspect enterprise's groups.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const groupsResponse = await box.groups.groups({
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filterTerm: `string`<a id="filterterm-string"></a>

Limits the results to only groups whose `name` starts with the search term.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

#### 🔄 Return<a id="🔄-return"></a>

[Groups](./models/groups.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groups.groups_0`<a id="boxgroupsgroups_0"></a>

Creates a new group of users in an enterprise. Only users with admin
permissions can create new groups.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const groups_0Response = await box.groups.groups_0({
  description: '"Customer Support Group - as imported from Active Directory"',
  name: "Customer Support",
  provenance: "Active Directory",
  external_sync_identifier: "AD:123456",
  invitability_level: "admins_only",
  member_viewability_level: "admins_only",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the new group to be created. This name must be unique within the enterprise.

##### description: `string`<a id="description-string"></a>

A human readable description of the group.

##### provenance: `string`<a id="provenance-string"></a>

Keeps track of which external source this group is coming, for example `Active Directory`, or `Okta`.  Setting this will also prevent Box admins from editing the group name and its members directly via the Box web application.  This is desirable for one-way syncing of groups.

##### external_sync_identifier: `string`<a id="external_sync_identifier-string"></a>

An arbitrary identifier that can be used by external group sync tools to link this Box Group to an external group.  Example values of this field could be an **Active Directory Object ID** or a **Google Group ID**.  We recommend you use of this field in order to avoid issues when group names are updated in either Box or external systems.

##### invitability_level: `string`<a id="invitability_level-string"></a>

Specifies who can invite the group to collaborate on folders.  When set to `admins_only` the enterprise admin, co-admins, and the group\\\'s admin can invite the group.  When set to `admins_and_members` all the admins listed above and group members can invite the group.  When set to `all_managed_users` all managed users in the enterprise can invite the group.

##### member_viewability_level: `string`<a id="member_viewability_level-string"></a>

Specifies who can see the members of the group.  * `admins_only` - the enterprise admin, co-admins, group\\\'s   group admin * `admins_and_members` - all admins and group members * `all_managed_users` - all managed users in the   enterprise

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[GroupFull](./models/group-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groups.remove`<a id="boxgroupsremove"></a>

Permanently deletes a group. Only users with
admin-level permissions will be able to use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await box.groups.remove({
  groupId: "groupId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the group.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.groups.updateGroup`<a id="boxgroupsupdategroup"></a>

Updates a specific group. Only admins of this
group or users with admin-level permissions will be able to
use this API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateGroupResponse = await box.groups.updateGroup({
  groupId: "groupId_example",
  description: '"Customer Support Group - as imported from Active Directory"',
  name: "Customer Support",
  provenance: "Active Directory",
  external_sync_identifier: "AD:123456",
  invitability_level: "admins_only",
  member_viewability_level: "admins_only",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### groupId: `string`<a id="groupid-string"></a>

The ID of the group.

##### description: `string`<a id="description-string"></a>

A human readable description of the group.

##### name: `string`<a id="name-string"></a>

The name of the new group to be created. Must be unique within the enterprise.

##### provenance: `string`<a id="provenance-string"></a>

Keeps track of which external source this group is coming, for example `Active Directory`, or `Okta`.  Setting this will also prevent Box admins from editing the group name and its members directly via the Box web application.  This is desirable for one-way syncing of groups.

##### external_sync_identifier: `string`<a id="external_sync_identifier-string"></a>

An arbitrary identifier that can be used by external group sync tools to link this Box Group to an external group.  Example values of this field could be an **Active Directory Object ID** or a **Google Group ID**.  We recommend you use of this field in order to avoid issues when group names are updated in either Box or external systems.

##### invitability_level: `string`<a id="invitability_level-string"></a>

Specifies who can invite the group to collaborate on folders.  When set to `admins_only` the enterprise admin, co-admins, and the group\\\'s admin can invite the group.  When set to `admins_and_members` all the admins listed above and group members can invite the group.  When set to `all_managed_users` all managed users in the enterprise can invite the group.

##### member_viewability_level: `string`<a id="member_viewability_level-string"></a>

Specifies who can see the members of the group.  * `admins_only` - the enterprise admin, co-admins, group\\\'s   group admin * `admins_and_members` - all admins and group members * `all_managed_users` - all managed users in the   enterprise

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[GroupFull](./models/group-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/{group_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.integrationMappings.createSlackMapping`<a id="boxintegrationmappingscreateslackmapping"></a>

Creates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack)
by mapping a Slack channel to a Box item.

You need Admin or Co-Admin role to
use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSlackMappingResponse =
  await box.integrationMappings.createSlackMapping({
    partner_item: {
      type: "channel",
      id: "C12378991223",
      slack_workspace_id: "T12352314",
      slack_org_id: "E1234567",
    },
    box_item: {
      type: "folder",
      id: "1234567891",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partner_item: [`IntegrationMappingPartnerItemSlack`](./models/integration-mapping-partner-item-slack.ts)<a id="partner_item-integrationmappingpartneritemslackmodelsintegration-mapping-partner-item-slackts"></a>

##### box_item: [`IntegrationMappingBoxItemSlack`](./models/integration-mapping-box-item-slack.ts)<a id="box_item-integrationmappingboxitemslackmodelsintegration-mapping-box-item-slackts"></a>

##### options: [`IntegrationMappingSlackOptions`](./models/integration-mapping-slack-options.ts)<a id="options-integrationmappingslackoptionsmodelsintegration-mapping-slack-optionsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationMapping](./models/integration-mapping.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integration_mappings/slack` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.integrationMappings.deleteSlackMapping`<a id="boxintegrationmappingsdeleteslackmapping"></a>

Deletes a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).


You need Admin or Co-Admin role to
use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSlackMappingResponse =
  await box.integrationMappings.deleteSlackMapping({
    integrationMappingId: "integrationMappingId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### integrationMappingId: `string`<a id="integrationmappingid-string"></a>

An ID of an integration mapping

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integration_mappings/slack/{integration_mapping_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.integrationMappings.listSlackMappings`<a id="boxintegrationmappingslistslackmappings"></a>

Lists [Slack integration mappings](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack) in a users' enterprise.

You need Admin or Co-Admin role to
use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSlackMappingsResponse =
  await box.integrationMappings.listSlackMappings({
    partnerItemType: "channel",
    boxItemType: "folder",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### partnerItemType: `'channel'`<a id="partneritemtype-channel"></a>

Mapped item type, for which the mapping should be returned

##### partnerItemId: `string`<a id="partneritemid-string"></a>

ID of the mapped item, for which the mapping should be returned

##### boxItemId: `string`<a id="boxitemid-string"></a>

Box item ID, for which the mappings should be returned

##### boxItemType: `'folder'`<a id="boxitemtype-folder"></a>

Box item type, for which the mappings should be returned

##### isManuallyCreated: `boolean`<a id="ismanuallycreated-boolean"></a>

Whether the mapping has been manually created

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationMappings](./models/integration-mappings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integration_mappings/slack` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.integrationMappings.updateSlackMapping`<a id="boxintegrationmappingsupdateslackmapping"></a>

Updates a [Slack integration mapping](https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack).
Supports updating the Box folder ID and options.

You need Admin or Co-Admin role to
use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSlackMappingResponse =
  await box.integrationMappings.updateSlackMapping({
    integrationMappingId: "integrationMappingId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### integrationMappingId: `string`<a id="integrationmappingid-string"></a>

An ID of an integration mapping

##### box_item: [`IntegrationMappingBoxItemSlack`](./models/integration-mapping-box-item-slack.ts)<a id="box_item-integrationmappingboxitemslackmodelsintegration-mapping-box-item-slackts"></a>

##### options: [`IntegrationMappingSlackOptions`](./models/integration-mapping-slack-options.ts)<a id="options-integrationmappingslackoptionsmodelsintegration-mapping-slack-optionsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IntegrationMapping](./models/integration-mapping.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integration_mappings/slack/{integration_mapping_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.invites.getUserInviteStatus`<a id="boxinvitesgetuserinvitestatus"></a>

Returns the status of a user invite.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInviteStatusResponse = await box.invites.getUserInviteStatus({
  inviteId: "inviteId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### inviteId: `string`<a id="inviteid-string"></a>

The ID of an invite.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[Invite](./models/invite.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invites/{invite_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.invites.invites`<a id="boxinvitesinvites"></a>

Invites an existing external user to join an enterprise.

The existing user can not be part of another enterprise and
must already have a Box account. Once invited, the user will receive an
email and are prompted to accept the invitation within the
Box web application.

This method requires the "Manage An Enterprise" scope enabled for
the application, which can be enabled within the developer console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invitesResponse = await box.invites.invites({
  enterprise: {
    id: "1232234",
  },
  actionable_by: {
    login: "john@example.com",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### enterprise: [`PostInvitesRequestEnterprise`](./models/post-invites-request-enterprise.ts)<a id="enterprise-postinvitesrequestenterprisemodelspost-invites-request-enterprisets"></a>

##### actionable_by: [`PostInvitesRequestActionableBy`](./models/post-invites-request-actionable-by.ts)<a id="actionable_by-postinvitesrequestactionablebymodelspost-invites-request-actionable-byts"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[Invite](./models/invite.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/invites` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicies.createNewPolicy`<a id="boxlegalholdpoliciescreatenewpolicy"></a>

Create a new legal hold policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewPolicyResponse = await box.legalHoldPolicies.createNewPolicy({
  description: "A custom policy for the sales team",
  policy_name: "Sales Policy",
  filter_started_at: "2012-12-12T10:53:43-08:00",
  filter_ended_at: "2012-12-18T10:53:43-08:00",
  is_ongoing: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policy_name: `string`<a id="policy_name-string"></a>

The name of the policy.

##### description: `string`<a id="description-string"></a>

A description for the policy.

##### filter_started_at: `string`<a id="filter_started_at-string"></a>

The filter start date.  When this policy is applied using a `custodian` legal hold assignments, it will only apply to file versions created or uploaded inside of the date range. Other assignment types, such as folders and files, will ignore the date filter.  Required if `is_ongoing` is set to `false`.

##### filter_ended_at: `string`<a id="filter_ended_at-string"></a>

The filter end date.  When this policy is applied using a `custodian` legal hold assignments, it will only apply to file versions created or uploaded inside of the date range. Other assignment types, such as folders and files, will ignore the date filter.  Required if `is_ongoing` is set to `false`.

##### is_ongoing: `boolean`<a id="is_ongoing-boolean"></a>

Whether new assignments under this policy should continue applying to files even after initialization.  When this policy is applied using a legal hold assignment, it will continue applying the policy to any new file versions even after it has been applied.  For example, if a legal hold assignment is placed on a user today, and that user uploads a file tomorrow, that file will get held. This will continue until the policy is retired.  Required if no filter dates are set.

#### 🔄 Return<a id="🔄-return"></a>

[LegalHoldPolicy](./models/legal-hold-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policies` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicies.getPolicy`<a id="boxlegalholdpoliciesgetpolicy"></a>

Retrieve a legal hold policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPolicyResponse = await box.legalHoldPolicies.getPolicy({
  legalHoldPolicyId: "legalHoldPolicyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### legalHoldPolicyId: `string`<a id="legalholdpolicyid-string"></a>

The ID of the legal hold policy

#### 🔄 Return<a id="🔄-return"></a>

[LegalHoldPolicy](./models/legal-hold-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policies/{legal_hold_policy_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicies.listAll`<a id="boxlegalholdpolicieslistall"></a>

Retrieves a list of legal hold policies that belong to
an enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await box.legalHoldPolicies.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyName: `string`<a id="policyname-string"></a>

Limits results to policies for which the names start with this search term. This is a case-insensitive prefix.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[LegalHoldPolicies](./models/legal-hold-policies.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicies.removePolicy`<a id="boxlegalholdpoliciesremovepolicy"></a>

Delete an existing legal hold policy.

This is an asynchronous process. The policy will not be
fully deleted yet when the response returns.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePolicyResponse = await box.legalHoldPolicies.removePolicy({
  legalHoldPolicyId: "legalHoldPolicyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### legalHoldPolicyId: `string`<a id="legalholdpolicyid-string"></a>

The ID of the legal hold policy

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policies/{legal_hold_policy_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicies.updatePolicy`<a id="boxlegalholdpoliciesupdatepolicy"></a>

Update legal hold policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePolicyResponse = await box.legalHoldPolicies.updatePolicy({
  legalHoldPolicyId: "legalHoldPolicyId_example",
  description: "A custom policy for the sales team",
  policy_name: "Sales Policy",
  release_notes: "Required for GDPR",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### legalHoldPolicyId: `string`<a id="legalholdpolicyid-string"></a>

The ID of the legal hold policy

##### description: `string`<a id="description-string"></a>

A description for the policy.

##### policy_name: `string`<a id="policy_name-string"></a>

The name of the policy.

##### release_notes: `string`<a id="release_notes-string"></a>

Notes around why the policy was released.

#### 🔄 Return<a id="🔄-return"></a>

[LegalHoldPolicy](./models/legal-hold-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policies/{legal_hold_policy_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicyAssignments.assignFileLegalHold`<a id="boxlegalholdpolicyassignmentsassignfilelegalhold"></a>

Assign a legal hold to a file, file version, folder, or user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignFileLegalHoldResponse =
  await box.legalHoldPolicyAssignments.assignFileLegalHold({
    policy_id: "123244",
    assign_to: {
      type: "folder",
      id: "6564564",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policy_id: `string`<a id="policy_id-string"></a>

The ID of the policy to assign.

##### assign_to: [`LegalHoldPolicyAssignmentsAssignFileLegalHoldRequestAssignTo`](./models/legal-hold-policy-assignments-assign-file-legal-hold-request-assign-to.ts)<a id="assign_to-legalholdpolicyassignmentsassignfilelegalholdrequestassigntomodelslegal-hold-policy-assignments-assign-file-legal-hold-request-assign-tots"></a>

#### 🔄 Return<a id="🔄-return"></a>

[LegalHoldPolicyAssignment](./models/legal-hold-policy-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policy_assignments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicyAssignments.getAssignment`<a id="boxlegalholdpolicyassignmentsgetassignment"></a>

Retrieve a legal hold policy assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssignmentResponse =
  await box.legalHoldPolicyAssignments.getAssignment({
    legalHoldPolicyAssignmentId: "legalHoldPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### legalHoldPolicyAssignmentId: `string`<a id="legalholdpolicyassignmentid-string"></a>

The ID of the legal hold policy assignment

#### 🔄 Return<a id="🔄-return"></a>

[LegalHoldPolicyAssignment](./models/legal-hold-policy-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicyAssignments.getListItems`<a id="boxlegalholdpolicyassignmentsgetlistitems"></a>

Retrieves a list of items a legal hold policy has been assigned to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListItemsResponse = await box.legalHoldPolicyAssignments.getListItems({
  policyId: "policyId_example",
  assignToType: "file",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyId: `string`<a id="policyid-string"></a>

The ID of the legal hold policy

##### assignToType: `'file' | 'file_version' | 'folder' | 'user'`<a id="assigntotype-file--file_version--folder--user"></a>

Filters the results by the type of item the policy was applied to.

##### assignToId: `string`<a id="assigntoid-string"></a>

Filters the results by the ID of item the policy was applied to.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[LegalHoldPolicyAssignments](./models/legal-hold-policy-assignments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policy_assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicyAssignments.listFileVersions`<a id="boxlegalholdpolicyassignmentslistfileversions"></a>

Get a list of current file versions for a legal hold
assignment.

In some cases you may want to get previous file versions instead. In these
cases, use the `GET  /legal_hold_policy_assignments/:id/file_versions_on_hold`
API instead to return any previous versions of a file for this legal hold
policy assignment.

Due to ongoing re-architecture efforts this API might not return all file
versions held for this policy ID. Instead, this API will only return the
latest file version held in the newly developed architecture. The `GET
/file_version_legal_holds` API can be used to fetch current and past versions
of files held within the legacy architecture.

The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
find a list of policy assignments for a given policy ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFileVersionsResponse =
  await box.legalHoldPolicyAssignments.listFileVersions({
    legalHoldPolicyAssignmentId: "legalHoldPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### legalHoldPolicyAssignmentId: `string`<a id="legalholdpolicyassignmentid-string"></a>

The ID of the legal hold policy assignment

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionLegalHolds](./models/file-version-legal-holds.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/files_on_hold` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicyAssignments.listPreviousFileVersions`<a id="boxlegalholdpolicyassignmentslistpreviousfileversions"></a>

Get a list of previous file versions for a legal hold
assignment.

In some cases you may only need the latest file versions instead. In these
cases, use the `GET  /legal_hold_policy_assignments/:id/files_on_hold` API
instead to return any current (latest) versions of a file for this legal hold
policy assignment.

Due to ongoing re-architecture efforts this API might not return all files
held for this policy ID. Instead, this API will only return past file versions
held in the newly developed architecture. The `GET /file_version_legal_holds`
API can be used to fetch current and past versions of files held within the
legacy architecture.

The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
find a list of policy assignments for a given policy ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPreviousFileVersionsResponse =
  await box.legalHoldPolicyAssignments.listPreviousFileVersions({
    legalHoldPolicyAssignmentId: "legalHoldPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### legalHoldPolicyAssignmentId: `string`<a id="legalholdpolicyassignmentid-string"></a>

The ID of the legal hold policy assignment

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FileVersionLegalHolds](./models/file-version-legal-holds.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/file_versions_on_hold` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.legalHoldPolicyAssignments.unassignPolicy`<a id="boxlegalholdpolicyassignmentsunassignpolicy"></a>

Remove a legal hold from an item.

This is an asynchronous process. The policy will not be
fully removed yet when the response returns.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unassignPolicyResponse =
  await box.legalHoldPolicyAssignments.unassignPolicy({
    legalHoldPolicyAssignmentId: "legalHoldPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### legalHoldPolicyAssignmentId: `string`<a id="legalholdpolicyassignmentid-string"></a>

The ID of the legal hold policy assignment

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataCascadePolicies.applyToChildren`<a id="boxmetadatacascadepoliciesapplytochildren"></a>

Force the metadata on a folder with a metadata cascade policy to be applied to
all of its children. This can be used after creating a new cascade policy to
enforce the metadata to be cascaded down to all existing files within that
folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const applyToChildrenResponse =
  await box.metadataCascadePolicies.applyToChildren({
    metadataCascadePolicyId: "metadataCascadePolicyId_example",
    conflict_resolution: "none",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conflict_resolution: `string`<a id="conflict_resolution-string"></a>

Describes the desired behavior when dealing with the conflict where a metadata template already has an instance applied to a child.  * `none` will preserve the existing value on the file * `overwrite` will force-apply the templates values over   any existing values.

##### metadataCascadePolicyId: `string`<a id="metadatacascadepolicyid-string"></a>

The ID of the cascade policy to force-apply.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_cascade_policies/{metadata_cascade_policy_id}/apply` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataCascadePolicies.createPolicy`<a id="boxmetadatacascadepoliciescreatepolicy"></a>

Creates a new metadata cascade policy that applies a given
metadata template to a given folder and automatically
cascades it down to any files within that folder.

In order for the policy to be applied a metadata instance must first
be applied to the folder the policy is to be applied to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPolicyResponse = await box.metadataCascadePolicies.createPolicy({
  folder_id: "1234567",
  scope: "enterprise",
  templateKey: "productInfo",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folder_id: `string`<a id="folder_id-string"></a>

The ID of the folder to apply the policy to. This folder will need to already have an instance of the targeted metadata template applied to it.

##### scope: `string`<a id="scope-string"></a>

The scope of the targeted metadata template. This template will need to already have an instance applied to the targeted folder.

##### templateKey: `string`<a id="templatekey-string"></a>

The key of the targeted metadata template. This template will need to already have an instance applied to the targeted folder.  In many cases the template key is automatically derived of its display name, for example `Contract Template` would become `contractTemplate`. In some cases the creator of the template will have provided its own template key.  Please [list the templates for an enterprise][list], or get all instances on a [file][file] or [folder][folder] to inspect a template\\\'s key.  [list]: e://get-metadata-templates-enterprise [file]: e://get-files-id-metadata [folder]: e://get-folders-id-metadata

#### 🔄 Return<a id="🔄-return"></a>

[MetadataCascadePolicy](./models/metadata-cascade-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_cascade_policies` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataCascadePolicies.getPolicyAssignedToFolder`<a id="boxmetadatacascadepoliciesgetpolicyassignedtofolder"></a>

Retrieve a specific metadata cascade policy assigned to a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPolicyAssignedToFolderResponse =
  await box.metadataCascadePolicies.getPolicyAssignedToFolder({
    metadataCascadePolicyId: "metadataCascadePolicyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### metadataCascadePolicyId: `string`<a id="metadatacascadepolicyid-string"></a>

The ID of the metadata cascade policy.

#### 🔄 Return<a id="🔄-return"></a>

[MetadataCascadePolicy](./models/metadata-cascade-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_cascade_policies/{metadata_cascade_policy_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataCascadePolicies.list`<a id="boxmetadatacascadepolicieslist"></a>

Retrieves a list of all the metadata cascade policies
that are applied to a given folder. This can not be used on the root
folder with ID `0`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await box.metadataCascadePolicies.list({
  folderId: "folderId_example",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

Specifies which folder to return policies for. This can not be used on the root folder with ID `0`.

##### ownerEnterpriseId: `string`<a id="ownerenterpriseid-string"></a>

The ID of the enterprise ID for which to find metadata cascade policies. If not specified, it defaults to the current enterprise.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

#### 🔄 Return<a id="🔄-return"></a>

[MetadataCascadePolicies](./models/metadata-cascade-policies.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_cascade_policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataCascadePolicies.removePolicy`<a id="boxmetadatacascadepoliciesremovepolicy"></a>

Deletes a metadata cascade policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePolicyResponse = await box.metadataCascadePolicies.removePolicy({
  metadataCascadePolicyId: "metadataCascadePolicyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### metadataCascadePolicyId: `string`<a id="metadatacascadepolicyid-string"></a>

The ID of the metadata cascade policy.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_cascade_policies/{metadata_cascade_policy_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFiles.applyTemplate`<a id="boxmetadatainstancesfilesapplytemplate"></a>

Applies an instance of a metadata template to a file.

In most cases only values that are present in the metadata template
will be accepted, except for the `global.properties` template which accepts
any key-value pair.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const applyTemplateResponse = await box.metadataInstancesFiles.applyTemplate({
  fileId: "fileId_example",
  scope: "global",
  templateKey: "templateKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🔄 Return<a id="🔄-return"></a>

[MetadataFull](./models/metadata-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/{scope}/{template_key}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFiles.getInstance`<a id="boxmetadatainstancesfilesgetinstance"></a>

Retrieves the instance of a metadata template that has been applied to a
file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstanceResponse = await box.metadataInstancesFiles.getInstance({
  fileId: "fileId_example",
  scope: "global",
  templateKey: "templateKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🔄 Return<a id="🔄-return"></a>

[MetadataFull](./models/metadata-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/{scope}/{template_key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFiles.listFileMetadata`<a id="boxmetadatainstancesfileslistfilemetadata"></a>

Retrieves all metadata for a given file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFileMetadataResponse =
  await box.metadataInstancesFiles.listFileMetadata({
    fileId: "fileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[Metadatas](./models/metadatas.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFiles.removeInstance`<a id="boxmetadatainstancesfilesremoveinstance"></a>

Deletes a piece of file metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeInstanceResponse = await box.metadataInstancesFiles.removeInstance({
  fileId: "fileId_example",
  scope: "global",
  templateKey: "templateKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/{scope}/{template_key}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFiles.updateInstanceOnFile`<a id="boxmetadatainstancesfilesupdateinstanceonfile"></a>

Updates a piece of metadata on a file.

The metadata instance can only be updated if the template has already been
applied to the file before. When editing metadata, only values that match
the metadata template schema will be accepted.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata instance will not be changed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInstanceOnFileResponse =
  await box.metadataInstancesFiles.updateInstanceOnFile({
    fileId: "12345",
    scope: "global",
    templateKey: "properties",
    requestBody: [
      {
        op: "add",
        path: "/currentState",
        value: "reviewed",
        from: "/nextState",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

##### requestBody: [`AMetadataInstanceUpdateOperation`](./models/ametadata-instance-update-operation.ts)[]<a id="requestbody-ametadatainstanceupdateoperationmodelsametadata-instance-update-operationts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MetadataFull](./models/metadata-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/{scope}/{template_key}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFolders.applyTemplate`<a id="boxmetadatainstancesfoldersapplytemplate"></a>

Applies an instance of a metadata template to a folder.

In most cases only values that are present in the metadata template
will be accepted, except for the `global.properties` template which accepts
any key-value pair.

To display the metadata template in the Box web app the enterprise needs to be
configured to enable **Cascading Folder Level Metadata** for the user in the
admin console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const applyTemplateResponse = await box.metadataInstancesFolders.applyTemplate({
  folderId: "folderId_example",
  scope: "global",
  templateKey: "templateKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🔄 Return<a id="🔄-return"></a>

[MetadataFull](./models/metadata-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/{scope}/{template_key}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFolders.getFolderMetadataInstance`<a id="boxmetadatainstancesfoldersgetfoldermetadatainstance"></a>

Retrieves the instance of a metadata template that has been applied to a
folder. This can not be used on the root folder with ID `0`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderMetadataInstanceResponse =
  await box.metadataInstancesFolders.getFolderMetadataInstance({
    folderId: "folderId_example",
    scope: "global",
    templateKey: "templateKey_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🔄 Return<a id="🔄-return"></a>

[MetadataFull](./models/metadata-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/{scope}/{template_key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFolders.listOnFolder`<a id="boxmetadatainstancesfolderslistonfolder"></a>

Retrieves all metadata for a given folder. This can not be used on the root
folder with ID `0`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOnFolderResponse = await box.metadataInstancesFolders.listOnFolder({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🔄 Return<a id="🔄-return"></a>

[Metadatas](./models/metadatas.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFolders.removeInstance`<a id="boxmetadatainstancesfoldersremoveinstance"></a>

Deletes a piece of folder metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeInstanceResponse =
  await box.metadataInstancesFolders.removeInstance({
    folderId: "folderId_example",
    scope: "global",
    templateKey: "templateKey_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/{scope}/{template_key}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataInstancesFolders.updateInstanceOnFolder`<a id="boxmetadatainstancesfoldersupdateinstanceonfolder"></a>

Updates a piece of metadata on a folder.

The metadata instance can only be updated if the template has already been
applied to the folder before. When editing metadata, only values that match
the metadata template schema will be accepted.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata instance will not be changed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInstanceOnFolderResponse =
  await box.metadataInstancesFolders.updateInstanceOnFolder({
    folderId: "12345",
    scope: "global",
    templateKey: "properties",
    requestBody: [
      {
        op: "add",
        path: "/currentState",
        value: "reviewed",
        from: "/nextState",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

##### requestBody: [`AMetadataInstanceUpdateOperation1`](./models/ametadata-instance-update-operation1.ts)[]<a id="requestbody-ametadatainstanceupdateoperation1modelsametadata-instance-update-operation1ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MetadataFull](./models/metadata-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/metadata/{scope}/{template_key}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.createNewTemplate`<a id="boxmetadatatemplatescreatenewtemplate"></a>

Creates a new metadata template that can be applied to
files and folders.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTemplateResponse = await box.metadataTemplates.createNewTemplate(
  {
    scope: "enterprise",
    templateKey: "productInfo",
    displayName: "Product Info",
    hidden: true,
    copyInstanceOnItemCopy: true,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `string`<a id="scope-string"></a>

The scope of the metadata template to create. Applications can only create templates for use within the authenticated user\\\'s enterprise.  This value needs to be set to `enterprise`, as `global` scopes can not be created by applications.

##### displayName: `string`<a id="displayname-string"></a>

The display name of the template.

##### templateKey: `string`<a id="templatekey-string"></a>

A unique identifier for the template. This identifier needs to be unique across the enterprise for which the metadata template is being created.  When not provided, the API will create a unique `templateKey` based on the value of the `displayName`.

##### hidden: `boolean`<a id="hidden-boolean"></a>

Defines if this template is visible in the Box web app UI, or if it is purely intended for usage through the API.

##### fields: [`MetadataFieldWrite`](./models/metadata-field-write.ts)[]<a id="fields-metadatafieldwritemodelsmetadata-field-writets"></a>

An ordered list of template fields which are part of the template. Each field can be a regular text field, date field, number field, as well as a single or multi-select list.

##### copyInstanceOnItemCopy: `boolean`<a id="copyinstanceonitemcopy-boolean"></a>

Whether or not to copy any metadata attached to a file or folder when it is copied. By default, metadata is not copied along with a file or folder when it is copied.

#### 🔄 Return<a id="🔄-return"></a>

[MetadataTemplate](./models/metadata-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/schema` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.deleteSchema`<a id="boxmetadatatemplatesdeleteschema"></a>

Delete a metadata template and its instances.
This deletion is permanent and can not be reversed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSchemaResponse = await box.metadataTemplates.deleteSchema({
  scope: "global",
  templateKey: "templateKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/{scope}/{template_key}/schema` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.findByInstanceId`<a id="boxmetadatatemplatesfindbyinstanceid"></a>

Finds a metadata template by searching for the ID of an instance of the
template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByInstanceIdResponse = await box.metadataTemplates.findByInstanceId({
  metadataInstanceId: "metadataInstanceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### metadataInstanceId: `string`<a id="metadatainstanceid-string"></a>

The ID of an instance of the metadata template to find.

#### 🔄 Return<a id="🔄-return"></a>

[MetadataTemplates](./models/metadata-templates.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.getById`<a id="boxmetadatatemplatesgetbyid"></a>

Retrieves a metadata template by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await box.metadataTemplates.getById({
  templateId: "templateId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The ID of the template

#### 🔄 Return<a id="🔄-return"></a>

[MetadataTemplate](./models/metadata-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/{template_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.getByNameSchema`<a id="boxmetadatatemplatesgetbynameschema"></a>

Retrieves a metadata template by its `scope` and `templateKey` values.

To find the `scope` and `templateKey` for a template, list all templates for
an enterprise or globally, or list all templates applied to a file or folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByNameSchemaResponse = await box.metadataTemplates.getByNameSchema({
  scope: "global",
  templateKey: "templateKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

#### 🔄 Return<a id="🔄-return"></a>

[MetadataTemplate](./models/metadata-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/{scope}/{template_key}/schema` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.listForEnterprise`<a id="boxmetadatatemplateslistforenterprise"></a>

Used to retrieve all metadata templates created to be used specifically within
the user's enterprise

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForEnterpriseResponse = await box.metadataTemplates.listForEnterprise(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[MetadataTemplates](./models/metadata-templates.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/enterprise` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.listGlobal`<a id="boxmetadatatemplateslistglobal"></a>

Used to retrieve all generic, global metadata templates available to all
enterprises using Box.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listGlobalResponse = await box.metadataTemplates.listGlobal({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[MetadataTemplates](./models/metadata-templates.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/global` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.metadataTemplates.updateSchema`<a id="boxmetadatatemplatesupdateschema"></a>

Updates a metadata template.

The metadata template can only be updated if the template
already exists.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata template will not be changed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSchemaResponse = await box.metadataTemplates.updateSchema({
  scope: "global",
  templateKey: "properties",
  requestBody: [
    {
      op: "addEnumOption",
      fieldKey: "category",
      fieldKeys: ["category", "name"],
      enumOptionKey: "option1",
      enumOptionKeys: ["option1", "option2", "option3"],
      multiSelectOptionKey: "option1",
      multiSelectOptionKeys: ["option1", "option2", "option3"],
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### scope: `'global' | 'enterprise'`<a id="scope-global--enterprise"></a>

The scope of the metadata template

##### templateKey: `string`<a id="templatekey-string"></a>

The name of the metadata template

##### requestBody: [`AMetadataTemplateUpdateOperation`](./models/ametadata-template-update-operation.ts)[]<a id="requestbody-ametadatatemplateupdateoperationmodelsametadata-template-update-operationts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MetadataTemplate](./models/metadata-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_templates/{scope}/{template_key}/schema` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.recentItems.listAccessedItems`<a id="boxrecentitemslistaccesseditems"></a>

Returns information about the recent items accessed
by a user, either in the last 90 days or up to the last
1000 items accessed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAccessedItemsResponse = await box.recentItems.listAccessedItems({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

#### 🔄 Return<a id="🔄-return"></a>

[RecentItems](./models/recent-items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recent_items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicies.createPolicy`<a id="boxretentionpoliciescreatepolicy"></a>

Creates a retention policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPolicyResponse = await box.retentionPolicies.createPolicy({
  description: "Policy to retain all reports for at least one month",
  policy_name: "Some Policy Name",
  policy_type: "finite",
  disposition_action: "permanently_delete",
  retention_type: "modifiable",
  can_owner_extend_retention: true,
  are_owners_notified: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policy_name: `string`<a id="policy_name-string"></a>

The name for the retention policy

##### policy_type: `string`<a id="policy_type-string"></a>

The type of the retention policy. A retention policy type can either be `finite`, where a specific amount of time to retain the content is known upfront, or `indefinite`, where the amount of time to retain the content is still unknown.

##### disposition_action: `string`<a id="disposition_action-string"></a>

The disposition action of the retention policy. `permanently_delete` deletes the content retained by the policy permanently. `remove_retention` lifts retention policy from the content, allowing it to be deleted by users once the retention policy has expired.

##### description: `string`<a id="description-string"></a>

The additional text description of the retention policy.

##### retention_length: [`RetentionPoliciesCreatePolicyRequestRetentionLength`](./models/retention-policies-create-policy-request-retention-length.ts)<a id="retention_length-retentionpoliciescreatepolicyrequestretentionlengthmodelsretention-policies-create-policy-request-retention-lengthts"></a>

##### retention_type: `string`<a id="retention_type-string"></a>

Specifies the retention type:  * `modifiable`: You can modify the retention policy. For example, you can add or remove folders, shorten or lengthen the policy duration, or delete the assignment. Use this type if your retention policy is not related to any regulatory purposes.  * `non_modifiable`: You can modify the retention policy only in a limited way: add a folder, lengthen the duration, retire the policy, change the disposition action or notification settings. You cannot perform other actions, such as deleting the assignment or shortening the policy duration. Use this type to ensure compliance with regulatory retention policies.

##### can_owner_extend_retention: `boolean`<a id="can_owner_extend_retention-boolean"></a>

Whether the owner of a file will be allowed to extend the retention.

##### are_owners_notified: `boolean`<a id="are_owners_notified-boolean"></a>

Whether owner and co-owners of a file are notified when the policy nears expiration.

##### custom_notification_recipients: [`UserMini`](./models/user-mini.ts)[]<a id="custom_notification_recipients-userminimodelsuser-minits"></a>

A list of users notified when the retention policy duration is about to end.

#### 🔄 Return<a id="🔄-return"></a>

[RetentionPolicy](./models/retention-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policies` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicies.deletePolicy`<a id="boxretentionpoliciesdeletepolicy"></a>

Permanently deletes a retention policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePolicyResponse = await box.retentionPolicies.deletePolicy({
  retentionPolicyId: "retentionPolicyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyId: `string`<a id="retentionpolicyid-string"></a>

The ID of the retention policy.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policies/{retention_policy_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicies.getPolicy`<a id="boxretentionpoliciesgetpolicy"></a>

Retrieves a retention policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPolicyResponse = await box.retentionPolicies.getPolicy({
  retentionPolicyId: "retentionPolicyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyId: `string`<a id="retentionpolicyid-string"></a>

The ID of the retention policy.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[RetentionPolicy](./models/retention-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policies/{retention_policy_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicies.listAll`<a id="boxretentionpolicieslistall"></a>

Retrieves all of the retention policies for an enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await box.retentionPolicies.listAll({
  policyType: "finite",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policyName: `string`<a id="policyname-string"></a>

Filters results by a case sensitive prefix of the name of retention policies.

##### policyType: `'finite' | 'indefinite'`<a id="policytype-finite--indefinite"></a>

Filters results by the type of retention policy.

##### createdByUserId: `string`<a id="createdbyuserid-string"></a>

Filters results by the ID of the user who created policy.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.

#### 🔄 Return<a id="🔄-return"></a>

[RetentionPolicies](./models/retention-policies.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicies.updatePolicy`<a id="boxretentionpoliciesupdatepolicy"></a>

Updates a retention policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePolicyResponse = await box.retentionPolicies.updatePolicy({
  retentionPolicyId: "retentionPolicyId_example",
  description: "Policy to retain all reports for at least one month",
  policy_name: "Some Policy Name",
  retention_type: "non-modifiable",
  status: "retired",
  can_owner_extend_retention: false,
  are_owners_notified: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyId: `string`<a id="retentionpolicyid-string"></a>

The ID of the retention policy.

##### description: `string`<a id="description-string"></a>

The additional text description of the retention policy.

##### policy_name: `string`<a id="policy_name-string"></a>

The name for the retention policy

##### disposition_action: [`RetentionPoliciesUpdatePolicyRequestDispositionAction`](./models/retention-policies-update-policy-request-disposition-action.ts)<a id="disposition_action-retentionpoliciesupdatepolicyrequestdispositionactionmodelsretention-policies-update-policy-request-disposition-actionts"></a>

##### retention_type: `string`<a id="retention_type-string"></a>

Specifies the retention type:  * `modifiable`: You can modify the retention policy. For example, you can add or remove folders, shorten or lengthen the policy duration, or delete the assignment. Use this type if your retention policy is not related to any regulatory purposes. * `non-modifiable`: You can modify the retention policy only in a limited way: add a folder, lengthen the duration, retire the policy, change the disposition action or notification settings. You cannot perform other actions, such as deleting the assignment or shortening the policy duration. Use this type to ensure compliance with regulatory retention policies.  When updating a retention policy, you can use `non-modifiable` type only. You can convert a `modifiable` policy to `non-modifiable`, but not the other way around.

##### retention_length: [`RetentionPoliciesCreatePolicyRequestRetentionLength`](./models/retention-policies-create-policy-request-retention-length.ts)<a id="retention_length-retentionpoliciescreatepolicyrequestretentionlengthmodelsretention-policies-create-policy-request-retention-lengthts"></a>

##### status: `string`<a id="status-string"></a>

Used to retire a retention policy.  If not retiring a policy, do not include this parameter or set it to `null`.

##### can_owner_extend_retention: `boolean`<a id="can_owner_extend_retention-boolean"></a>

Determines if the owner of items under the policy can extend the retention when the original retention duration is about to end.

##### are_owners_notified: `boolean`<a id="are_owners_notified-boolean"></a>

Determines if owners and co-owners of items under the policy are notified when the retention duration is about to end.

##### custom_notification_recipients: [`UserBase`](./models/user-base.ts)[]<a id="custom_notification_recipients-userbasemodelsuser-basets"></a>

A list of users notified when the retention duration is about to end.

#### 🔄 Return<a id="🔄-return"></a>

[RetentionPolicy](./models/retention-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policies/{retention_policy_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicyAssignments.createRetentionAssignment`<a id="boxretentionpolicyassignmentscreateretentionassignment"></a>

Assigns a retention policy to an item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRetentionAssignmentResponse =
  await box.retentionPolicyAssignments.createRetentionAssignment({
    policy_id: "173463",
    assign_to: {
      type: "metadata_template",
      id: "6564564",
    },
    start_date_field: "upload_date",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### policy_id: `string`<a id="policy_id-string"></a>

The ID of the retention policy to assign

##### assign_to: [`RetentionPolicyAssignmentsCreateRetentionAssignmentRequestAssignTo`](./models/retention-policy-assignments-create-retention-assignment-request-assign-to.ts)<a id="assign_to-retentionpolicyassignmentscreateretentionassignmentrequestassigntomodelsretention-policy-assignments-create-retention-assignment-request-assign-tots"></a>

##### filter_fields: [`RetentionPolicyAssignmentsCreateRetentionAssignmentRequestFilterFieldsInner`](./models/retention-policy-assignments-create-retention-assignment-request-filter-fields-inner.ts)[]<a id="filter_fields-retentionpolicyassignmentscreateretentionassignmentrequestfilterfieldsinnermodelsretention-policy-assignments-create-retention-assignment-request-filter-fields-innerts"></a>

If the `assign_to` type is `metadata_template`, then optionally add the `filter_fields` parameter which will require an array of objects with a field entry and a value entry. Currently only one object of `field` and `value` is supported.

##### start_date_field: `string`<a id="start_date_field-string"></a>

The date the retention policy assignment begins.  If the `assigned_to` type is `metadata_template`, this field can be a date field\\\'s metadata attribute key id.

#### 🔄 Return<a id="🔄-return"></a>

[RetentionPolicyAssignment](./models/retention-policy-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policy_assignments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicyAssignments.getAssignment`<a id="boxretentionpolicyassignmentsgetassignment"></a>

Retrieves a retention policy assignment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssignmentResponse =
  await box.retentionPolicyAssignments.getAssignment({
    retentionPolicyAssignmentId: "retentionPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyAssignmentId: `string`<a id="retentionpolicyassignmentid-string"></a>

The ID of the retention policy assignment.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[RetentionPolicyAssignment](./models/retention-policy-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policy_assignments/{retention_policy_assignment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicyAssignments.listAllAssignments`<a id="boxretentionpolicyassignmentslistallassignments"></a>

Returns a list of all retention policy assignments associated with a specified
retention policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllAssignmentsResponse =
  await box.retentionPolicyAssignments.listAllAssignments({
    retentionPolicyId: "retentionPolicyId_example",
    type: "folder",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyId: `string`<a id="retentionpolicyid-string"></a>

The ID of the retention policy.

##### type: `'folder' | 'enterprise' | 'metadata_template'`<a id="type-folder--enterprise--metadata_template"></a>

The type of the retention policy assignment to retrieve.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[RetentionPolicyAssignments](./models/retention-policy-assignments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policies/{retention_policy_id}/assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicyAssignments.listFileVersionsUnderRetention`<a id="boxretentionpolicyassignmentslistfileversionsunderretention"></a>

Returns a list of file versions under retention for a retention policy
assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFileVersionsUnderRetentionResponse =
  await box.retentionPolicyAssignments.listFileVersionsUnderRetention({
    retentionPolicyAssignmentId: "retentionPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyAssignmentId: `string`<a id="retentionpolicyassignmentid-string"></a>

The ID of the retention policy assignment.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[FilesUnderRetention](./models/files-under-retention.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policy_assignments/{retention_policy_assignment_id}/file_versions_under_retention` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicyAssignments.listFilesUnderRetention`<a id="boxretentionpolicyassignmentslistfilesunderretention"></a>

Returns a list of files under retention for a retention policy assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilesUnderRetentionResponse =
  await box.retentionPolicyAssignments.listFilesUnderRetention({
    retentionPolicyAssignmentId: "retentionPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyAssignmentId: `string`<a id="retentionpolicyassignmentid-string"></a>

The ID of the retention policy assignment.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[FilesUnderRetention](./models/files-under-retention.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policy_assignments/{retention_policy_assignment_id}/files_under_retention` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.retentionPolicyAssignments.removeAssignment`<a id="boxretentionpolicyassignmentsremoveassignment"></a>

Removes a retention policy assignment
applied to content.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAssignmentResponse =
  await box.retentionPolicyAssignments.removeAssignment({
    retentionPolicyAssignmentId: "retentionPolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### retentionPolicyAssignmentId: `string`<a id="retentionpolicyassignmentid-string"></a>

The ID of the retention policy assignment.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retention_policy_assignments/{retention_policy_assignment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.search.itemsByMetadata`<a id="boxsearchitemsbymetadata"></a>

Create a search using SQL-like syntax to return items that match specific
metadata.

By default, this endpoint returns only the most basic info about the items for
which the query matches. To get additional fields for each item, including any
of the metadata, use the `fields` attribute in the query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const itemsByMetadataResponse = await box.search.itemsByMetadata({
  from: "enterprise_123456.someTemplate",
  query: "value >= :amount",
  ancestor_folder_id: "0",
  limit: 50,
  marker:
    "AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff",
  fields: [
    "extension",
    "created_at",
    "item_status",
    "metadata.enterprise_1234.contracts",
    "metadata.enterprise_1234.regions.location",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### from: `string`<a id="from-string"></a>

Specifies the template used in the query. Must be in the form `scope.templateKey`. Not all templates can be used in this field, most notably the built-in, Box-provided classification templates can not be used in a query.

##### ancestor_folder_id: `string`<a id="ancestor_folder_id-string"></a>

The ID of the folder that you are restricting the query to. A value of zero will return results from all folders you have access to. A non-zero value will only return results found in the folder corresponding to the ID or in any of its subfolders.

##### query: `string`<a id="query-string"></a>

The query to perform. A query is a logical expression that is very similar to a SQL `SELECT` statement. Values in the search query can be turned into parameters specified in the `query_param` arguments list to prevent having to manually insert search values into the query string.  For example, a value of `:amount` would represent the `amount` value in `query_params` object.

##### query_params: Record<string, `string`><a id="query_params-record"></a>

Set of arguments corresponding to the parameters specified in the `query`. The type of each parameter used in the `query_params` must match the type of the corresponding metadata template field.

##### order_by: [`MetadataQueryOrderByInner`](./models/metadata-query-order-by-inner.ts)[]<a id="order_by-metadataqueryorderbyinnermodelsmetadata-query-order-by-innerts"></a>

A list of template fields and directions to sort the metadata query results by.  The ordering `direction` must be the same for each item in the array.

##### limit: `number`<a id="limit-number"></a>

A value between 0 and 100 that indicates the maximum number of results to return for a single request. This only specifies a maximum boundary and will not guarantee the minimum number of results returned.

##### marker: `string`<a id="marker-string"></a>

Marker to use for requesting the next page.

##### fields: `string`[]<a id="fields-string"></a>

By default, this endpoint returns only the most basic info about the items for which the query matches. This attribute can be used to specify a list of additional attributes to return for any item, including its metadata.  This attribute takes a list of item fields, metadata template identifiers, or metadata template field identifiers.  For example:  * `created_by` will add the details of the user who created the item to the response. * `metadata.<scope>.<templateKey>` will return the mini-representation of the metadata instance identified by the `scope` and `templateKey`. * `metadata.<scope>.<templateKey>.<field>` will return all the mini-representation of the metadata instance identified by the `scope` and `templateKey` plus the field specified by the `field` name. Multiple fields for the same `scope` and `templateKey` can be defined.

#### 🔄 Return<a id="🔄-return"></a>

[MetadataQueryResults](./models/metadata-query-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metadata_queries/execute_read` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.search.search`<a id="boxsearchsearch"></a>

Searches for files, folders, web links, and shared files across the
users content or across the entire enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchResponse = await box.search.search({
  scope: "user_content",
  type: "file",
  trashContent: "non_trashed_only",
  sort: "relevance",
  direction: "DESC",
  limit: 30,
  includeRecentSharedLinks: false,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

The string to search for. This query is matched against item names, descriptions, text content of files, and various other fields of the different item types.  This parameter supports a variety of operators to further refine the results returns.  * `\"\"` - by wrapping a query in double quotes only exact matches are   returned by the API. Exact searches do not return search matches   based on specific character sequences. Instead, they return   matches based on phrases, that is, word sequences. For example:   A search for `\"Blue-Box\"` may return search results including   the sequence `\"blue.box\"`, `\"Blue Box\"`, and `\"Blue-Box\"`;   any item containing the words `Blue` and `Box` consecutively, in   the order specified. * `AND` - returns items that contain both the search terms. For   example, a search for `marketing AND BoxWorks` returns items   that have both `marketing` and `BoxWorks` within its text in any order.   It does not return a result that only has `BoxWorks` in its text. * `OR` - returns items that contain either of the search terms. For   example, a search for `marketing OR BoxWorks` returns a result that   has either `marketing` or `BoxWorks` within its text. Using this   operator is not necessary as we implicitly interpret multi-word   queries as `OR` unless another supported boolean term is used. * `NOT` - returns items that do not contain the search term provided.   For example, a search for `marketing AND NOT BoxWorks` returns a result   that has only `marketing` within its text. Results containing   `BoxWorks` are omitted.  We do not support lower case (that is, `and`, `or`, and `not`) or mixed case (that is, `And`, `Or`, and `Not`) operators.  This field is required unless the `mdfilters` parameter is defined.

##### scope: `'user_content' | 'enterprise_content'`<a id="scope-user_content--enterprise_content"></a>

Limits the search results to either the files that the user has access to, or to files available to the entire enterprise.  The scope defaults to `user_content`, which limits the search results to content that is available to the currently authenticated user.  The `enterprise_content` can be requested by an admin through our support channels. Once this scope has been enabled for a user, it will allow that use to query for content across the entire enterprise and not only the content that they have access to.

##### fileExtensions: `string`[]<a id="fileextensions-string"></a>

Limits the search results to any files that match any of the provided file extensions. This list is a comma-separated list of file extensions without the dots.

##### createdAtRange: `string`[]<a id="createdatrange-string"></a>

Limits the search results to any items created within a given date range.  Date ranges are defined as comma separated RFC3339 timestamps.  If the the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything created before the end date will be returned.  If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will be used as the end date instead.

##### updatedAtRange: `string`[]<a id="updatedatrange-string"></a>

Limits the search results to any items updated within a given date range.  Date ranges are defined as comma separated RFC3339 timestamps.  If the start date is omitted (`,2014-05-17T13:35:01-07:00`) anything updated before the end date will be returned.  If the end date is omitted (`2014-05-15T13:35:01-07:00,`) the current date will be used as the end date instead.

##### sizeRange: `number`[]<a id="sizerange-number"></a>

Limits the search results to any items with a size within a given file size range. This applied to files and folders.  Size ranges are defined as comma separated list of a lower and upper byte size limit (inclusive).  The upper and lower bound can be omitted to create open ranges.

##### ownerUserIds: `string`[]<a id="owneruserids-string"></a>

Limits the search results to any items that are owned by the given list of owners, defined as a list of comma separated user IDs.  The items still need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users an empty result set will be returned.  To search across an entire enterprise, we recommend using the `enterprise_content` scope parameter which can be requested with our support team.

##### recentUpdaterUserIds: `string`[]<a id="recentupdateruserids-string"></a>

Limits the search results to any items that have been updated by the given list of users, defined as a list of comma separated user IDs.  The items still need to be owned or shared with the currently authenticated user for them to show up in the search results. If the user does not have access to any files owned by any of the users an empty result set will be returned.  This feature only searches back to the last 10 versions of an item.

##### ancestorFolderIds: `string`[]<a id="ancestorfolderids-string"></a>

Limits the search results to items within the given list of folders, defined as a comma separated lists of folder IDs.  Search results will also include items within any subfolders of those ancestor folders.  The folders still need to be owned or shared with the currently authenticated user. If the folder is not accessible by this user, or it does not exist, a `HTTP 404` error code will be returned instead.  To search across an entire enterprise, we recommend using the `enterprise_content` scope parameter which can be requested with our support team.

##### contentTypes: `string`[]<a id="contenttypes-string"></a>

Limits the search results to any items that match the search query for a specific part of the file, for example the file description.  Content types are defined as a comma separated lists of Box recognized content types. The allowed content types are as follows.  * `name` - The name of the item, as defined by its `name` field. * `description` - The description of the item, as defined by its   `description` field. * `file_content` - The actual content of the file. * `comments` - The content of any of the comments on a file or    folder. * `tags` - Any tags that are applied to an item, as defined by its    `tags` field.

##### type: `'file' | 'folder' | 'web_link'`<a id="type-file--folder--web_link"></a>

Limits the search results to any items of this type. This parameter only takes one value. By default the API returns items that match any of these types.  * `file` - Limits the search results to files * `folder` - Limits the search results to folders * `web_link` - Limits the search results to web links, also known    as bookmarks

##### trashContent: `'non_trashed_only' | 'trashed_only' | 'all_items'`<a id="trashcontent-non_trashed_only--trashed_only--all_items"></a>

Determines if the search should look in the trash for items.  By default, this API only returns search results for items not currently in the trash (`non_trashed_only`).  * `trashed_only` - Only searches for items currently in the trash * `non_trashed_only` - Only searches for items currently not in   the trash * `all_items` - Searches for both trashed and non-trashed items.

##### mdfilters: [`MetadataFilter`](./models/metadata-filter.ts)[]<a id="mdfilters-metadatafiltermodelsmetadata-filterts"></a>

Limits the search results to any items for which the metadata matches the provided filter.  This parameter contains a list of 1 metadata template to filter the search results by. This list can currently only contain one entry, though this might be expanded in the future.  This parameter is required unless the `query` parameter is provided.

##### sort: `'modified_at' | 'relevance'`<a id="sort-modified_at--relevance"></a>

Defines the order in which search results are returned. This API defaults to returning items by relevance unless this parameter is explicitly specified.  * `relevance` (default) returns the results sorted by relevance to the query search term. The relevance is based on the occurrence of the search term in the items name, description, content, and additional properties. * `modified_at` returns the results ordered in descending order by date at which the item was last modified.

##### direction: `'DESC' | 'ASC'`<a id="direction-desc--asc"></a>

Defines the direction in which search results are ordered. This API defaults to returning items in descending (`DESC`) order unless this parameter is explicitly specified.  When results are sorted by `relevance` the ordering is locked to returning items in descending order of relevance, and this parameter is ignored.

##### limit: `number`<a id="limit-number"></a>

Defines the maximum number of items to return as part of a page of results.

##### includeRecentSharedLinks: `boolean`<a id="includerecentsharedlinks-boolean"></a>

Defines whether the search results should include any items that the user recently accessed through a shared link.  When this parameter has been set to true, the format of the response of this API changes to return a list of [Search Results with Shared Links](r://search_results_with_shared_links)

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### deletedUserIds: `string`[]<a id="deleteduserids-string"></a>

Limits the search results to items that were deleted by the given list of users, defined as a list of comma separated user IDs.  The `trash_content` parameter needs to be set to `trashed_only`.  If searching in trash is not performed, an empty result set is returned. The items need to be owned or shared with the currently authenticated user for them to show up in the search results.  If the user does not have access to any files owned by any of the users, an empty result set is returned.  Data available from 2023-02-01 onwards.

##### deletedAtRange: `string`[]<a id="deletedatrange-string"></a>

Limits the search results to any items deleted within a given date range.  Date ranges are defined as comma separated RFC3339 timestamps.  If the the start date is omitted (`2014-05-17T13:35:01-07:00`), anything deleted before the end date will be returned.  If the end date is omitted (`2014-05-15T13:35:01-07:00`), the current date will be used as the end date instead.  The `trash_content` parameter needs to be set to `trashed_only`.  If searching in trash is not performed, then an empty result is returned.  Data available from 2023-02-01 onwards.

#### 🔄 Return<a id="🔄-return"></a>

[GetSearchResponse](./models/get-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sessionTermination.createSessionTerminationJobs`<a id="boxsessionterminationcreatesessionterminationjobs"></a>

Validates the roles and permissions of the user,
and creates asynchronous jobs
to terminate the user's sessions.
Returns the status for the POST request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionTerminationJobsResponse =
  await box.sessionTermination.createSessionTerminationJobs({
    user_ids: ["123456", "456789"],
    user_logins: ["user@sample.com", "user2@sample.com"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_ids: `string`[]<a id="user_ids-string"></a>

A list of user IDs

##### user_logins: `string`[]<a id="user_logins-string"></a>

A list of user logins

#### 🔄 Return<a id="🔄-return"></a>

[SessionTerminationMessage](./models/session-termination-message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/terminate_sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sessionTermination.createTerminationJobs`<a id="boxsessionterminationcreateterminationjobs"></a>

Validates the roles and permissions of the group,
and creates asynchronous jobs
to terminate the group's sessions.
Returns the status for the POST request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTerminationJobsResponse =
  await box.sessionTermination.createTerminationJobs({
    group_ids: ["123456", "456789"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### group_ids: `string`[]<a id="group_ids-string"></a>

A list of group IDs

#### 🔄 Return<a id="🔄-return"></a>

[SessionTerminationMessage](./models/session-termination-message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups/terminate_sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFiles.addSharedLinkToFile`<a id="boxsharedlinksfilesaddsharedlinktofile"></a>

Adds a shared link to a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addSharedLinkToFileResponse =
  await box.sharedLinksFiles.addSharedLinkToFile({
    fileId: "fileId_example",
    fields: "fields_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: [`SharedLinksFilesAddSharedLinkToFileRequestSharedLink`](./models/shared-links-files-add-shared-link-to-file-request-shared-link.ts)<a id="shared_link-sharedlinksfilesaddsharedlinktofilerequestsharedlinkmodelsshared-links-files-add-shared-link-to-file-request-shared-linkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}#add_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFiles.getBySharedLink`<a id="boxsharedlinksfilesgetbysharedlink"></a>

Returns the file represented by a shared link.

A shared file can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared file when only given a shared link.

The `shared_link_permission_options` array field can be returned
by requesting it in the `fields` query parameter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBySharedLinkResponse = await box.sharedLinksFiles.getBySharedLink({
  boxapi: "boxapi_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### boxapi: `string`<a id="boxapi-string"></a>

A header containing the shared link and optional password for the shared link.  The format for this header is as follows.  `shared_link=[link]&shared_link_password=[password]`

##### ifNoneMatch: `string`<a id="ifnonematch-string"></a>

Ensures an item is only returned if it has changed.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `304 Not Modified` if the item has not changed since.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shared_items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFiles.getSharedLinkInfo`<a id="boxsharedlinksfilesgetsharedlinkinfo"></a>

Gets the information for a shared link on a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSharedLinkInfoResponse = await box.sharedLinksFiles.getSharedLinkInfo({
  fileId: "fileId_example",
  fields: "fields_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}#get_shared_link` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFiles.removeSharedLink`<a id="boxsharedlinksfilesremovesharedlink"></a>

Removes a shared link from a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSharedLinkResponse = await box.sharedLinksFiles.removeSharedLink({
  fileId: "fileId_example",
  fields: "fields_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: `object`<a id="shared_link-object"></a>

By setting this value to `null`, the shared link is removed from the file.

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}#remove_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFiles.updateLinkOnFile`<a id="boxsharedlinksfilesupdatelinkonfile"></a>

Updates a shared link on a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLinkOnFileResponse = await box.sharedLinksFiles.updateLinkOnFile({
  fileId: "fileId_example",
  fields: "fields_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: [`SharedLinksFilesUpdateLinkOnFileRequestSharedLink`](./models/shared-links-files-update-link-on-file-request-shared-link.ts)<a id="shared_link-sharedlinksfilesupdatelinkonfilerequestsharedlinkmodelsshared-links-files-update-link-on-file-request-shared-linkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileFull](./models/file-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}#update_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFolders.addLinkToFolder`<a id="boxsharedlinksfoldersaddlinktofolder"></a>

Adds a shared link to a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addLinkToFolderResponse = await box.sharedLinksFolders.addLinkToFolder({
  folderId: "folderId_example",
  fields: "fields_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: [`SharedLinksFoldersAddLinkToFolderRequestSharedLink`](./models/shared-links-folders-add-link-to-folder-request-shared-link.ts)<a id="shared_link-sharedlinksfoldersaddlinktofolderrequestsharedlinkmodelsshared-links-folders-add-link-to-folder-request-shared-linkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}#add_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFolders.findFolderBySharedLink`<a id="boxsharedlinksfoldersfindfolderbysharedlink"></a>

Return the folder represented by a shared link.

A shared folder can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared folder when only given a shared link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findFolderBySharedLinkResponse =
  await box.sharedLinksFolders.findFolderBySharedLink({
    boxapi: "boxapi_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### boxapi: `string`<a id="boxapi-string"></a>

A header containing the shared link and optional password for the shared link.  The format for this header is as follows.  `shared_link=[link]&shared_link_password=[password]`

##### ifNoneMatch: `string`<a id="ifnonematch-string"></a>

Ensures an item is only returned if it has changed.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `304 Not Modified` if the item has not changed since.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shared_items#folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFolders.getSharedLinkForFolder`<a id="boxsharedlinksfoldersgetsharedlinkforfolder"></a>

Gets the information for a shared link on a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSharedLinkForFolderResponse =
  await box.sharedLinksFolders.getSharedLinkForFolder({
    folderId: "folderId_example",
    fields: "fields_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}#get_shared_link` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFolders.removeFromFolder`<a id="boxsharedlinksfoldersremovefromfolder"></a>

Removes a shared link from a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFromFolderResponse = await box.sharedLinksFolders.removeFromFolder({
  folderId: "folderId_example",
  fields: "fields_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: `object`<a id="shared_link-object"></a>

By setting this value to `null`, the shared link is removed from the folder.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}#remove_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksFolders.updateFolderSharedLink`<a id="boxsharedlinksfoldersupdatefoldersharedlink"></a>

Updates a shared link on a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFolderSharedLinkResponse =
  await box.sharedLinksFolders.updateFolderSharedLink({
    folderId: "folderId_example",
    fields: "fields_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: [`SharedLinksFoldersUpdateFolderSharedLinkRequestSharedLink`](./models/shared-links-folders-update-folder-shared-link-request-shared-link.ts)<a id="shared_link-sharedlinksfoldersupdatefoldersharedlinkrequestsharedlinkmodelsshared-links-folders-update-folder-shared-link-request-shared-linkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}#update_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksWebLinks.addLinkToWebLink`<a id="boxsharedlinksweblinksaddlinktoweblink"></a>

Adds a shared link to a web link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addLinkToWebLinkResponse = await box.sharedLinksWebLinks.addLinkToWebLink(
  {
    webLinkId: "webLinkId_example",
    fields: "fields_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: [`SharedLinksWebLinksAddLinkToWebLinkRequestSharedLink`](./models/shared-links-web-links-add-link-to-web-link-request-shared-link.ts)<a id="shared_link-sharedlinksweblinksaddlinktoweblinkrequestsharedlinkmodelsshared-links-web-links-add-link-to-web-link-request-shared-linkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}#add_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksWebLinks.findSharedWebLink`<a id="boxsharedlinksweblinksfindsharedweblink"></a>

Returns the web link represented by a shared link.

A shared web link can be represented by a shared link,
which can originate within the current enterprise or within another.

This endpoint allows an application to retrieve information about a
shared web link when only given a shared link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findSharedWebLinkResponse =
  await box.sharedLinksWebLinks.findSharedWebLink({
    boxapi: "boxapi_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### boxapi: `string`<a id="boxapi-string"></a>

A header containing the shared link and optional password for the shared link.  The format for this header is as follows.  `shared_link=[link]&shared_link_password=[password]`

##### ifNoneMatch: `string`<a id="ifnonematch-string"></a>

Ensures an item is only returned if it has changed.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `304 Not Modified` if the item has not changed since.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shared_items#web_links` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksWebLinks.getLinkInfo`<a id="boxsharedlinksweblinksgetlinkinfo"></a>

Gets the information for a shared link on a web link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLinkInfoResponse = await box.sharedLinksWebLinks.getLinkInfo({
  webLinkId: "webLinkId_example",
  fields: "fields_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}#get_shared_link` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksWebLinks.removeSharedLink`<a id="boxsharedlinksweblinksremovesharedlink"></a>

Removes a shared link from a web link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSharedLinkResponse = await box.sharedLinksWebLinks.removeSharedLink(
  {
    webLinkId: "webLinkId_example",
    fields: "fields_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: `object`<a id="shared_link-object"></a>

By setting this value to `null`, the shared link is removed from the web link.

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}#remove_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.sharedLinksWebLinks.updateSharedLink`<a id="boxsharedlinksweblinksupdatesharedlink"></a>

Updates a shared link on a web link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSharedLinkResponse = await box.sharedLinksWebLinks.updateSharedLink(
  {
    webLinkId: "webLinkId_example",
    fields: "fields_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### fields: `string`<a id="fields-string"></a>

Explicitly request the `shared_link` fields to be returned for this item.

##### shared_link: [`SharedLinksWebLinksUpdateSharedLinkRequestSharedLink`](./models/shared-links-web-links-update-shared-link-request-shared-link.ts)<a id="shared_link-sharedlinksweblinksupdatesharedlinkrequestsharedlinkmodelsshared-links-web-links-update-shared-link-request-shared-linkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}#update_shared_link` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierReports.createReport`<a id="boxshieldinformationbarrierreportscreatereport"></a>

Creates a shield information barrier report for a given barrier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createReportResponse =
  await box.shieldInformationBarrierReports.createReport({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shield_information_barrier: [`ShieldInformationBarrierBase`](./models/shield-information-barrier-base.ts)<a id="shield_information_barrier-shieldinformationbarrierbasemodelsshield-information-barrier-basets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierReport](./models/shield-information-barrier-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_reports` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierReports.getById`<a id="boxshieldinformationbarrierreportsgetbyid"></a>

Retrieves a shield information barrier report by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await box.shieldInformationBarrierReports.getById({
  shieldInformationBarrierReportId: "shieldInformationBarrierReportId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierReportId: `string`<a id="shieldinformationbarrierreportid-string"></a>

The ID of the shield information barrier Report.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierReport](./models/shield-information-barrier-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_reports/{shield_information_barrier_report_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierReports.listReports`<a id="boxshieldinformationbarrierreportslistreports"></a>

Lists shield information barrier reports.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listReportsResponse =
  await box.shieldInformationBarrierReports.listReports({
    shieldInformationBarrierId: "shieldInformationBarrierId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierId: `string`<a id="shieldinformationbarrierid-string"></a>

The ID of the shield information barrier.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierReports](./models/shield-information-barrier-reports.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentMembers.createNewMember`<a id="boxshieldinformationbarriersegmentmemberscreatenewmember"></a>

Creates a new shield information barrier segment member.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewMemberResponse =
  await box.shieldInformationBarrierSegmentMembers.createNewMember({
    type: "shield_information_barrier_segment_member",
    shield_information_barrier_segment: {
      id: "432554",
      type: "shield_information_barrier_segment",
    },
    user: {
      id: "11446498",
      type: "user",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shield_information_barrier_segment: [`ShieldInformationBarrierSegmentMembersCreateNewMemberRequestShieldInformationBarrierSegment`](./models/shield-information-barrier-segment-members-create-new-member-request-shield-information-barrier-segment.ts)<a id="shield_information_barrier_segment-shieldinformationbarriersegmentmemberscreatenewmemberrequestshieldinformationbarriersegmentmodelsshield-information-barrier-segment-members-create-new-member-request-shield-information-barrier-segmentts"></a>

##### user: [`UserBase`](./models/user-base.ts)<a id="user-userbasemodelsuser-basets"></a>

User to which restriction will be applied.

##### type: `string`<a id="type-string"></a>

-| A type of the shield barrier segment member.

##### shield_information_barrier: [`ShieldInformationBarrierBase`](./models/shield-information-barrier-base.ts)<a id="shield_information_barrier-shieldinformationbarrierbasemodelsshield-information-barrier-basets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegmentMember](./models/shield-information-barrier-segment-member.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_members` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentMembers.getById`<a id="boxshieldinformationbarriersegmentmembersgetbyid"></a>

Retrieves a shield information barrier
segment member by its ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse =
  await box.shieldInformationBarrierSegmentMembers.getById({
    shieldInformationBarrierSegmentMemberId:
      "shieldInformationBarrierSegmentMemberId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentMemberId: `string`<a id="shieldinformationbarriersegmentmemberid-string"></a>

The ID of the shield information barrier segment Member.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegmentMember](./models/shield-information-barrier-segment-member.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentMembers.listSegmentMembersBasedOnIds`<a id="boxshieldinformationbarriersegmentmemberslistsegmentmembersbasedonids"></a>

Lists shield information barrier segment members
based on provided segment IDs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSegmentMembersBasedOnIdsResponse =
  await box.shieldInformationBarrierSegmentMembers.listSegmentMembersBasedOnIds(
    {
      shieldInformationBarrierSegmentId:
        "shieldInformationBarrierSegmentId_example",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentId: `string`<a id="shieldinformationbarriersegmentid-string"></a>

The ID of the shield information barrier segment.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegmentMembers](./models/shield-information-barrier-segment-members.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentMembers.removeById`<a id="boxshieldinformationbarriersegmentmembersremovebyid"></a>

Deletes a shield information barrier
segment member based on provided ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse =
  await box.shieldInformationBarrierSegmentMembers.removeById({
    shieldInformationBarrierSegmentMemberId:
      "shieldInformationBarrierSegmentMemberId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentMemberId: `string`<a id="shieldinformationbarriersegmentmemberid-string"></a>

The ID of the shield information barrier segment Member.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_members/{shield_information_barrier_segment_member_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentRestrictions.createBarrierObject`<a id="boxshieldinformationbarriersegmentrestrictionscreatebarrierobject"></a>

Creates a shield information barrier
segment restriction object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBarrierObjectResponse =
  await box.shieldInformationBarrierSegmentRestrictions.createBarrierObject({
    type: "shield_information_barrier_segment_restriction",
    shield_information_barrier_segment: {
      id: "1910967",
      type: "shield_information_barrier_segment",
    },
    restricted_segment: {
      id: "1910967",
      type: "shield_information_barrier_segment",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

The type of the shield barrier segment restriction for this member.

##### shield_information_barrier_segment: [`ShieldInformationBarrierSegmentRestrictionsCreateBarrierObjectRequestShieldInformationBarrierSegment`](./models/shield-information-barrier-segment-restrictions-create-barrier-object-request-shield-information-barrier-segment.ts)<a id="shield_information_barrier_segment-shieldinformationbarriersegmentrestrictionscreatebarrierobjectrequestshieldinformationbarriersegmentmodelsshield-information-barrier-segment-restrictions-create-barrier-object-request-shield-information-barrier-segmentts"></a>

##### restricted_segment: [`ShieldInformationBarrierSegmentRestrictionsCreateBarrierObjectRequestRestrictedSegment`](./models/shield-information-barrier-segment-restrictions-create-barrier-object-request-restricted-segment.ts)<a id="restricted_segment-shieldinformationbarriersegmentrestrictionscreatebarrierobjectrequestrestrictedsegmentmodelsshield-information-barrier-segment-restrictions-create-barrier-object-request-restricted-segmentts"></a>

##### shield_information_barrier: [`ShieldInformationBarrierBase`](./models/shield-information-barrier-base.ts)<a id="shield_information_barrier-shieldinformationbarrierbasemodelsshield-information-barrier-basets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegmentRestriction](./models/shield-information-barrier-segment-restriction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_restrictions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentRestrictions.getById`<a id="boxshieldinformationbarriersegmentrestrictionsgetbyid"></a>

Retrieves a shield information barrier segment
restriction based on provided ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse =
  await box.shieldInformationBarrierSegmentRestrictions.getById({
    shieldInformationBarrierSegmentRestrictionId:
      "shieldInformationBarrierSegmentRestrictionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentRestrictionId: `string`<a id="shieldinformationbarriersegmentrestrictionid-string"></a>

The ID of the shield information barrier segment Restriction.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegmentRestriction](./models/shield-information-barrier-segment-restriction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_restrictions/{shield_information_barrier_segment_restriction_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentRestrictions.listBasedOnSegmentId`<a id="boxshieldinformationbarriersegmentrestrictionslistbasedonsegmentid"></a>

Lists shield information barrier segment restrictions
based on provided segment ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBasedOnSegmentIdResponse =
  await box.shieldInformationBarrierSegmentRestrictions.listBasedOnSegmentId({
    shieldInformationBarrierSegmentId:
      "shieldInformationBarrierSegmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentId: `string`<a id="shieldinformationbarriersegmentid-string"></a>

The ID of the shield information barrier segment.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegmentRestrictions](./models/shield-information-barrier-segment-restrictions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_restrictions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegmentRestrictions.removeById`<a id="boxshieldinformationbarriersegmentrestrictionsremovebyid"></a>

Delete shield information barrier segment restriction
based on provided ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse =
  await box.shieldInformationBarrierSegmentRestrictions.removeById({
    shieldInformationBarrierSegmentRestrictionId:
      "shieldInformationBarrierSegmentRestrictionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentRestrictionId: `string`<a id="shieldinformationbarriersegmentrestrictionid-string"></a>

The ID of the shield information barrier segment Restriction.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segment_restrictions/{shield_information_barrier_segment_restriction_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegments.createSegment`<a id="boxshieldinformationbarriersegmentscreatesegment"></a>

Creates a shield information barrier segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSegmentResponse =
  await box.shieldInformationBarrierSegments.createSegment({
    description:
      "Corporate division that engages in\n advisory_based financial\ntransactions on behalf of individuals,\ncorporations, and governments.",
    shield_information_barrier: {
      id: "11446498",
      type: "shield_information_barrier",
    },
    name: "Investment Banking",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shield_information_barrier: [`ShieldInformationBarrierBase`](./models/shield-information-barrier-base.ts)<a id="shield_information_barrier-shieldinformationbarrierbasemodelsshield-information-barrier-basets"></a>

##### name: `string`<a id="name-string"></a>

Name of the shield information barrier segment

##### description: `string`<a id="description-string"></a>

Description of the shield information barrier segment

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegment](./models/shield-information-barrier-segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegments.deleteSegmentById`<a id="boxshieldinformationbarriersegmentsdeletesegmentbyid"></a>

Deletes the shield information barrier segment
based on provided ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSegmentByIdResponse =
  await box.shieldInformationBarrierSegments.deleteSegmentById({
    shieldInformationBarrierSegmentId:
      "shieldInformationBarrierSegmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentId: `string`<a id="shieldinformationbarriersegmentid-string"></a>

The ID of the shield information barrier segment.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segments/{shield_information_barrier_segment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegments.getById`<a id="boxshieldinformationbarriersegmentsgetbyid"></a>

Retrieves shield information barrier segment based on provided ID..

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await box.shieldInformationBarrierSegments.getById({
  shieldInformationBarrierSegmentId:
    "shieldInformationBarrierSegmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentId: `string`<a id="shieldinformationbarriersegmentid-string"></a>

The ID of the shield information barrier segment.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegment](./models/shield-information-barrier-segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segments/{shield_information_barrier_segment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegments.listInformationObjects`<a id="boxshieldinformationbarriersegmentslistinformationobjects"></a>

Retrieves a list of shield information barrier segment objects
for the specified Information Barrier ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInformationObjectsResponse =
  await box.shieldInformationBarrierSegments.listInformationObjects({
    shieldInformationBarrierId: "shieldInformationBarrierId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierId: `string`<a id="shieldinformationbarrierid-string"></a>

The ID of the shield information barrier.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegments](./models/shield-information-barrier-segments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarrierSegments.updateById`<a id="boxshieldinformationbarriersegmentsupdatebyid"></a>

Updates the shield information barrier segment based on provided ID..

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse =
  await box.shieldInformationBarrierSegments.updateById({
    shieldInformationBarrierSegmentId:
      "shieldInformationBarrierSegmentId_example",
    description:
      "Corporate division that engages in advisory_based\nfinancial transactions on behalf of individuals,\ncorporations, and governments.",
    name: "Investment Banking",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierSegmentId: `string`<a id="shieldinformationbarriersegmentid-string"></a>

The ID of the shield information barrier segment.

##### description: `string`<a id="description-string"></a>

The updated description for the shield information barrier segment.

##### name: `string`<a id="name-string"></a>

The updated name for the shield information barrier segment.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrierSegment](./models/shield-information-barrier-segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barrier_segments/{shield_information_barrier_segment_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarriers.addChangedStatus`<a id="boxshieldinformationbarriersaddchangedstatus"></a>

Change status of shield information barrier with the specified ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addChangedStatusResponse =
  await box.shieldInformationBarriers.addChangedStatus({
    id: "1910967",
    status: "pending",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the shield information barrier.

##### status: `string`<a id="status-string"></a>

The desired status for the shield information barrier.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrier](./models/shield-information-barrier.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barriers/change_status` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarriers.createBarrier`<a id="boxshieldinformationbarrierscreatebarrier"></a>

Creates a shield information barrier to
separate individuals/groups within the same
firm and prevents confidential information passing between them.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBarrierResponse = await box.shieldInformationBarriers.createBarrier(
  {
    enterprise: {
      id: "1910967",
      type: "enterprise",
    },
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### enterprise: [`EnterpriseBase`](./models/enterprise-base.ts)<a id="enterprise-enterprisebasemodelsenterprise-basets"></a>

The `type` and `id` of enterprise this barrier is under.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrier](./models/shield-information-barrier.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barriers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarriers.getById`<a id="boxshieldinformationbarriersgetbyid"></a>

Get shield information barrier based on provided ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await box.shieldInformationBarriers.getById({
  shieldInformationBarrierId: "shieldInformationBarrierId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### shieldInformationBarrierId: `string`<a id="shieldinformationbarrierid-string"></a>

The ID of the shield information barrier.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarrier](./models/shield-information-barrier.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barriers/{shield_information_barrier_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.shieldInformationBarriers.listInformationObjects`<a id="boxshieldinformationbarrierslistinformationobjects"></a>

Retrieves a list of shield information barrier objects
for the enterprise of JWT.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInformationObjectsResponse =
  await box.shieldInformationBarriers.listInformationObjects({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[ShieldInformationBarriers](./models/shield-information-barriers.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shield_information_barriers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.signRequests.cancelRequest`<a id="boxsignrequestscancelrequest"></a>

Cancels a sign request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelRequestResponse = await box.signRequests.cancelRequest({
  signRequestId: "signRequestId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### signRequestId: `string`<a id="signrequestid-string"></a>

The ID of the sign request

#### 🔄 Return<a id="🔄-return"></a>

[SignRequest](./models/sign-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sign_requests/{sign_request_id}/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.signRequests.createRequest`<a id="boxsignrequestscreaterequest"></a>

Creates a sign request. This involves preparing a document for signing and
sending the sign request to signers.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRequestResponse = await box.signRequests.createRequest({
  is_document_preparation_needed: true,
  redirect_url: "https://www.example.com",
  declined_redirect_url: "https://declined-redirect.com",
  are_text_signatures_enabled: true,
  email_subject: "Sign Request from Acme",
  email_message: "Hello! Please sign the document below",
  are_reminders_enabled: true,
  name: "name",
  days_valid: 2,
  external_id: "123",
  is_phone_verification_required_to_view: true,
  template_id: "123075213-af2c8822-3ef2-4952-8557-52d69c2fe9cb",
  signature_color: "blue",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### signers: [`SignRequestCreateSigner`](./models/sign-request-create-signer.ts)[]<a id="signers-signrequestcreatesignermodelssign-request-create-signerts"></a>

Array of signers for the sign request. 35 is the max number of signers permitted.

##### is_document_preparation_needed: `boolean`<a id="is_document_preparation_needed-boolean"></a>

Indicates if the sender should receive a `prepare_url` in the response to complete document preparation via UI.

##### redirect_url: `string`<a id="redirect_url-string"></a>

When specified, signature request will be redirected to this url when a document is signed.

##### declined_redirect_url: `string`<a id="declined_redirect_url-string"></a>

The uri that a signer will be redirected to after declining to sign a document.

##### are_text_signatures_enabled: `boolean`<a id="are_text_signatures_enabled-boolean"></a>

Disables the usage of signatures generated by typing (text).

##### email_subject: `string`<a id="email_subject-string"></a>

Subject of sign request email. This is cleaned by sign request. If this field is not passed, a default subject will be used.

##### email_message: `string`<a id="email_message-string"></a>

Message to include in sign request email. The field is cleaned through sanitization of specific characters. However, some html tags are allowed. Links included in the message are also converted to hyperlinks in the email. The message may contain the following html tags including `a`, `abbr`, `acronym`, `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`, `ol`, and `strong`. Be aware that when the text to html ratio is too high, the email may end up in spam filters. Custom styles on these tags are not allowed. If this field is not passed, a default message will be used.

##### are_reminders_enabled: `boolean`<a id="are_reminders_enabled-boolean"></a>

Reminds signers to sign a document on day 3, 8, 13 and 18. Reminders are only sent to outstanding signers.

##### name: `string`<a id="name-string"></a>

Name of the sign request.

##### prefill_tags: [`SignRequestPrefillTag`](./models/sign-request-prefill-tag.ts)[]<a id="prefill_tags-signrequestprefilltagmodelssign-request-prefill-tagts"></a>

When a document contains sign related tags in the content, you can prefill them using this `prefill_tags` by referencing the \\\'id\\\' of the tag as the `external_id` field of the prefill tag.

##### days_valid: `number`<a id="days_valid-number"></a>

Set the number of days after which the created signature request will automatically expire if not completed. By default, we do not apply any expiration date on signature requests, and the signature request does not expire.

##### external_id: `string`<a id="external_id-string"></a>

This can be used to reference an ID in an external system that the sign request is related to.

##### is_phone_verification_required_to_view: `boolean`<a id="is_phone_verification_required_to_view-boolean"></a>

Forces signers to verify a text message prior to viewing the document. You must specify the phone number of signers to have this setting apply to them.

##### template_id: `string`<a id="template_id-string"></a>

When a signature request is created from a template this field will indicate the id of that template.

##### source_files: [`FileBase`](./models/file-base.ts)[]<a id="source_files-filebasemodelsfile-basets"></a>

List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file.

##### signature_color: `string`<a id="signature_color-string"></a>

Force a specific color for the signature (blue, black, or red)

##### parent_folder: [`FolderMini`](./models/folder-mini.ts)<a id="parent_folder-folderminimodelsfolder-minits"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SignRequest](./models/sign-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sign_requests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.signRequests.getById`<a id="boxsignrequestsgetbyid"></a>

Gets a sign request by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await box.signRequests.getById({
  signRequestId: "signRequestId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### signRequestId: `string`<a id="signrequestid-string"></a>

The ID of the sign request

#### 🔄 Return<a id="🔄-return"></a>

[SignRequest](./models/sign-request.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sign_requests/{sign_request_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.signRequests.list`<a id="boxsignrequestslist"></a>

Gets sign requests created by a user. If the `sign_files` and/or
`parent_folder` are deleted, the sign request will not return in the list.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await box.signRequests.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[SignRequests](./models/sign-requests.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sign_requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.signRequests.resendSignRequestEmails`<a id="boxsignrequestsresendsignrequestemails"></a>

Resends a sign request email to all outstanding signers.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resendSignRequestEmailsResponse =
  await box.signRequests.resendSignRequestEmails({
    signRequestId: "signRequestId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### signRequestId: `string`<a id="signrequestid-string"></a>

The ID of the sign request

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sign_requests/{sign_request_id}/resend` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.signTemplates.getDetails`<a id="boxsigntemplatesgetdetails"></a>

Fetches details of a specific Box Sign template.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await box.signTemplates.getDetails({
  templateId: "templateId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

The ID of a Box Sign template.

#### 🔄 Return<a id="🔄-return"></a>

[SignTemplate](./models/sign-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sign_templates/{template_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.signTemplates.listTemplates`<a id="boxsigntemplateslisttemplates"></a>

Gets Box Sign templates created by a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTemplatesResponse = await box.signTemplates.listTemplates({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[SignTemplates](./models/sign-templates.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sign_templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.skills.applyBoxSkillCards`<a id="boxskillsapplyboxskillcards"></a>

Applies one or more Box Skills metadata cards to a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const applyBoxSkillCardsResponse = await box.skills.applyBoxSkillCards({
  fileId: "fileId_example",
  cards: [null],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cards: [`SkillCardsMetadataCardsInner`](./models/skill-cards-metadata-cards-inner.ts)[]<a id="cards-skillcardsmetadatacardsinnermodelsskill-cards-metadata-cards-innerts"></a>

A list of Box Skill cards to apply to this file.

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[SkillCardsMetadata](./models/skill-cards-metadata.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/global/boxSkillsCards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.skills.listBoxSkillCards`<a id="boxskillslistboxskillcards"></a>

List the Box Skills metadata cards that are attached to a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBoxSkillCardsResponse = await box.skills.listBoxSkillCards({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[SkillCardsMetadata](./models/skill-cards-metadata.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/global/boxSkillsCards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.skills.removeBoxSkillCards`<a id="boxskillsremoveboxskillcards"></a>

Removes any Box Skills cards metadata from a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeBoxSkillCardsResponse = await box.skills.removeBoxSkillCards({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/global/boxSkillsCards` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.skills.updateAllBoxSkillCards`<a id="boxskillsupdateallboxskillcards"></a>

An alternative method that can be used to overwrite and update all Box Skill
metadata cards on a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAllBoxSkillCardsResponse = await box.skills.updateAllBoxSkillCards({
  skillId: "skillId_example",
  status: "success",
  metadata: {},
  file: {
    type: "file",
    id: "3243244",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

Defines the status of this invocation. Set this to `success` when setting Skill cards.

##### metadata: [`SkillsUpdateAllBoxSkillCardsRequestMetadata`](./models/skills-update-all-box-skill-cards-request-metadata.ts)<a id="metadata-skillsupdateallboxskillcardsrequestmetadatamodelsskills-update-all-box-skill-cards-request-metadatats"></a>

##### file: [`SkillsUpdateAllBoxSkillCardsRequestFile`](./models/skills-update-all-box-skill-cards-request-file.ts)<a id="file-skillsupdateallboxskillcardsrequestfilemodelsskills-update-all-box-skill-cards-request-filets"></a>

##### skillId: `string`<a id="skillid-string"></a>

The ID of the skill to apply this metadata for.

##### file_version: [`SkillsUpdateAllBoxSkillCardsRequestFileVersion`](./models/skills-update-all-box-skill-cards-request-file-version.ts)<a id="file_version-skillsupdateallboxskillcardsrequestfileversionmodelsskills-update-all-box-skill-cards-request-file-versionts"></a>

##### usage: [`SkillsUpdateAllBoxSkillCardsRequestUsage`](./models/skills-update-all-box-skill-cards-request-usage.ts)<a id="usage-skillsupdateallboxskillcardsrequestusagemodelsskills-update-all-box-skill-cards-request-usagets"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skill_invocations/{skill_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.skills.updateBoxSkillCardsOnFile`<a id="boxskillsupdateboxskillcardsonfile"></a>

Updates one or more Box Skills metadata cards to a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBoxSkillCardsOnFileResponse =
  await box.skills.updateBoxSkillCardsOnFile({
    fileId: "12345",
    requestBody: [
      {
        op: "replace",
        path: "/cards/0",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### requestBody: [`SkillsUpdateBoxSkillCardsOnFileRequestInner`](./models/skills-update-box-skill-cards-on-file-request-inner.ts)[]<a id="requestbody-skillsupdateboxskillcardsonfilerequestinnermodelsskills-update-box-skill-cards-on-file-request-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SkillCardsMetadata](./models/skill-cards-metadata.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/metadata/global/boxSkillsCards` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.standardAndZonesStoragePolicies.getSpecific`<a id="boxstandardandzonesstoragepoliciesgetspecific"></a>

Fetches a specific storage policy.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificResponse =
  await box.standardAndZonesStoragePolicies.getSpecific({
    storagePolicyId: "storagePolicyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storagePolicyId: `string`<a id="storagepolicyid-string"></a>

The ID of the storage policy.

#### 🔄 Return<a id="🔄-return"></a>

[StoragePolicy](./models/storage-policy.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage_policies/{storage_policy_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.standardAndZonesStoragePolicies.listPolicies`<a id="boxstandardandzonesstoragepolicieslistpolicies"></a>

Fetches all the storage policies in the enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPoliciesResponse =
  await box.standardAndZonesStoragePolicies.listPolicies({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[StoragePolicies](./models/storage-policies.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage_policies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.standardAndZonesStoragePolicyAssignments.createAssignment`<a id="boxstandardandzonesstoragepolicyassignmentscreateassignment"></a>

Creates a storage policy assignment for an enterprise or user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAssignmentResponse =
  await box.standardAndZonesStoragePolicyAssignments.createAssignment({
    storage_policy: {
      type: "storage_policy",
      id: "1434325",
    },
    assigned_to: {
      type: "user",
      id: "9987987",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storage_policy: [`StandardAndZonesStoragePolicyAssignmentsCreateAssignmentRequestStoragePolicy`](./models/standard-and-zones-storage-policy-assignments-create-assignment-request-storage-policy.ts)<a id="storage_policy-standardandzonesstoragepolicyassignmentscreateassignmentrequeststoragepolicymodelsstandard-and-zones-storage-policy-assignments-create-assignment-request-storage-policyts"></a>

##### assigned_to: [`StandardAndZonesStoragePolicyAssignmentsCreateAssignmentRequestAssignedTo`](./models/standard-and-zones-storage-policy-assignments-create-assignment-request-assigned-to.ts)<a id="assigned_to-standardandzonesstoragepolicyassignmentscreateassignmentrequestassignedtomodelsstandard-and-zones-storage-policy-assignments-create-assignment-request-assigned-tots"></a>

#### 🔄 Return<a id="🔄-return"></a>

[StoragePolicyAssignment](./models/storage-policy-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage_policy_assignments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.standardAndZonesStoragePolicyAssignments.getSpecificAssignment`<a id="boxstandardandzonesstoragepolicyassignmentsgetspecificassignment"></a>

Fetches a specific storage policy assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificAssignmentResponse =
  await box.standardAndZonesStoragePolicyAssignments.getSpecificAssignment({
    storagePolicyAssignmentId: "storagePolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storagePolicyAssignmentId: `string`<a id="storagepolicyassignmentid-string"></a>

The ID of the storage policy assignment.

#### 🔄 Return<a id="🔄-return"></a>

[StoragePolicyAssignment](./models/storage-policy-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage_policy_assignments/{storage_policy_assignment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.standardAndZonesStoragePolicyAssignments.listAssignments`<a id="boxstandardandzonesstoragepolicyassignmentslistassignments"></a>

Fetches all the storage policy assignment for an enterprise or user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAssignmentsResponse =
  await box.standardAndZonesStoragePolicyAssignments.listAssignments({
    resolvedForType: "user",
    resolvedForId: "resolvedForId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resolvedForType: `'user' | 'enterprise'`<a id="resolvedfortype-user--enterprise"></a>

The target type to return assignments for

##### resolvedForId: `string`<a id="resolvedforid-string"></a>

The ID of the user or enterprise to return assignments for

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

#### 🔄 Return<a id="🔄-return"></a>

[StoragePolicyAssignments](./models/storage-policy-assignments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage_policy_assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.standardAndZonesStoragePolicyAssignments.unassignStoragePolicy`<a id="boxstandardandzonesstoragepolicyassignmentsunassignstoragepolicy"></a>

Delete a storage policy assignment.

Deleting a storage policy assignment on a user
will have the user inherit the enterprise's default
storage policy.

There is a rate limit for calling this endpoint of only
twice per user in a 24 hour time frame.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unassignStoragePolicyResponse =
  await box.standardAndZonesStoragePolicyAssignments.unassignStoragePolicy({
    storagePolicyAssignmentId: "storagePolicyAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storagePolicyAssignmentId: `string`<a id="storagepolicyassignmentid-string"></a>

The ID of the storage policy assignment.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage_policy_assignments/{storage_policy_assignment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.standardAndZonesStoragePolicyAssignments.updateSpecificAssignment`<a id="boxstandardandzonesstoragepolicyassignmentsupdatespecificassignment"></a>

Updates a specific storage policy assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSpecificAssignmentResponse =
  await box.standardAndZonesStoragePolicyAssignments.updateSpecificAssignment({
    storagePolicyAssignmentId: "storagePolicyAssignmentId_example",
    storage_policy: {
      type: "storage_policy",
      id: "1434325",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### storage_policy: [`StandardAndZonesStoragePolicyAssignmentsUpdateSpecificAssignmentRequestStoragePolicy`](./models/standard-and-zones-storage-policy-assignments-update-specific-assignment-request-storage-policy.ts)<a id="storage_policy-standardandzonesstoragepolicyassignmentsupdatespecificassignmentrequeststoragepolicymodelsstandard-and-zones-storage-policy-assignments-update-specific-assignment-request-storage-policyts"></a>

##### storagePolicyAssignmentId: `string`<a id="storagepolicyassignmentid-string"></a>

The ID of the storage policy assignment.

#### 🔄 Return<a id="🔄-return"></a>

[StoragePolicyAssignment](./models/storage-policy-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage_policy_assignments/{storage_policy_assignment_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.taskAssignments.assignMultipleUsers`<a id="boxtaskassignmentsassignmultipleusers"></a>

Assigns a task to a user.

A task can be assigned to more than one user by creating multiple
assignments.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignMultipleUsersResponse =
  await box.taskAssignments.assignMultipleUsers({
    task: {
      id: "11446498",
      type: "task",
    },
    assign_to: {
      id: "3242343",
      login: "john@example.com",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### task: [`TaskAssignmentsAssignMultipleUsersRequestTask`](./models/task-assignments-assign-multiple-users-request-task.ts)<a id="task-taskassignmentsassignmultipleusersrequesttaskmodelstask-assignments-assign-multiple-users-request-taskts"></a>

##### assign_to: [`TaskAssignmentsAssignMultipleUsersRequestAssignTo`](./models/task-assignments-assign-multiple-users-request-assign-to.ts)<a id="assign_to-taskassignmentsassignmultipleusersrequestassigntomodelstask-assignments-assign-multiple-users-request-assign-tots"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TaskAssignment](./models/task-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_assignments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.taskAssignments.deleteSpecificAssignment`<a id="boxtaskassignmentsdeletespecificassignment"></a>

Deletes a specific task assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificAssignmentResponse =
  await box.taskAssignments.deleteSpecificAssignment({
    taskAssignmentId: "taskAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskAssignmentId: `string`<a id="taskassignmentid-string"></a>

The ID of the task assignment.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_assignments/{task_assignment_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.taskAssignments.getTaskAssignmentInfo`<a id="boxtaskassignmentsgettaskassignmentinfo"></a>

Retrieves information about a task assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTaskAssignmentInfoResponse =
  await box.taskAssignments.getTaskAssignmentInfo({
    taskAssignmentId: "taskAssignmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskAssignmentId: `string`<a id="taskassignmentid-string"></a>

The ID of the task assignment.

#### 🔄 Return<a id="🔄-return"></a>

[TaskAssignment](./models/task-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_assignments/{task_assignment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.taskAssignments.listForTask`<a id="boxtaskassignmentslistfortask"></a>

Lists all of the assignments for a given task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listForTaskResponse = await box.taskAssignments.listForTask({
  taskId: "taskId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskId: `string`<a id="taskid-string"></a>

The ID of the task.

#### 🔄 Return<a id="🔄-return"></a>

[TaskAssignments](./models/task-assignments.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_id}/assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.taskAssignments.updateStateAssignedToUser`<a id="boxtaskassignmentsupdatestateassignedtouser"></a>

Updates a task assignment. This endpoint can be
used to update the state of a task assigned to a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStateAssignedToUserResponse =
  await box.taskAssignments.updateStateAssignedToUser({
    taskAssignmentId: "taskAssignmentId_example",
    message: "Looks good to me",
    resolution_state: "completed",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskAssignmentId: `string`<a id="taskassignmentid-string"></a>

The ID of the task assignment.

##### message: `string`<a id="message-string"></a>

An optional message by the assignee that can be added to the task.

##### resolution_state: `string`<a id="resolution_state-string"></a>

The state of the task assigned to the user.  * For a task with an `action` value of `complete` this can be `incomplete` or `completed`. * For a task with an `action` of `review` this can be `incomplete`, `approved`, or `rejected`.

#### 🔄 Return<a id="🔄-return"></a>

[TaskAssignment](./models/task-assignment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/task_assignments/{task_assignment_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.tasks.getInfo`<a id="boxtasksgetinfo"></a>

Retrieves information about a specific task.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await box.tasks.getInfo({
  taskId: "taskId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskId: `string`<a id="taskid-string"></a>

The ID of the task.

#### 🔄 Return<a id="🔄-return"></a>

[Task](./models/task.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.tasks.listOnFile`<a id="boxtaskslistonfile"></a>

Retrieves a list of all the tasks for a file. This
endpoint does not support pagination.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOnFileResponse = await box.tasks.listOnFile({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[Tasks](./models/tasks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/tasks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.tasks.removeFile`<a id="boxtasksremovefile"></a>

Removes a task from a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFileResponse = await box.tasks.removeFile({
  taskId: "taskId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskId: `string`<a id="taskid-string"></a>

The ID of the task.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.tasks.tasks`<a id="boxtaskstasks"></a>

Creates a single task on a file. This task is not assigned to any user and
will need to be assigned separately.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const tasksResponse = await box.tasks.tasks({
  item: {
    id: "11446498",
    type: "file",
  },
  action: "review",
  message: "Please review",
  due_at: "2012-12-12T10:53:43-08:00",
  completion_rule: "all_assignees",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### item: [`PostTasksRequestItem`](./models/post-tasks-request-item.ts)<a id="item-posttasksrequestitemmodelspost-tasks-request-itemts"></a>

##### action: `string`<a id="action-string"></a>

The action the task assignee will be prompted to do. Must be  * `review` defines an approval task that can be approved or rejected * `complete` defines a general task which can be completed

##### message: `string`<a id="message-string"></a>

An optional message to include with the task.

##### due_at: `string`<a id="due_at-string"></a>

Defines when the task is due. Defaults to `null` if not provided.

##### completion_rule: `string`<a id="completion_rule-string"></a>

Defines which assignees need to complete this task before the task is considered completed.  * `all_assignees` (default) requires all assignees to review or approve the the task in order for it to be considered completed. * `any_assignee` accepts any one assignee to review or approve the the task in order for it to be considered completed.

#### 🔄 Return<a id="🔄-return"></a>

[Task](./models/task.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.tasks.updateTaskConfiguration`<a id="boxtasksupdatetaskconfiguration"></a>

Updates a task. This can be used to update a task's configuration, or to
update its completion state.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTaskConfigurationResponse = await box.tasks.updateTaskConfiguration(
  {
    taskId: "taskId_example",
    action: "review",
    message: "Please review",
    due_at: "2012-12-12T10:53:43-08:00",
    completion_rule: "all_assignees",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### taskId: `string`<a id="taskid-string"></a>

The ID of the task.

##### action: `string`<a id="action-string"></a>

The action the task assignee will be prompted to do. Must be  * `review` defines an approval task that can be approved or rejected * `complete` defines a general task which can be completed

##### message: `string`<a id="message-string"></a>

The message included with the task.

##### due_at: `string`<a id="due_at-string"></a>

When the task is due at.

##### completion_rule: `string`<a id="completion_rule-string"></a>

Defines which assignees need to complete this task before the task is considered completed.  * `all_assignees` (default) requires all assignees to review or approve the the task in order for it to be considered completed. * `any_assignee` accepts any one assignee to review or approve the the task in order for it to be considered completed.

#### 🔄 Return<a id="🔄-return"></a>

[Task](./models/task.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tasks/{task_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.termsOfService.createForEnterpriseAndType`<a id="boxtermsofservicecreateforenterpriseandtype"></a>

Creates a terms of service for a given enterprise
and type of user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createForEnterpriseAndTypeResponse =
  await box.termsOfService.createForEnterpriseAndType({
    status: "enabled",
    tos_type: "managed",
    text: "By collaborating on this file you are accepting...",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

Whether this terms of service is active.

##### text: `string`<a id="text-string"></a>

The terms of service text to display to users.  The text can be set to empty if the `status` is set to `disabled`.

##### tos_type: `string`<a id="tos_type-string"></a>

The type of user to set the terms of service for.

#### 🔄 Return<a id="🔄-return"></a>

[TermsOfService](./models/terms-of-service.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms_of_services` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.termsOfService.getSettings`<a id="boxtermsofservicegetsettings"></a>

Returns the current terms of service text and settings
for the enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSettingsResponse = await box.termsOfService.getSettings({
  tosType: "external",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tosType: `'external' | 'managed'`<a id="tostype-external--managed"></a>

Limits the results to the terms of service of the given type.

#### 🔄 Return<a id="🔄-return"></a>

[TermsOfServices](./models/terms-of-services.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms_of_services` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.termsOfService.getSpecific`<a id="boxtermsofservicegetspecific"></a>

Fetches a specific terms of service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificResponse = await box.termsOfService.getSpecific({
  termsOfServiceId: "termsOfServiceId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### termsOfServiceId: `string`<a id="termsofserviceid-string"></a>

The ID of the terms of service.

#### 🔄 Return<a id="🔄-return"></a>

[TermsOfService](./models/terms-of-service.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms_of_services/{terms_of_service_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.termsOfService.updateSpecificTerm`<a id="boxtermsofserviceupdatespecificterm"></a>

Updates a specific terms of service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSpecificTermResponse = await box.termsOfService.updateSpecificTerm({
  termsOfServiceId: "termsOfServiceId_example",
  status: "enabled",
  text: "By collaborating on this file you are accepting...",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

Whether this terms of service is active.

##### text: `string`<a id="text-string"></a>

The terms of service text to display to users.  The text can be set to empty if the `status` is set to `disabled`.

##### termsOfServiceId: `string`<a id="termsofserviceid-string"></a>

The ID of the terms of service.

#### 🔄 Return<a id="🔄-return"></a>

[TermsOfService](./models/terms-of-service.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms_of_services/{terms_of_service_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.termsOfServiceUserStatuses.createUserStatus`<a id="boxtermsofserviceuserstatusescreateuserstatus"></a>

Sets the status for a terms of service for a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserStatusResponse =
  await box.termsOfServiceUserStatuses.createUserStatus({
    tos: {
      type: "terms_of_service",
      id: "1232132",
    },
    user: {
      type: "user",
      id: "3423423",
    },
    is_accepted: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tos: [`TermsOfServiceUserStatusesCreateUserStatusRequestTos`](./models/terms-of-service-user-statuses-create-user-status-request-tos.ts)<a id="tos-termsofserviceuserstatusescreateuserstatusrequesttosmodelsterms-of-service-user-statuses-create-user-status-request-tosts"></a>

##### user: [`TermsOfServiceUserStatusesCreateUserStatusRequestUser`](./models/terms-of-service-user-statuses-create-user-status-request-user.ts)<a id="user-termsofserviceuserstatusescreateuserstatusrequestusermodelsterms-of-service-user-statuses-create-user-status-request-userts"></a>

##### is_accepted: `boolean`<a id="is_accepted-boolean"></a>

Whether the user has accepted the terms.

#### 🔄 Return<a id="🔄-return"></a>

[TermsOfServiceUserStatus](./models/terms-of-service-user-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms_of_service_user_statuses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.termsOfServiceUserStatuses.listUserStatuses`<a id="boxtermsofserviceuserstatuseslistuserstatuses"></a>

Retrieves an overview of users and their status for a
terms of service, including Whether they have accepted
the terms and when.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserStatusesResponse =
  await box.termsOfServiceUserStatuses.listUserStatuses({
    tosId: "tosId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tosId: `string`<a id="tosid-string"></a>

The ID of the terms of service.

##### userId: `string`<a id="userid-string"></a>

Limits results to the given user ID.

#### 🔄 Return<a id="🔄-return"></a>

[TermsOfServiceUserStatuses](./models/terms-of-service-user-statuses.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms_of_service_user_statuses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.termsOfServiceUserStatuses.updateUserStatus`<a id="boxtermsofserviceuserstatusesupdateuserstatus"></a>

Updates the status for a terms of service for a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserStatusResponse =
  await box.termsOfServiceUserStatuses.updateUserStatus({
    termsOfServiceUserStatusId: "termsOfServiceUserStatusId_example",
    is_accepted: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### is_accepted: `boolean`<a id="is_accepted-boolean"></a>

Whether the user has accepted the terms.

##### termsOfServiceUserStatusId: `string`<a id="termsofserviceuserstatusid-string"></a>

The ID of the terms of service status.

#### 🔄 Return<a id="🔄-return"></a>

[TermsOfServiceUserStatus](./models/terms-of-service-user-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms_of_service_user_statuses/{terms_of_service_user_status_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.transferFolders.toDestination`<a id="boxtransferfolderstodestination"></a>

Move all of the items (files, folders and workflows) owned by a user into
another user's account

Only the root folder (`0`) can be transferred.

Folders can only be moved across users by users with administrative
permissions.

All existing shared links and folder-level collaborations are transferred
during the operation. Please note that while collaborations at the individual
file-level are transferred during the operation, the collaborations are
deleted when the original user is deleted.

This call will be performed synchronously which might lead to a slow response
when the source user has a large number of items in all of its folders.

If the destination path has a metadata cascade policy attached to any of
the parent folders, a metadata cascade operation will be kicked off
asynchronously.

There is currently no way to check for when this operation is finished.

The destination folder's name will be in the format `{User}'s Files and
Folders`, where `{User}` is the display name of the user.

To make this API call your application will need to have the "Read and write
all files and folders stored in Box" scope enabled.

Please make sure the destination user has access to `Relay` or `Relay Lite`,
and has access to the files and folders involved in the workflows being
transferred.

Admins will receive an email when the operation is completed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toDestinationResponse = await box.transferFolders.toDestination({
  userId: "userId_example",
  owned_by: {
    id: "1232234",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### owned_by: [`TransferFoldersToDestinationRequestOwnedBy`](./models/transfer-folders-to-destination-request-owned-by.ts)<a id="owned_by-transferfolderstodestinationrequestownedbymodelstransfer-folders-to-destination-request-owned-byts"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### notify: `boolean`<a id="notify-boolean"></a>

Determines if users should receive email notification for the action performed.

#### 🔄 Return<a id="🔄-return"></a>

[FolderFull](./models/folder-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/folders/0` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedFiles.getFile`<a id="boxtrashedfilesgetfile"></a>

Retrieves a file that has been moved to the trash.

Please note that only if the file itself has been moved to the
trash can it be retrieved with this API call. If instead one of
its parent folders was moved to the trash, only that folder
can be inspected using the
[`GET /folders/:id/trash`](e://get_folders_id_trash) API.

To list all items that have been moved to the trash, please
use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileResponse = await box.trashedFiles.getFile({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[TrashFile](./models/trash-file.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/trash` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedFiles.permanentlyRemoveFile`<a id="boxtrashedfilespermanentlyremovefile"></a>

Permanently deletes a file that is in the trash.
This action cannot be undone.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const permanentlyRemoveFileResponse =
  await box.trashedFiles.permanentlyRemoveFile({
    fileId: "fileId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/trash` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedFiles.restoreFile`<a id="boxtrashedfilesrestorefile"></a>

Restores a file that has been moved to the trash.

An optional new parent ID can be provided to restore the file to in case the
original folder has been deleted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restoreFileResponse = await box.trashedFiles.restoreFile({
  fileId: "fileId_example",
  name: "Restored.docx",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### name: `string`<a id="name-string"></a>

An optional new name for the file.

##### parent: [`TrashedFilesRestoreFileRequestParent`](./models/trashed-files-restore-file-request-parent.ts)<a id="parent-trashedfilesrestorefilerequestparentmodelstrashed-files-restore-file-request-parentts"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[TrashFileRestored](./models/trash-file-restored.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedFolders.getdFolder`<a id="boxtrashedfoldersgetdfolder"></a>

Retrieves a folder that has been moved to the trash.

Please note that only if the folder itself has been moved to the
trash can it be retrieved with this API call. If instead one of
its parent folders was moved to the trash, only that folder
can be inspected using the
[`GET /folders/:id/trash`](e://get_folders_id_trash) API.

To list all items that have been moved to the trash, please
use the [`GET /folders/trash/items`](e://get-folders-trash-items/)
API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getdFolderResponse = await box.trashedFolders.getdFolder({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[TrashFolder](./models/trash-folder.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/trash` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedFolders.permanentlyRemoveFolder`<a id="boxtrashedfolderspermanentlyremovefolder"></a>

Permanently deletes a folder that is in the trash.
This action cannot be undone.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const permanentlyRemoveFolderResponse =
  await box.trashedFolders.permanentlyRemoveFolder({
    folderId: "folderId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/trash` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedFolders.restoreFolder`<a id="boxtrashedfoldersrestorefolder"></a>

Restores a folder that has been moved to the trash.

An optional new parent ID can be provided to restore the folder to in case the
original folder has been deleted.

# Folder locking<a id="folder-locking"></a>

During this operation, part of the file tree will be locked, mainly
the source folder and all of its descendants, as well as the destination
folder.

For the duration of the operation, no other move, copy, delete, or restore
operation can performed on any of the locked folders.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restoreFolderResponse = await box.trashedFolders.restoreFolder({
  folderId: "folderId_example",
  name: "Restored Photos",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### name: `string`<a id="name-string"></a>

An optional new name for the folder.

##### parent: [`TrashedFoldersRestoreFolderRequestParent`](./models/trashed-folders-restore-folder-request-parent.ts)<a id="parent-trashedfoldersrestorefolderrequestparentmodelstrashed-folders-restore-folder-request-parentts"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[TrashFolderRestored](./models/trash-folder-restored.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedItems.listRetrievedItems`<a id="boxtrasheditemslistretrieveditems"></a>

Retrieves the files and folders that have been moved
to the trash.

Any attribute in the full files or folders objects can be passed
in with the `fields` parameter to retrieve those specific
attributes that are not returned by default.

This endpoint defaults to use offset-based pagination, yet also supports
marker-based pagination using the `marker` parameter.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRetrievedItemsResponse = await box.trashedItems.listRetrievedItems({
  offset: 0,
  direction: "ASC",
  sort: "name",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### usemarker: `boolean`<a id="usemarker-boolean"></a>

Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time.  By setting this value to true, the API will return a `marker` field that can be passed as a parameter to this endpoint to get the next page of the response.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### direction: `'ASC' | 'DESC'`<a id="direction-asc--desc"></a>

The direction to sort results in. This can be either in alphabetical ascending (`ASC`) or descending (`DESC`) order.

##### sort: `'name' | 'date' | 'size'`<a id="sort-name--date--size"></a>

Defines the **second** attribute by which items are sorted.  Items are always sorted by their `type` first, with folders listed before files, and files listed before web links.  This parameter is not supported when using marker-based pagination.

#### 🔄 Return<a id="🔄-return"></a>

[Items](./models/items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/trash/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedWebLinks.getTrashedLink`<a id="boxtrashedweblinksgettrashedlink"></a>

Retrieves a web link that has been moved to the trash.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTrashedLinkResponse = await box.trashedWebLinks.getTrashedLink({
  webLinkId: "webLinkId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[TrashWebLink](./models/trash-web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}/trash` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedWebLinks.permanentlyRemove`<a id="boxtrashedweblinkspermanentlyremove"></a>

Permanently deletes a web link that is in the trash.
This action cannot be undone.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const permanentlyRemoveResponse = await box.trashedWebLinks.permanentlyRemove({
  webLinkId: "webLinkId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}/trash` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.trashedWebLinks.restoreWebLink`<a id="boxtrashedweblinksrestoreweblink"></a>

Restores a web link that has been moved to the trash.

An optional new parent ID can be provided to restore the  web link to in case
the original folder has been deleted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restoreWebLinkResponse = await box.trashedWebLinks.restoreWebLink({
  webLinkId: "webLinkId_example",
  name: "Restored.docx",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### name: `string`<a id="name-string"></a>

An optional new name for the web link.

##### parent: [`TrashedWebLinksRestoreWebLinkRequestParent`](./models/trashed-web-links-restore-web-link-request-parent.ts)<a id="parent-trashedweblinksrestoreweblinkrequestparentmodelstrashed-web-links-restore-web-link-request-parentts"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[TrashWebLinkRestored](./models/trash-web-link-restored.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploads.fileContentUpdate`<a id="boxuploadsfilecontentupdate"></a>

Update a file's content. For file sizes over 50MB we recommend
using the Chunk Upload APIs.

# Request body order<a id="request-body-order"></a>

The `attributes` part of the body must come **before** the
`file` part. Requests that do not follow this format when
uploading the file will receive a HTTP `400` error with a
`metadata_after_file_contents` error code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fileContentUpdateResponse = await box.uploads.fileContentUpdate({
  fileId: "fileId_example",
  attributes: {
    name: "Photo 2.0.png",
    content_modified_at: "2012-12-12T10:53:43-08:00",
  },
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### attributes: [`UploadsFileContentUpdateRequestAttributes`](./models/uploads-file-content-update-request-attributes.ts)<a id="attributes-uploadsfilecontentupdaterequestattributesmodelsuploads-file-content-update-request-attributests"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The content of the file to upload to Box.  <Message warning>    The `attributes` part of the body must come **before** the   `file` part. Requests that do not follow this format when   uploading the file will receive a HTTP `400` error with a   `metadata_after_file_contents` error code.  </Message>

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### contentMd5: `string`<a id="contentmd5-string"></a>

An optional header containing the SHA1 hash of the file to ensure that the file was not corrupted in transit.

#### 🔄 Return<a id="🔄-return"></a>

[Files](./models/files.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/content` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploads.smallFile`<a id="boxuploadssmallfile"></a>

Uploads a small file to Box. For file sizes over 50MB we recommend
using the Chunk Upload APIs.

# Request body order<a id="request-body-order"></a>

The `attributes` part of the body must come **before** the
`file` part. Requests that do not follow this format when
uploading the file will receive a HTTP `400` error with a
`metadata_after_file_contents` error code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const smallFileResponse = await box.uploads.smallFile({
  attributes: {
    name: "Photo.png",
    parent: {
      id: "124132",
    },
    content_created_at: "2012-12-12T10:53:43-08:00",
    content_modified_at: "2012-12-12T10:53:43-08:00",
  },
  file: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### attributes: [`UploadsSmallFileRequestAttributes`](./models/uploads-small-file-request-attributes.ts)<a id="attributes-uploadssmallfilerequestattributesmodelsuploads-small-file-request-attributests"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The content of the file to upload to Box.  <Message warning>    The `attributes` part of the body must come **before** the   `file` part. Requests that do not follow this format when   uploading the file will receive a HTTP `400` error with a   `metadata_after_file_contents` error code.  </Message>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### contentMd5: `string`<a id="contentmd5-string"></a>

An optional header containing the SHA1 hash of the file to ensure that the file was not corrupted in transit.

#### 🔄 Return<a id="🔄-return"></a>

[Files](./models/files.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/content` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploadsChunked.commitSession`<a id="boxuploadschunkedcommitsession"></a>

Close an upload session and create a file from the
uploaded chunks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const commitSessionResponse = await box.uploadsChunked.commitSession({
  uploadSessionId: "uploadSessionId_example",
  digest: "digest_example",
  parts: [{}],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parts: [`UploadPart`](./models/upload-part.ts)[]<a id="parts-uploadpartmodelsupload-partts"></a>

The list details for the uploaded parts

##### uploadSessionId: `string`<a id="uploadsessionid-string"></a>

The ID of the upload session.

##### digest: `string`<a id="digest-string"></a>

The [RFC3230][1] message digest of the whole file.  Only SHA1 is supported. The SHA1 digest must be Base64 encoded. The format of this header is as `sha=BASE64_ENCODED_DIGEST`.  [1]: https://tools.ietf.org/html/rfc3230

##### ifMatch: `string`<a id="ifmatch-string"></a>

Ensures this item hasn\'t recently changed before making changes.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `412 Precondition Failed` if it has changed since.

##### ifNoneMatch: `string`<a id="ifnonematch-string"></a>

Ensures an item is only returned if it has changed.  Pass in the item\'s last observed `etag` value into this header and the endpoint will fail with a `304 Not Modified` if the item has not changed since.

#### 🔄 Return<a id="🔄-return"></a>

[Files](./models/files.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/upload_sessions/{upload_session_id}/commit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploadsChunked.createSessionForUpload`<a id="boxuploadschunkedcreatesessionforupload"></a>

Creates an upload session for a new file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionForUploadResponse =
  await box.uploadsChunked.createSessionForUpload({
    folder_id: "0",
    file_size: 104857600,
    file_name: "Project.mov",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folder_id: `string`<a id="folder_id-string"></a>

The ID of the folder to upload the new file to.

##### file_size: `number`<a id="file_size-number"></a>

The total number of bytes of the file to be uploaded

##### file_name: `string`<a id="file_name-string"></a>

The name of new file

#### 🔄 Return<a id="🔄-return"></a>

[UploadSession](./models/upload-session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/upload_sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploadsChunked.createSessionForUpload_0`<a id="boxuploadschunkedcreatesessionforupload_0"></a>

Creates an upload session for an existing file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionForUpload_0Response =
  await box.uploadsChunked.createSessionForUpload_0({
    fileId: "fileId_example",
    file_size: 104857600,
    file_name: "Project.mov",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_size: `number`<a id="file_size-number"></a>

The total number of bytes of the file to be uploaded

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

##### file_name: `string`<a id="file_name-string"></a>

The optional new name of new file

#### 🔄 Return<a id="🔄-return"></a>

[UploadSession](./models/upload-session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/upload_sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploadsChunked.filePartUpdate`<a id="boxuploadschunkedfilepartupdate"></a>

Updates a chunk of an upload session for a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const filePartUpdateResponse = await box.uploadsChunked.filePartUpdate({
  uploadSessionId: "D5E3F7A",
  digest: "sha=fpRyg5eVQletdZqEKaFlqwBXJzM=",
  contentRange: "bytes 8388608-16777215/445856194",
  requestBody: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadSessionId: `string`<a id="uploadsessionid-string"></a>

The ID of the upload session.

##### digest: `string`<a id="digest-string"></a>

The [RFC3230][1] message digest of the chunk uploaded.  Only SHA1 is supported. The SHA1 digest must be base64 encoded. The format of this header is as `sha=BASE64_ENCODED_DIGEST`.  To get the value for the `SHA` digest, use the openSSL command to encode the file part: `openssl sha1 -binary <FILE_PART_NAME> | base64`  [1]: https://tools.ietf.org/html/rfc3230

##### contentRange: `string`<a id="contentrange-string"></a>

The byte range of the chunk.  Must not overlap with the range of a part already uploaded this session. Each part’s size must be exactly equal in size to the part size specified in the upload session that you created. One exception is the last part of the file, as this can be smaller.  When providing the value for `content-range`, remember that:  * The lower bound of each part\'s byte range   must be a multiple of the part size. * The higher bound must be a multiple of the part size - 1.

##### requestBody: `Uint8Array | File | buffer.File`<a id="requestbody-uint8array--file--bufferfile"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UploadedPart](./models/uploaded-part.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/upload_sessions/{upload_session_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploadsChunked.info`<a id="boxuploadschunkedinfo"></a>

Return information about an upload session.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const infoResponse = await box.uploadsChunked.info({
  uploadSessionId: "uploadSessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadSessionId: `string`<a id="uploadsessionid-string"></a>

The ID of the upload session.

#### 🔄 Return<a id="🔄-return"></a>

[UploadSession](./models/upload-session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/upload_sessions/{upload_session_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploadsChunked.listParts`<a id="boxuploadschunkedlistparts"></a>

Return a list of the chunks uploaded to the upload
session so far.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPartsResponse = await box.uploadsChunked.listParts({
  uploadSessionId: "uploadSessionId_example",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadSessionId: `string`<a id="uploadsessionid-string"></a>

The ID of the upload session.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[UploadParts](./models/upload-parts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/upload_sessions/{upload_session_id}/parts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.uploadsChunked.removeUploadSession`<a id="boxuploadschunkedremoveuploadsession"></a>

Abort an upload session and discard all data uploaded.

This cannot be reversed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUploadSessionResponse =
  await box.uploadsChunked.removeUploadSession({
    uploadSessionId: "uploadSessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uploadSessionId: `string`<a id="uploadsessionid-string"></a>

The ID of the upload session.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/upload_sessions/{upload_session_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.userAvatars.addOrUpdateImage`<a id="boxuseravatarsaddorupdateimage"></a>

Adds or updates a user avatar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrUpdateImageResponse = await box.userAvatars.addOrUpdateImage({
  userId: "userId_example",
  pic: fs.readFileSync("/path/to/file"),
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

##### pic: `Uint8Array | File | buffer.File`<a id="pic-uint8array--file--bufferfile"></a>

The image file to be uploaded to Box. Accepted file extensions are `.jpg` or `.png`. The maximum file size is 1MB.

#### 🔄 Return<a id="🔄-return"></a>

[UserAvatar](./models/user-avatar.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/avatar` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.userAvatars.getImage`<a id="boxuseravatarsgetimage"></a>

Retrieves an image of a the user's avatar.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getImageResponse = await box.userAvatars.getImage({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/avatar` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.userAvatars.removeExisting`<a id="boxuseravatarsremoveexisting"></a>

Removes an existing user avatar.
You cannot reverse this operation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeExistingResponse = await box.userAvatars.removeExisting({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}/avatar` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.users.deleteUser`<a id="boxusersdeleteuser"></a>

Deletes a user. By default this will fail if the user
still owns any content. Move their owned content first
before proceeding, or use the `force` field to delete
the user and their files.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserResponse = await box.users.deleteUser({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

##### notify: `boolean`<a id="notify-boolean"></a>

Whether the user will receive email notification of the deletion

##### force: `boolean`<a id="force-boolean"></a>

Whether the user should be deleted even if this user still own files

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.users.getCurrentUser`<a id="boxusersgetcurrentuser"></a>

Retrieves information about the user who is currently authenticated.

In the case of a client-side authenticated OAuth 2.0 application
this will be the user who authorized the app.

In the case of a JWT, server-side authenticated application
this will be the service account that belongs to the application
by default.

Use the `As-User` header to change who this API call is made on behalf of.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentUserResponse = await box.users.getCurrentUser({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[UserFull](./models/user-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.users.getUserInfo`<a id="boxusersgetuserinfo"></a>

Retrieves information about a user in the enterprise.

The application and the authenticated user need to
have the permission to look up users in the entire
enterprise.

This endpoint also returns a limited set of information
for external users who are collaborated on content
owned by the enterprise for authenticated users with the
right scopes. In this case, disallowed fields will return
null instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInfoResponse = await box.users.getUserInfo({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[UserFull](./models/user-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.users.updateManagedUser`<a id="boxusersupdatemanageduser"></a>

Updates a managed or app user in an enterprise. This endpoint
is only available to users and applications with the right
admin permissions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateManagedUserResponse = await box.users.updateManagedUser({
  userId: "userId_example",
  notify: true,
  name: "Aaron Levie",
  login: "somename@box.com",
  role: "user",
  language: "en",
  is_sync_enabled: true,
  job_title: "CEO",
  phone: "6509241374",
  address: "900 Jefferson Ave, Redwood City, CA 94063",
  can_see_managed_users: true,
  timezone: "Africa/Bujumbura",
  is_external_collab_restricted: true,
  is_exempt_from_device_limits: true,
  is_exempt_from_login_verification: true,
  is_password_reset_required: true,
  status: "active",
  space_amount: 11345156112,
  external_app_user_id: "my-user-1234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user.

##### enterprise: `string`<a id="enterprise-string"></a>

Set this to `null` to roll the user out of the enterprise and make them a free user

##### notify: `boolean`<a id="notify-boolean"></a>

Whether the user should receive an email when they are rolled out of an enterprise

##### name: `string`<a id="name-string"></a>

The name of the user

##### login: `string`<a id="login-string"></a>

The email address the user uses to log in  Note: If the target user\\\'s email is not confirmed, then the primary login address cannot be changed.

##### role: `string`<a id="role-string"></a>

The user’s enterprise role

##### language: `string`<a id="language-string"></a>

The language of the user, formatted in modified version of the [ISO 639-1](https://raw.githubusercontent.com) format.

##### is_sync_enabled: `boolean`<a id="is_sync_enabled-boolean"></a>

Whether the user can use Box Sync

##### job_title: `string`<a id="job_title-string"></a>

The user’s job title

##### phone: `string`<a id="phone-string"></a>

The user’s phone number

##### address: `string`<a id="address-string"></a>

The user’s address

##### tracking_codes: [`TrackingCode`](./models/tracking-code.ts)[]<a id="tracking_codes-trackingcodemodelstracking-codets"></a>

Tracking codes allow an admin to generate reports from the admin console and assign an attribute to a specific group of users. This setting must be enabled for an enterprise before it can be used.

##### can_see_managed_users: `boolean`<a id="can_see_managed_users-boolean"></a>

Whether the user can see other enterprise users in their contact list

##### timezone: `string`<a id="timezone-string"></a>

The user\\\'s timezone

##### is_external_collab_restricted: `boolean`<a id="is_external_collab_restricted-boolean"></a>

Whether the user is allowed to collaborate with users outside their enterprise

##### is_exempt_from_device_limits: `boolean`<a id="is_exempt_from_device_limits-boolean"></a>

Whether to exempt the user from enterprise device limits

##### is_exempt_from_login_verification: `boolean`<a id="is_exempt_from_login_verification-boolean"></a>

Whether the user must use two-factor authentication

##### is_password_reset_required: `boolean`<a id="is_password_reset_required-boolean"></a>

Whether the user is required to reset their password

##### status: `string`<a id="status-string"></a>

The user\\\'s account status

##### space_amount: `number`<a id="space_amount-number"></a>

The user’s total available space in bytes. Set this to `-1` to indicate unlimited storage.

##### notification_email: [`UsersUpdateManagedUserRequestNotificationEmail`](./models/users-update-managed-user-request-notification-email.ts)<a id="notification_email-usersupdatemanageduserrequestnotificationemailmodelsusers-update-managed-user-request-notification-emailts"></a>

##### external_app_user_id: `string`<a id="external_app_user_id-string"></a>

An external identifier for an app user, which can be used to look up the user. This can be used to tie user IDs from external identity providers to Box users.  Note: In order to update this field, you need to request a token using the application that created the app user.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[UserFull](./models/user-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{user_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.users.users`<a id="boxusersusers"></a>

Returns a list of all users for the Enterprise along with their `user_id`,
`public_name`, and `login`.

The application and the authenticated user need to
have the permission to look up users in the entire
enterprise.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const usersResponse = await box.users.users({
  userType: "all",
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filterTerm: `string`<a id="filterterm-string"></a>

Limits the results to only users who\'s `name` or `login` start with the search term.  For externally managed users, the search term needs to completely match the in order to find the user, and it will only return one user at a time.

##### userType: `'all' | 'managed' | 'external'`<a id="usertype-all--managed--external"></a>

Limits the results to the kind of user specified.  * `all` returns every kind of user for whom the   `login` or `name` partially matches the   `filter_term`. It will only return an external user   if the login matches the `filter_term` completely,   and in that case it will only return that user. * `managed` returns all managed and app users for whom   the `login` or `name` partially matches the   `filter_term`. * `external` returns all external users for whom the   `login` matches the `filter_term` exactly.

##### externalAppUserId: `string`<a id="externalappuserid-string"></a>

Limits the results to app users with the given `external_app_user_id` value.  When creating an app user, an `external_app_user_id` value can be set. This value can then be used in this endpoint to find any users that match that `external_app_user_id` value.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

##### offset: `number`<a id="offset-number"></a>

The offset of the item at which to begin the response.  Queries with offset parameter value exceeding 10000 will be rejected with a 400 response.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### usemarker: `boolean`<a id="usemarker-boolean"></a>

Specifies whether to use marker-based pagination instead of offset-based pagination. Only one pagination method can be used at a time.  By setting this value to true, the API will return a `marker` field that can be passed as a parameter to this endpoint to get the next page of the response.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.users.users_0`<a id="boxusersusers_0"></a>

Creates a new managed user in an enterprise. This endpoint
is only available to users and applications with the right
admin permissions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const users_0Response = await box.users.users_0({
  name: "Aaron Levie",
  login: "boss@box.com",
  is_platform_access_only: true,
  role: "user",
  language: "en",
  is_sync_enabled: true,
  job_title: "CEO",
  phone: "6509241374",
  address: "900 Jefferson Ave, Redwood City, CA 94063",
  space_amount: 11345156112,
  can_see_managed_users: true,
  timezone: "Africa/Bujumbura",
  is_external_collab_restricted: true,
  is_exempt_from_device_limits: true,
  is_exempt_from_login_verification: true,
  status: "active",
  external_app_user_id: "my-user-1234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of the user

##### login: `string`<a id="login-string"></a>

The email address the user uses to log in  Required, unless `is_platform_access_only` is set to `true`.

##### is_platform_access_only: `boolean`<a id="is_platform_access_only-boolean"></a>

Specifies that the user is an app user.

##### role: `string`<a id="role-string"></a>

The user’s enterprise role

##### language: `string`<a id="language-string"></a>

The language of the user, formatted in modified version of the [ISO 639-1](https://raw.githubusercontent.com) format.

##### is_sync_enabled: `boolean`<a id="is_sync_enabled-boolean"></a>

Whether the user can use Box Sync

##### job_title: `string`<a id="job_title-string"></a>

The user’s job title

##### phone: `string`<a id="phone-string"></a>

The user’s phone number

##### address: `string`<a id="address-string"></a>

The user’s address

##### space_amount: `number`<a id="space_amount-number"></a>

The user’s total available space in bytes. Set this to `-1` to indicate unlimited storage.

##### tracking_codes: [`TrackingCode`](./models/tracking-code.ts)[]<a id="tracking_codes-trackingcodemodelstracking-codets"></a>

Tracking codes allow an admin to generate reports from the admin console and assign an attribute to a specific group of users. This setting must be enabled for an enterprise before it can be used.

##### can_see_managed_users: `boolean`<a id="can_see_managed_users-boolean"></a>

Whether the user can see other enterprise users in their contact list

##### timezone: `string`<a id="timezone-string"></a>

The user\\\'s timezone

##### is_external_collab_restricted: `boolean`<a id="is_external_collab_restricted-boolean"></a>

Whether the user is allowed to collaborate with users outside their enterprise

##### is_exempt_from_device_limits: `boolean`<a id="is_exempt_from_device_limits-boolean"></a>

Whether to exempt the user from enterprise device limits

##### is_exempt_from_login_verification: `boolean`<a id="is_exempt_from_login_verification-boolean"></a>

Whether the user must use two-factor authentication

##### status: `string`<a id="status-string"></a>

The user\\\'s account status

##### external_app_user_id: `string`<a id="external_app_user_id-string"></a>

An external identifier for an app user, which can be used to look up the user. This can be used to tie user IDs from external identity providers to Box users.

##### fields: `string`[]<a id="fields-string"></a>

A comma-separated list of attributes to include in the response. This can be used to request fields that are not normally returned in a standard response.  Be aware that specifying this parameter will have the effect that none of the standard fields are returned in the response unless explicitly specified, instead only fields for the mini representation are returned, additional to the fields requested.

#### 🔄 Return<a id="🔄-return"></a>

[UserFull](./models/user-full.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.watermarksFiles.applyWatermarkToFile`<a id="boxwatermarksfilesapplywatermarktofile"></a>

Applies or update a watermark on a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const applyWatermarkToFileResponse =
  await box.watermarksFiles.applyWatermarkToFile({
    fileId: "fileId_example",
    watermark: {
      imprint: "default",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### watermark: [`WatermarksFilesApplyWatermarkToFileRequestWatermark`](./models/watermarks-files-apply-watermark-to-file-request-watermark.ts)<a id="watermark-watermarksfilesapplywatermarktofilerequestwatermarkmodelswatermarks-files-apply-watermark-to-file-request-watermarkts"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[Watermark](./models/watermark.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/watermark` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.watermarksFiles.get`<a id="boxwatermarksfilesget"></a>

Retrieve the watermark for a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await box.watermarksFiles.get({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🔄 Return<a id="🔄-return"></a>

[Watermark](./models/watermark.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/watermark` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.watermarksFiles.removeWatermark`<a id="boxwatermarksfilesremovewatermark"></a>

Removes the watermark from a file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeWatermarkResponse = await box.watermarksFiles.removeWatermark({
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/files/123` the `file_id` is `123`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/files/{file_id}/watermark` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.watermarksFolders.applyToFolder`<a id="boxwatermarksfoldersapplytofolder"></a>

Applies or update a watermark on a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const applyToFolderResponse = await box.watermarksFolders.applyToFolder({
  folderId: "folderId_example",
  watermark: {
    imprint: "default",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### watermark: [`WatermarksFoldersApplyToFolderRequestWatermark`](./models/watermarks-folders-apply-to-folder-request-watermark.ts)<a id="watermark-watermarksfoldersapplytofolderrequestwatermarkmodelswatermarks-folders-apply-to-folder-request-watermarkts"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🔄 Return<a id="🔄-return"></a>

[Watermark](./models/watermark.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/watermark` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.watermarksFolders.getFolderWatermark`<a id="boxwatermarksfoldersgetfolderwatermark"></a>

Retrieve the watermark for a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFolderWatermarkResponse =
  await box.watermarksFolders.getFolderWatermark({
    folderId: "folderId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🔄 Return<a id="🔄-return"></a>

[Watermark](./models/watermark.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/watermark` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.watermarksFolders.removeFolderWatermark`<a id="boxwatermarksfoldersremovefolderwatermark"></a>

Removes the watermark from a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFolderWatermarkResponse =
  await box.watermarksFolders.removeFolderWatermark({
    folderId: "folderId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/folders/{folder_id}/watermark` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webLinks.createObject`<a id="boxweblinkscreateobject"></a>

Creates a web link object within a folder.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createObjectResponse = await box.webLinks.createObject({
  description: "Cloud Content Management",
  url: "https://box.com",
  parent: {
    id: "0",
  },
  name: "Box Website",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

The URL that this web link links to. Must start with `\\\"http://\\\"` or `\\\"https://\\\"`.

##### parent: [`WebLinksCreateObjectRequestParent`](./models/web-links-create-object-request-parent.ts)<a id="parent-weblinkscreateobjectrequestparentmodelsweb-links-create-object-request-parentts"></a>

##### description: `string`<a id="description-string"></a>

Description of the web link.

##### name: `string`<a id="name-string"></a>

Name of the web link. Defaults to the URL if not set.

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webLinks.getInformation`<a id="boxweblinksgetinformation"></a>

Retrieve information about a web link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await box.webLinks.getInformation({
  webLinkId: "webLinkId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### boxapi: `string`<a id="boxapi-string"></a>

The URL, and optional password, for the shared link of this item.  This header can be used to access items that have not been explicitly shared with a user.  Use the format `shared_link=[link]` or if a password is required then use `shared_link=[link]&shared_link_password=[password]`.  This header can be used on the file or folder shared, as well as on any files or folders nested within the item.

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webLinks.removeLink`<a id="boxweblinksremovelink"></a>

Deletes a web link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLinkResponse = await box.webLinks.removeLink({
  webLinkId: "webLinkId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webLinks.updateObject`<a id="boxweblinksupdateobject"></a>

Updates a web link object.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateObjectResponse = await box.webLinks.updateObject({
  webLinkId: "webLinkId_example",
  description: "Cloud Content Management",
  url: "https://box.com",
  name: "Box Website",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webLinkId: `string`<a id="weblinkid-string"></a>

The ID of the web link.

##### description: `string`<a id="description-string"></a>

A new description of the web link.

##### url: `string`<a id="url-string"></a>

The new URL that the web link links to. Must start with `\\\"http://\\\"` or `\\\"https://\\\"`.

##### parent: [`WebLinksUpdateObjectRequestParent`](./models/web-links-update-object-request-parent.ts)<a id="parent-weblinksupdateobjectrequestparentmodelsweb-links-update-object-request-parentts"></a>

##### name: `string`<a id="name-string"></a>

A new name for the web link. Defaults to the URL if not set.

##### shared_link: [`WebLinksUpdateObjectRequestSharedLink`](./models/web-links-update-object-request-shared-link.ts)<a id="shared_link-weblinksupdateobjectrequestsharedlinkmodelsweb-links-update-object-request-shared-linkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebLink](./models/web-link.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_links/{web_link_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webhooks.getSpecificWebhook`<a id="boxwebhooksgetspecificwebhook"></a>

Retrieves a specific webhook

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificWebhookResponse = await box.webhooks.getSpecificWebhook({
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

The ID of the webhook.

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhook_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webhooks.remove`<a id="boxwebhooksremove"></a>

Deletes a webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeResponse = await box.webhooks.remove({
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

The ID of the webhook.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webhooks.updateWebhook`<a id="boxwebhooksupdatewebhook"></a>

Updates a webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookResponse = await box.webhooks.updateWebhook({
  webhookId: "webhookId_example",
  address: "https://example.com/webhooks",
  triggers: ["FILE.UPLOADED"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `string`<a id="webhookid-string"></a>

The ID of the webhook.

##### target: [`WebhooksUpdateWebhookRequestTarget`](./models/webhooks-update-webhook-request-target.ts)<a id="target-webhooksupdatewebhookrequesttargetmodelswebhooks-update-webhook-request-targetts"></a>

##### address: `string`<a id="address-string"></a>

The URL that is notified by this webhook

##### triggers: `string`[]<a id="triggers-string"></a>

An array of event names that this webhook is to be triggered for

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{webhook_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webhooks.webhooks`<a id="boxwebhookswebhooks"></a>

Returns all defined webhooks for the requesting application.

This API only returns webhooks that are applied to files or folders that are
owned by the authenticated user. This means that an admin can not see webhooks
created by a service account unless the admin has access to those folders, and
vice versa.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const webhooksResponse = await box.webhooks.webhooks({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

#### 🔄 Return<a id="🔄-return"></a>

[Webhooks](./models/webhooks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.webhooks.webhooks_0`<a id="boxwebhookswebhooks_0"></a>

Creates a webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const webhooks_0Response = await box.webhooks.webhooks_0({
  target: {
    id: "1231232",
    type: "file",
  },
  address: "https://example.com/webhooks",
  triggers: ["FILE.UPLOADED"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### target: [`PostWebhooksRequestTarget`](./models/post-webhooks-request-target.ts)<a id="target-postwebhooksrequesttargetmodelspost-webhooks-request-targetts"></a>

##### address: `string`<a id="address-string"></a>

The URL that is notified by this webhook

##### triggers: `string`[]<a id="triggers-string"></a>

An array of event names that this webhook is to be triggered for

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.workflows.startBasedOnRequest`<a id="boxworkflowsstartbasedonrequest"></a>

Initiates a flow with a trigger type of `WORKFLOW_MANUAL_START`.

You application must be authorized to use the `Manage Box Relay` application
scope within the developer console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const startBasedOnRequestResponse = await box.workflows.startBasedOnRequest({
  workflowId: "workflowId_example",
  type: "workflow_parameters",
  flow: {
    type: "flow",
    id: "123456789",
  },
  files: [
    {
      type: "file",
      id: "12345678",
    },
  ],
  folder: {
    type: "folder",
    id: "87654321",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### flow: [`WorkflowsStartBasedOnRequestRequestFlow`](./models/workflows-start-based-on-request-request-flow.ts)<a id="flow-workflowsstartbasedonrequestrequestflowmodelsworkflows-start-based-on-request-request-flowts"></a>

##### files: [`WorkflowsStartBasedOnRequestRequestFilesInner`](./models/workflows-start-based-on-request-request-files-inner.ts)[]<a id="files-workflowsstartbasedonrequestrequestfilesinnermodelsworkflows-start-based-on-request-request-files-innerts"></a>

The array of files for which the workflow should start. All files must be in the workflow\\\'s configured folder.

##### folder: [`WorkflowsStartBasedOnRequestRequestFolder`](./models/workflows-start-based-on-request-request-folder.ts)<a id="folder-workflowsstartbasedonrequestrequestfoldermodelsworkflows-start-based-on-request-request-folderts"></a>

##### workflowId: `string`<a id="workflowid-string"></a>

The ID of the workflow.

##### type: `string`<a id="type-string"></a>

The type of the parameters object

##### outcomes: [`Outcome`](./models/outcome.ts)[]<a id="outcomes-outcomemodelsoutcomets"></a>

A configurable outcome the workflow should complete.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflows/{workflow_id}/start` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.workflows.workflows`<a id="boxworkflowsworkflows"></a>

Returns list of workflows that act on a given `folder ID`, and
have a flow with a trigger type of `WORKFLOW_MANUAL_START`.

You application must be authorized to use the `Manage Box Relay` application
scope within the developer console in to use this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const workflowsResponse = await box.workflows.workflows({
  folderId: "folderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### folderId: `string`<a id="folderid-string"></a>

The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://_*.app.box.com/folder/123` the `folder_id` is `123`.  The root folder of a Box account is always represented by the ID `0`.

##### triggerType: `string`<a id="triggertype-string"></a>

Type of trigger to search for.

##### limit: `number`<a id="limit-number"></a>

The maximum number of items to return per page.

##### marker: `string`<a id="marker-string"></a>

Defines the position marker at which to begin returning results. This is used when paginating using marker-based pagination.  This requires `usemarker` to be set to `true`.

#### 🔄 Return<a id="🔄-return"></a>

[Workflows](./models/workflows.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflows` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.zipDownloads.createRequest`<a id="boxzipdownloadscreaterequest"></a>

Creates a request to download multiple files and folders as a single `zip`
archive file. This API does not return the archive but instead performs all
the checks to ensure that the user has access to all the items, and then
returns a `download_url` and a `status_url` that can be used to download the
archive.

The limit for an archive is either the Account's upload limit or
10,000 files, whichever is met first.

**Note**: Downloading a large file can be
affected by various
factors such as distance, network latency,
bandwidth, and congestion, as well as packet loss
ratio and current server load.
For these reasons we recommend that a maximum ZIP archive
total size does not exceed 25GB.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRequestResponse = await box.zipDownloads.createRequest({
  items: [
    {
      type: "file",
      id: "12345",
    },
  ],
  download_file_name: "January Financials",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`ZipDownloadRequestItemsInner`](./models/zip-download-request-items-inner.ts)[]<a id="items-zipdownloadrequestitemsinnermodelszip-download-request-items-innerts"></a>

A list of items to add to the `zip` archive. These can be folders or files.

##### download_file_name: `string`<a id="download_file_name-string"></a>

The optional name of the `zip` archive. This name will be appended by the `.zip` file extension, for example `January Financials.zip`.

#### 🔄 Return<a id="🔄-return"></a>

[ZipDownload](./models/zip-download.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/zip_downloads` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.zipDownloads.getContentById`<a id="boxzipdownloadsgetcontentbyid"></a>

Returns the contents of a `zip` archive in binary format. This URL does not
require any form of authentication and could be used in a user's browser to
download the archive to a user's device.

By default, this URL is only valid for a few seconds from the creation of
the request for this archive. Once a download has started it can not be
stopped and resumed, instead a new request for a zip archive would need to
be created.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
`zip` archive, and then follow the `download_url` field in the response to
this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentByIdResponse = await box.zipDownloads.getContentById({
  zipDownloadId: "zipDownloadId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### zipDownloadId: `string`<a id="zipdownloadid-string"></a>

The unique identifier that represent this `zip` archive.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/zip_downloads/{zip_download_id}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `box.zipDownloads.getStatus`<a id="boxzipdownloadsgetstatus"></a>

Returns the download status of a `zip` archive, allowing an application to
inspect the progress of the download as well as the number of items that
might have been skipped.

This endpoint can only be accessed once the download has started.
Subsequently this endpoint is valid for 12 hours from the start of the
download.

The URL of this endpoint should not be considered as fixed. Instead, use
the [Create zip download](e://post_zip_downloads) API to request to create a
`zip` archive, and then follow the `status_url` field in the response to
this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStatusResponse = await box.zipDownloads.getStatus({
  zipDownloadId: "zipDownloadId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### zipDownloadId: `string`<a id="zipdownloadid-string"></a>

The unique identifier that represent this `zip` archive.

#### 🔄 Return<a id="🔄-return"></a>

[ZipDownloadStatus](./models/zip-download-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/zip_downloads/{zip_download_id}/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
