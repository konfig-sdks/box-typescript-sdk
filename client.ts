/*
Box Platform API

[Box Platform](https://box.dev) provides functionality to provide access to content stored within [Box](https://box.com). It provides endpoints for basic manipulation of files and folders, management of users within an enterprise, as well as more complex topics such as legal holds and retention policies.

The version of the OpenAPI document: 2.0.0
Contact: devrel@box.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AuthorizationApi,
  ClassificationsApi,
  ClassificationsOnFilesApi,
  ClassificationsOnFoldersApi,
  CollaborationsApi,
  CollaborationsListApi,
  CollectionsApi,
  CommentsApi,
  DevicePinnersApi,
  DomainRestrictionsUserExemptionsApi,
  DomainRestrictionsForCollaborationsApi,
  DownloadsApi,
  EmailAliasesApi,
  EventsApi,
  FileActivitiesApi,
  FileRequestsApi,
  FileVersionLegalHoldsApi,
  FileVersionRetentionsApi,
  FileVersionsApi,
  FilesApi,
  FolderLocksApi,
  FoldersApi,
  GroupMembershipsApi,
  GroupsApi,
  IntegrationMappingsApi,
  InvitesApi,
  LegalHoldPoliciesApi,
  LegalHoldPolicyAssignmentsApi,
  MetadataCascadePoliciesApi,
  MetadataInstancesFilesApi,
  MetadataInstancesFoldersApi,
  MetadataTemplatesApi,
  RecentItemsApi,
  RetentionPoliciesApi,
  RetentionPolicyAssignmentsApi,
  SearchApi,
  SessionTerminationApi,
  SharedLinksFilesApi,
  SharedLinksFoldersApi,
  SharedLinksWebLinksApi,
  ShieldInformationBarrierReportsApi,
  ShieldInformationBarrierSegmentMembersApi,
  ShieldInformationBarrierSegmentRestrictionsApi,
  ShieldInformationBarrierSegmentsApi,
  ShieldInformationBarriersApi,
  SignRequestsApi,
  SignTemplatesApi,
  SkillsApi,
  StandardAndZonesStoragePoliciesApi,
  StandardAndZonesStoragePolicyAssignmentsApi,
  TaskAssignmentsApi,
  TasksApi,
  TermsOfServiceApi,
  TermsOfServiceUserStatusesApi,
  TransferFoldersApi,
  TrashedFilesApi,
  TrashedFoldersApi,
  TrashedItemsApi,
  TrashedWebLinksApi,
  UploadsApi,
  UploadsChunkedApi,
  UserAvatarsApi,
  UsersApi,
  WatermarksFilesApi,
  WatermarksFoldersApi,
  WebLinksApi,
  WebhooksApi,
  WorkflowsApi,
  ZipDownloadsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { BoxCustom } from "./client-custom";

export class Box extends BoxCustom {
  readonly authorization: AuthorizationApi;
  readonly classifications: ClassificationsApi;
  readonly classificationsOnFiles: ClassificationsOnFilesApi;
  readonly classificationsOnFolders: ClassificationsOnFoldersApi;
  readonly collaborations: CollaborationsApi;
  readonly collaborationsList: CollaborationsListApi;
  readonly collections: CollectionsApi;
  readonly comments: CommentsApi;
  readonly devicePinners: DevicePinnersApi;
  readonly domainRestrictionsUserExemptions: DomainRestrictionsUserExemptionsApi;
  readonly domainRestrictionsForCollaborations: DomainRestrictionsForCollaborationsApi;
  readonly downloads: DownloadsApi;
  readonly emailAliases: EmailAliasesApi;
  readonly events: EventsApi;
  readonly fileActivities: FileActivitiesApi;
  readonly fileRequests: FileRequestsApi;
  readonly fileVersionLegalHolds: FileVersionLegalHoldsApi;
  readonly fileVersionRetentions: FileVersionRetentionsApi;
  readonly fileVersions: FileVersionsApi;
  readonly files: FilesApi;
  readonly folderLocks: FolderLocksApi;
  readonly folders: FoldersApi;
  readonly groupMemberships: GroupMembershipsApi;
  readonly groups: GroupsApi;
  readonly integrationMappings: IntegrationMappingsApi;
  readonly invites: InvitesApi;
  readonly legalHoldPolicies: LegalHoldPoliciesApi;
  readonly legalHoldPolicyAssignments: LegalHoldPolicyAssignmentsApi;
  readonly metadataCascadePolicies: MetadataCascadePoliciesApi;
  readonly metadataInstancesFiles: MetadataInstancesFilesApi;
  readonly metadataInstancesFolders: MetadataInstancesFoldersApi;
  readonly metadataTemplates: MetadataTemplatesApi;
  readonly recentItems: RecentItemsApi;
  readonly retentionPolicies: RetentionPoliciesApi;
  readonly retentionPolicyAssignments: RetentionPolicyAssignmentsApi;
  readonly search: SearchApi;
  readonly sessionTermination: SessionTerminationApi;
  readonly sharedLinksFiles: SharedLinksFilesApi;
  readonly sharedLinksFolders: SharedLinksFoldersApi;
  readonly sharedLinksWebLinks: SharedLinksWebLinksApi;
  readonly shieldInformationBarrierReports: ShieldInformationBarrierReportsApi;
  readonly shieldInformationBarrierSegmentMembers: ShieldInformationBarrierSegmentMembersApi;
  readonly shieldInformationBarrierSegmentRestrictions: ShieldInformationBarrierSegmentRestrictionsApi;
  readonly shieldInformationBarrierSegments: ShieldInformationBarrierSegmentsApi;
  readonly shieldInformationBarriers: ShieldInformationBarriersApi;
  readonly signRequests: SignRequestsApi;
  readonly signTemplates: SignTemplatesApi;
  readonly skills: SkillsApi;
  readonly standardAndZonesStoragePolicies: StandardAndZonesStoragePoliciesApi;
  readonly standardAndZonesStoragePolicyAssignments: StandardAndZonesStoragePolicyAssignmentsApi;
  readonly taskAssignments: TaskAssignmentsApi;
  readonly tasks: TasksApi;
  readonly termsOfService: TermsOfServiceApi;
  readonly termsOfServiceUserStatuses: TermsOfServiceUserStatusesApi;
  readonly transferFolders: TransferFoldersApi;
  readonly trashedFiles: TrashedFilesApi;
  readonly trashedFolders: TrashedFoldersApi;
  readonly trashedItems: TrashedItemsApi;
  readonly trashedWebLinks: TrashedWebLinksApi;
  readonly uploads: UploadsApi;
  readonly uploadsChunked: UploadsChunkedApi;
  readonly userAvatars: UserAvatarsApi;
  readonly users: UsersApi;
  readonly watermarksFiles: WatermarksFilesApi;
  readonly watermarksFolders: WatermarksFoldersApi;
  readonly webLinks: WebLinksApi;
  readonly webhooks: WebhooksApi;
  readonly workflows: WorkflowsApi;
  readonly zipDownloads: ZipDownloadsApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.authorization = new AuthorizationApi(configuration);
    this.classifications = new ClassificationsApi(configuration);
    this.classificationsOnFiles = new ClassificationsOnFilesApi(configuration);
    this.classificationsOnFolders = new ClassificationsOnFoldersApi(configuration);
    this.collaborations = new CollaborationsApi(configuration);
    this.collaborationsList = new CollaborationsListApi(configuration);
    this.collections = new CollectionsApi(configuration);
    this.comments = new CommentsApi(configuration);
    this.devicePinners = new DevicePinnersApi(configuration);
    this.domainRestrictionsUserExemptions = new DomainRestrictionsUserExemptionsApi(configuration);
    this.domainRestrictionsForCollaborations = new DomainRestrictionsForCollaborationsApi(configuration);
    this.downloads = new DownloadsApi(configuration);
    this.emailAliases = new EmailAliasesApi(configuration);
    this.events = new EventsApi(configuration);
    this.fileActivities = new FileActivitiesApi(configuration);
    this.fileRequests = new FileRequestsApi(configuration);
    this.fileVersionLegalHolds = new FileVersionLegalHoldsApi(configuration);
    this.fileVersionRetentions = new FileVersionRetentionsApi(configuration);
    this.fileVersions = new FileVersionsApi(configuration);
    this.files = new FilesApi(configuration);
    this.folderLocks = new FolderLocksApi(configuration);
    this.folders = new FoldersApi(configuration);
    this.groupMemberships = new GroupMembershipsApi(configuration);
    this.groups = new GroupsApi(configuration);
    this.integrationMappings = new IntegrationMappingsApi(configuration);
    this.invites = new InvitesApi(configuration);
    this.legalHoldPolicies = new LegalHoldPoliciesApi(configuration);
    this.legalHoldPolicyAssignments = new LegalHoldPolicyAssignmentsApi(configuration);
    this.metadataCascadePolicies = new MetadataCascadePoliciesApi(configuration);
    this.metadataInstancesFiles = new MetadataInstancesFilesApi(configuration);
    this.metadataInstancesFolders = new MetadataInstancesFoldersApi(configuration);
    this.metadataTemplates = new MetadataTemplatesApi(configuration);
    this.recentItems = new RecentItemsApi(configuration);
    this.retentionPolicies = new RetentionPoliciesApi(configuration);
    this.retentionPolicyAssignments = new RetentionPolicyAssignmentsApi(configuration);
    this.search = new SearchApi(configuration);
    this.sessionTermination = new SessionTerminationApi(configuration);
    this.sharedLinksFiles = new SharedLinksFilesApi(configuration);
    this.sharedLinksFolders = new SharedLinksFoldersApi(configuration);
    this.sharedLinksWebLinks = new SharedLinksWebLinksApi(configuration);
    this.shieldInformationBarrierReports = new ShieldInformationBarrierReportsApi(configuration);
    this.shieldInformationBarrierSegmentMembers = new ShieldInformationBarrierSegmentMembersApi(configuration);
    this.shieldInformationBarrierSegmentRestrictions = new ShieldInformationBarrierSegmentRestrictionsApi(configuration);
    this.shieldInformationBarrierSegments = new ShieldInformationBarrierSegmentsApi(configuration);
    this.shieldInformationBarriers = new ShieldInformationBarriersApi(configuration);
    this.signRequests = new SignRequestsApi(configuration);
    this.signTemplates = new SignTemplatesApi(configuration);
    this.skills = new SkillsApi(configuration);
    this.standardAndZonesStoragePolicies = new StandardAndZonesStoragePoliciesApi(configuration);
    this.standardAndZonesStoragePolicyAssignments = new StandardAndZonesStoragePolicyAssignmentsApi(configuration);
    this.taskAssignments = new TaskAssignmentsApi(configuration);
    this.tasks = new TasksApi(configuration);
    this.termsOfService = new TermsOfServiceApi(configuration);
    this.termsOfServiceUserStatuses = new TermsOfServiceUserStatusesApi(configuration);
    this.transferFolders = new TransferFoldersApi(configuration);
    this.trashedFiles = new TrashedFilesApi(configuration);
    this.trashedFolders = new TrashedFoldersApi(configuration);
    this.trashedItems = new TrashedItemsApi(configuration);
    this.trashedWebLinks = new TrashedWebLinksApi(configuration);
    this.uploads = new UploadsApi(configuration);
    this.uploadsChunked = new UploadsChunkedApi(configuration);
    this.userAvatars = new UserAvatarsApi(configuration);
    this.users = new UsersApi(configuration);
    this.watermarksFiles = new WatermarksFilesApi(configuration);
    this.watermarksFolders = new WatermarksFoldersApi(configuration);
    this.webLinks = new WebLinksApi(configuration);
    this.webhooks = new WebhooksApi(configuration);
    this.workflows = new WorkflowsApi(configuration);
    this.zipDownloads = new ZipDownloadsApi(configuration);
  }

}
