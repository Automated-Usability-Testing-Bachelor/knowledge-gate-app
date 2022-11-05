import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null

export type InputMaybe<T> = Maybe<T>

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string
}

export type BasicUser = {
  __typename?: 'BasicUser'
  AuthoredComments: Array<Comment>
  Consultations: Array<Consultation>
  Expert?: Maybe<Expert>
  /** @deprecated Use NotificationsPaginated instead */
  Notifications: Array<NotificationUnion>
  NotificationsPaginated: NotificationConnection
  OrganizationMembership?: Maybe<OrganizationMembership>
  Projects: Array<Project>
  Reviews: Array<ReviewShallow>
  cognitoId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  emailPreference: Scalars['String']
  id: Scalars['ID']
  legacyID?: Maybe<Scalars['String']>
  name: Scalars['String']
  notificationCount: Scalars['Int']
  phone?: Maybe<Scalars['String']>
  profilePicturePath?: Maybe<Scalars['String']>
  role: Role
  showTutorial: Scalars['Boolean']
  updatedAt: Scalars['DateTime']
}

export type BasicUserConsultationsArgs = {
  meetingNumber?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type BasicUserNotificationsPaginatedArgs = {
  paginationInput: PrismaPaginationInfo
}

export type BasicUserNotificationCountArgs = {
  unread: Scalars['Boolean']
}

export type Certification = {
  __typename?: 'Certification'
  Expert: Expert
  createdAt: Scalars['DateTime']
  description: Scalars['String']
  expertId: Scalars['String']
  id: Scalars['ID']
  institute: Scalars['String']
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ClientInvitation = {
  __typename?: 'ClientInvitation'
  email: Scalars['String']
  hash: Scalars['String']
  organizationName: Scalars['ID']
}

export type ClinicalTrial = {
  __typename?: 'ClinicalTrial'
  Authors: Array<ClinicalTrialAuthor>
  authors: Array<Scalars['String']>
  clinicalTrialGovId: Scalars['String']
  conditions: Array<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  interventions: Array<Scalars['String']>
  link?: Maybe<Scalars['String']>
  locations: Array<Scalars['String']>
  status: ClinicalTrialState
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ClinicalTrialAuthor = {
  __typename?: 'ClinicalTrialAuthor'
  expertId?: Maybe<Scalars['String']>
  name: Scalars['String']
}

export enum ClinicalTrialState {
  ActiveNotRecruiting = 'ACTIVE_NOT_RECRUITING',
  Completed = 'COMPLETED',
  NotYetRecruiting = 'NOT_YET_RECRUITING',
  Recruiting = 'RECRUITING',
  Terminated = 'TERMINATED',
  Unknown = 'UNKNOWN',
  Withdrawn = 'WITHDRAWN',
}

export type Comment = {
  __typename?: 'Comment'
  Author?: Maybe<BasicUser>
  authorId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  projectId: Scalars['String']
  text: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type CommentCreateInput = {
  expertId: Scalars['String']
  projectId: Scalars['String']
  text: Scalars['String']
}

export type CommentNotification = {
  __typename?: 'CommentNotification'
  authorId?: Maybe<Scalars['String']>
  authorName?: Maybe<Scalars['String']>
  commentId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  expertName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  projectId?: Maybe<Scalars['String']>
  projectTitle?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export type ConferenceActivity = {
  __typename?: 'ConferenceActivity'
  abstract: Scalars['String']
  abstractLink: Scalars['String']
  conferenceName: Scalars['String']
  createdAt: Scalars['DateTime']
  endDate: Scalars['DateTime']
  id: Scalars['ID']
  keywords: Array<Scalars['String']>
  location: Scalars['String']
  meetingLink: Scalars['String']
  meetingName: Scalars['String']
  meetingPresenters: Array<Scalars['String']>
  monocleId: Scalars['String']
  sessionName: Scalars['String']
  startDate: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type ConferenceActivityInput = {
  abstract: Scalars['String']
  abstractLink: Scalars['String']
  conferenceName: Scalars['String']
  endDate: Scalars['DateTime']
  keywords: Array<Scalars['String']>
  location: Scalars['String']
  meetingLink: Scalars['String']
  meetingName: Scalars['String']
  meetingPresenters: Array<Scalars['String']>
  monocleId: Scalars['String']
  sessionName?: InputMaybe<Scalars['String']>
  startDate: Scalars['DateTime']
}

export type Consultation = {
  __typename?: 'Consultation'
  Expert: Expert
  Participants?: Maybe<Array<BasicUser>>
  Project: Project
  createdAt: Scalars['DateTime']
  date?: Maybe<Scalars['DateTime']>
  durationInMinutes: Scalars['Float']
  expertProjectCollaborationId: Scalars['String']
  id: Scalars['ID']
  meetingNumber: Scalars['String']
  recordConsultation: Scalars['Boolean']
  status: ConsultationStatus
  updatedAt: Scalars['DateTime']
  zoomSignature: Scalars['String']
}

export enum ConsultationStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Declined = 'DECLINED',
  Requested = 'REQUESTED',
}

export type CreateCertificationInput = {
  description: Scalars['String']
  institute: Scalars['String']
  name: Scalars['String']
}

export type CreateClinicalTrialInput = {
  authors: Array<Scalars['String']>
  clinicalTrialGovId: Scalars['String']
  conditions: Array<Scalars['String']>
  interventions: Array<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  locations: Array<Scalars['String']>
  status: ClinicalTrialState
  title: Scalars['String']
}

export type CreateEducationRecordInput = {
  dateRange?: InputMaybe<DateRangeIncomplete>
  degree?: InputMaybe<Scalars['String']>
  description: Scalars['String']
  duration?: InputMaybe<Scalars['String']>
  education?: InputMaybe<Scalars['String']>
  field?: InputMaybe<Scalars['String']>
  institution?: InputMaybe<Scalars['String']>
  school?: InputMaybe<Scalars['String']>
}

export type CreateExperienceRecordInput = {
  company: Scalars['String']
  dateRange?: InputMaybe<DateRange>
  description: Scalars['String']
  location?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type CreateExpertInvitationInput = {
  email: Scalars['String']
}

export type CreateExpertOnboardingInvitationInput = {
  country: Iso2CountryCode
  email: Scalars['String']
  projectDescription: Scalars['String']
  subject: Scalars['String']
}

export type CreateLanguageInput = {
  name: Scalars['String']
  proficiency?: InputMaybe<Scalars['String']>
}

export type CreatePublicationInput = {
  authors: Array<Scalars['String']>
  citationIds: Array<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  doi?: InputMaybe<Scalars['String']>
  link?: InputMaybe<Scalars['String']>
  mesh: Array<MeshData>
  name: Scalars['String']
  ncbiId: Scalars['String']
  publishedAt?: InputMaybe<Scalars['DateTime']>
}

export type CreateSkillInput = {
  dataSource?: InputMaybe<DataSourceEnum>
  endorcementCount: Scalars['Int']
  name: Scalars['String']
}

export type Credit = {
  __typename?: 'Credit'
  balance: Scalars['Float']
  expirationDate?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
}

export type CreditPriceModel = {
  __typename?: 'CreditPriceModel'
  name: Scalars['String']
  pricePerCredit: Scalars['Float']
  range: PriceRangePerCredit
}

export enum DataSourceEnum {
  LinkedIn = 'LinkedIn',
  Ncbi = 'NCBI',
  ResearchGate = 'ResearchGate',
}

export type DateRange = {
  from: Scalars['String']
  to: Scalars['String']
}

export type DateRangeDto = {
  __typename?: 'DateRangeDTO'
  from: Scalars['String']
  to: Scalars['String']
}

export type DateRangeIncomplete = {
  from: Scalars['String']
  to?: InputMaybe<Scalars['String']>
}

export type DetailedLocationFilter = {
  country: Iso2CountryCode
  states?: InputMaybe<Array<UsState>>
}

export type EducationRecord = {
  __typename?: 'EducationRecord'
  createdAt: Scalars['DateTime']
  dateRange?: Maybe<DateRangeDto>
  degree?: Maybe<Scalars['String']>
  description: Scalars['String']
  duration?: Maybe<Scalars['String']>
  education?: Maybe<Scalars['String']>
  expertId: Scalars['String']
  field?: Maybe<Scalars['String']>
  id: Scalars['ID']
  institution?: Maybe<Scalars['String']>
  school?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type ExperienceRecord = {
  __typename?: 'ExperienceRecord'
  company: Scalars['String']
  createdAt: Scalars['DateTime']
  dateRange?: Maybe<DateRangeDto>
  description: Scalars['String']
  duration?: Maybe<Scalars['String']>
  expertId: Scalars['String']
  id: Scalars['ID']
  isEditing: Scalars['Boolean']
  isRelevant: Scalars['Boolean']
  location?: Maybe<Scalars['String']>
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type Expert = {
  __typename?: 'Expert'
  Availability: Array<Timespan>
  Certifications: Array<Certification>
  ClinicalTrials: Array<ClinicalTrial>
  Comments: Array<Comment>
  ConferenceActivity: Array<ConferenceActivity>
  Education: Array<EducationRecord>
  Experience: Array<ExperienceRecord>
  IndustryCollaborationItem: Array<IndustryCollaborationItem>
  Invoices: Array<Invoice>
  Languages: Array<Language>
  Projects: Array<Project>
  Publications: Array<Publication>
  Reviews: Array<ReviewShallow>
  Skills: Array<Skill>
  User: BasicUser
  VettingQuestionsAnswers: Array<VettingQuestionAnswer>
  _count: ExpertCounts
  about: Scalars['String']
  blacklisted: Scalars['Boolean']
  countries?: Maybe<Array<Iso2CountryCode>>
  createdAt: Scalars['DateTime']
  hIndex: Scalars['Int']
  hourlyCreditRate?: Maybe<Scalars['Int']>
  hourlyRate?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  industries?: Maybe<Array<Scalars['String']>>
  isOnboarded: Scalars['Boolean']
  legacyID: Scalars['String']
  linkedinFollowers?: Maybe<Scalars['Int']>
  linkedinID?: Maybe<Scalars['String']>
  linkedinURL?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  locationInfo?: Maybe<LocationInfo>
  onboardingStatus?: Maybe<OnboardingStatus>
  originalHourlyRate?: Maybe<Scalars['Int']>
  preferredCurrency?: Maybe<Iso4217CurrencyCode>
  researchGateURL?: Maybe<Scalars['String']>
  seniority: Scalars['String']
  state: ExpertState
  termsAccepted: Scalars['Boolean']
  termsAcceptedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  twitterFollowers?: Maybe<Scalars['Int']>
  twitterURL?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  userId: Scalars['String']
}

export type ExpertCommentsArgs = {
  projectId?: InputMaybe<Scalars['String']>
}

export type ExpertCounts = {
  __typename?: 'ExpertCounts'
  ClinicalTrialsCount: Scalars['Int']
  PublicationsCount: Scalars['Int']
  TotalCitationsCount: Scalars['Int']
}

export type ExpertCreateInput = {
  Certifications?: InputMaybe<Array<CreateCertificationInput>>
  ClinicalTrials?: InputMaybe<Array<CreateClinicalTrialInput>>
  ConferenceActivity?: InputMaybe<Array<ConferenceActivityInput>>
  Education?: InputMaybe<Array<CreateEducationRecordInput>>
  Experience?: InputMaybe<Array<CreateExperienceRecordInput>>
  IndustryCollaboration?: InputMaybe<Array<IndustryCollaborationItemInput>>
  Languages?: InputMaybe<Array<CreateLanguageInput>>
  Publications?: InputMaybe<Array<CreatePublicationInput>>
  Skills?: InputMaybe<Array<CreateSkillInput>>
  about?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  countries?: InputMaybe<Array<Iso2CountryCode>>
  email?: InputMaybe<Scalars['String']>
  hourlyRate?: InputMaybe<Scalars['Int']>
  industries?: InputMaybe<Array<Scalars['String']>>
  linkedinFollowers?: InputMaybe<Scalars['Int']>
  linkedinURL?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  phone?: InputMaybe<Scalars['String']>
  preferredCurrency?: InputMaybe<Iso4217CurrencyCode>
  researchGateURL?: InputMaybe<Scalars['String']>
  school?: InputMaybe<Scalars['String']>
  seniority?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  twitterFollowers?: InputMaybe<Scalars['Int']>
  twitterURL?: InputMaybe<Scalars['String']>
}

export type ExpertInvitation = {
  __typename?: 'ExpertInvitation'
  email: Scalars['String']
  expertName: Scalars['String']
  hash: Scalars['String']
  hourlyRate?: Maybe<Scalars['Int']>
  linkedinURL?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  preferredCurrency?: Maybe<Iso4217CurrencyCode>
  researchGateURL?: Maybe<Scalars['String']>
  twitterURL?: Maybe<Scalars['String']>
}

export type ExpertModelEdge = {
  __typename?: 'ExpertModelEdge'
  cursor: Scalars['String']
  node: Expert
}

export type ExpertProjectCollaboration = {
  __typename?: 'ExpertProjectCollaboration'
  Expert: Expert
  VettingQuestionAnswers: Array<VettingQuestionAnswer>
  canBeRequested: Scalars['Boolean']
  collaborationCreatedAt: Scalars['DateTime']
  collaborationId: Scalars['String']
  projectConsentStatus: ExpertTermsConsentStatus
  projectState: ExpertProjectCollaborationState
}

export enum ExpertProjectCollaborationState {
  Approved = 'APPROVED',
  Attached = 'ATTACHED',
  Cancelled = 'CANCELLED',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED',
  Suggested = 'SUGGESTED',
}

export type ExpertProjectNotification = {
  __typename?: 'ExpertProjectNotification'
  collaborationState?: Maybe<ExpertProjectCollaborationState>
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  expertName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  projectId?: Maybe<Scalars['String']>
  projectTitle?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export type ExpertRequest = {
  __typename?: 'ExpertRequest'
  Author?: Maybe<BasicUser>
  Project?: Maybe<Project>
  authorId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  description: Scalars['String']
  id: Scalars['ID']
  projectId?: Maybe<Scalars['String']>
  state: ExpertRequestState
  updatedAt: Scalars['DateTime']
}

export enum ExpertRequestState {
  Cancelled = 'CANCELLED',
  Fulfilled = 'FULFILLED',
  Open = 'OPEN',
}

export type ExpertReviewCreateInput = {
  expertId: Scalars['String']
  projectId: Scalars['String']
  rating: Scalars['Int']
  text?: InputMaybe<Scalars['String']>
}

export type ExpertSearchConnection = {
  __typename?: 'ExpertSearchConnection'
  edges: Array<ExpertModelEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export enum ExpertState {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
}

export enum ExpertTermsConsentStatus {
  Accepted = 'ACCEPTED',
  NotAccepted = 'NOT_ACCEPTED',
}

export type File = {
  __typename?: 'File'
  downloadLink: Scalars['String']
  originalName: Scalars['String']
  path: Scalars['String']
  updatedAt: Scalars['DateTime']
  uploaderId?: Maybe<Scalars['String']>
}

export type FilterInfoConnection = {
  __typename?: 'FilterInfoConnection'
  edges: Array<FilterInfoNodePaginationEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type FilterInfoNode = {
  __typename?: 'FilterInfoNode'
  count: Scalars['Int']
  title: Scalars['String']
}

export type FilterInfoNodePagination = {
  __typename?: 'FilterInfoNodePagination'
  count: Scalars['Int']
  id: Scalars['String']
  title: Scalars['String']
}

export type FilterInfoNodePaginationEdge = {
  __typename?: 'FilterInfoNodePaginationEdge'
  cursor: Scalars['String']
  node: FilterInfoNodePagination
}

export type FilterInput = {
  email?: InputMaybe<Scalars['String']>
  organizationId?: InputMaybe<Scalars['String']>
  state?: InputMaybe<State>
}

export enum Iso2CountryCode {
  Ad = 'ad',
  Ae = 'ae',
  Af = 'af',
  Ag = 'ag',
  Ai = 'ai',
  Al = 'al',
  Am = 'am',
  An = 'an',
  Ao = 'ao',
  Aq = 'aq',
  Ar = 'ar',
  As = 'as',
  At = 'at',
  Au = 'au',
  Aw = 'aw',
  Ax = 'ax',
  Az = 'az',
  Ba = 'ba',
  Bb = 'bb',
  Bd = 'bd',
  Be = 'be',
  Bf = 'bf',
  Bg = 'bg',
  Bh = 'bh',
  Bi = 'bi',
  Bj = 'bj',
  Bm = 'bm',
  Bn = 'bn',
  Bo = 'bo',
  Br = 'br',
  Bs = 'bs',
  Bt = 'bt',
  Bv = 'bv',
  Bw = 'bw',
  By = 'by',
  Bz = 'bz',
  Ca = 'ca',
  Cc = 'cc',
  Cd = 'cd',
  Cf = 'cf',
  Cg = 'cg',
  Ch = 'ch',
  Ci = 'ci',
  Ck = 'ck',
  Cl = 'cl',
  Cm = 'cm',
  Cn = 'cn',
  Co = 'co',
  Cr = 'cr',
  Cs = 'cs',
  Cu = 'cu',
  Cv = 'cv',
  Cx = 'cx',
  Cy = 'cy',
  Cz = 'cz',
  De = 'de',
  Dj = 'dj',
  Dk = 'dk',
  Dm = 'dm',
  Do = 'do',
  Dz = 'dz',
  Ec = 'ec',
  Ee = 'ee',
  Eg = 'eg',
  Eh = 'eh',
  Er = 'er',
  Es = 'es',
  Et = 'et',
  Fi = 'fi',
  Fj = 'fj',
  Fk = 'fk',
  Fm = 'fm',
  Fo = 'fo',
  Fr = 'fr',
  Ga = 'ga',
  Gb = 'gb',
  Gd = 'gd',
  Ge = 'ge',
  Gf = 'gf',
  Gg = 'gg',
  Gh = 'gh',
  Gi = 'gi',
  Gl = 'gl',
  Gm = 'gm',
  Gn = 'gn',
  Gp = 'gp',
  Gq = 'gq',
  Gr = 'gr',
  Gs = 'gs',
  Gt = 'gt',
  Gu = 'gu',
  Gw = 'gw',
  Gy = 'gy',
  Hk = 'hk',
  Hm = 'hm',
  Hn = 'hn',
  Hr = 'hr',
  Ht = 'ht',
  Hu = 'hu',
  Id = 'id',
  Ie = 'ie',
  Il = 'il',
  Im = 'im',
  In = 'in',
  Io = 'io',
  Iq = 'iq',
  Ir = 'ir',
  Is = 'is',
  It = 'it',
  Je = 'je',
  Jm = 'jm',
  Jo = 'jo',
  Jp = 'jp',
  Ke = 'ke',
  Kg = 'kg',
  Kh = 'kh',
  Ki = 'ki',
  Km = 'km',
  Kn = 'kn',
  Kp = 'kp',
  Kr = 'kr',
  Kw = 'kw',
  Ky = 'ky',
  Kz = 'kz',
  La = 'la',
  Lb = 'lb',
  Lc = 'lc',
  Li = 'li',
  Lk = 'lk',
  Lr = 'lr',
  Ls = 'ls',
  Lt = 'lt',
  Lu = 'lu',
  Lv = 'lv',
  Ly = 'ly',
  Ma = 'ma',
  Mc = 'mc',
  Md = 'md',
  Mg = 'mg',
  Mh = 'mh',
  Mk = 'mk',
  Ml = 'ml',
  Mm = 'mm',
  Mn = 'mn',
  Mo = 'mo',
  Mp = 'mp',
  Mq = 'mq',
  Mr = 'mr',
  Ms = 'ms',
  Mt = 'mt',
  Mu = 'mu',
  Mv = 'mv',
  Mw = 'mw',
  Mx = 'mx',
  My = 'my',
  Mz = 'mz',
  Na = 'na',
  Nc = 'nc',
  Ne = 'ne',
  Nf = 'nf',
  Ng = 'ng',
  Ni = 'ni',
  Nl = 'nl',
  No = 'no',
  Np = 'np',
  Nr = 'nr',
  Nu = 'nu',
  Nz = 'nz',
  Om = 'om',
  Pa = 'pa',
  Pe = 'pe',
  Pf = 'pf',
  Pg = 'pg',
  Ph = 'ph',
  Pk = 'pk',
  Pl = 'pl',
  Pm = 'pm',
  Pn = 'pn',
  Pr = 'pr',
  Ps = 'ps',
  Pt = 'pt',
  Pw = 'pw',
  Py = 'py',
  Qa = 'qa',
  Re = 're',
  Ro = 'ro',
  Ru = 'ru',
  Rw = 'rw',
  Sa = 'sa',
  Sb = 'sb',
  Sc = 'sc',
  Sd = 'sd',
  Se = 'se',
  Sg = 'sg',
  Sh = 'sh',
  Si = 'si',
  Sj = 'sj',
  Sk = 'sk',
  Sl = 'sl',
  Sm = 'sm',
  Sn = 'sn',
  So = 'so',
  Sr = 'sr',
  St = 'st',
  Sv = 'sv',
  Sy = 'sy',
  Sz = 'sz',
  Tc = 'tc',
  Td = 'td',
  Tf = 'tf',
  Tg = 'tg',
  Th = 'th',
  Tj = 'tj',
  Tk = 'tk',
  Tl = 'tl',
  Tm = 'tm',
  Tn = 'tn',
  To = 'to',
  Tr = 'tr',
  Tt = 'tt',
  Tv = 'tv',
  Tw = 'tw',
  Tz = 'tz',
  Ua = 'ua',
  Ug = 'ug',
  Um = 'um',
  Us = 'us',
  Uy = 'uy',
  Uz = 'uz',
  Va = 'va',
  Vc = 'vc',
  Ve = 've',
  Vg = 'vg',
  Vi = 'vi',
  Vn = 'vn',
  Vu = 'vu',
  Wf = 'wf',
  Ws = 'ws',
  Ye = 'ye',
  Yt = 'yt',
  Za = 'za',
  Zm = 'zm',
  Zw = 'zw',
}

export enum Iso4217CurrencyCode {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clf = 'CLF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xdr = 'XDR',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL',
}

export type IndustryCollaborationItem = {
  __typename?: 'IndustryCollaborationItem'
  companyName: Scalars['String']
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  numberOfClinicalTrials?: Maybe<Scalars['Int']>
  numberOfCompanyMentions?: Maybe<Scalars['Int']>
  numberOfPresentations?: Maybe<Scalars['Int']>
  numberOfPublications?: Maybe<Scalars['Int']>
  payments?: Maybe<Scalars['String']>
  period: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type IndustryCollaborationItemInput = {
  companyName: Scalars['String']
  id?: InputMaybe<Scalars['ID']>
  numberOfClinicalTrials?: InputMaybe<Scalars['Int']>
  numberOfCompanyMentions?: InputMaybe<Scalars['Int']>
  numberOfPresentations?: InputMaybe<Scalars['Int']>
  numberOfPublications?: InputMaybe<Scalars['Int']>
  payments?: InputMaybe<Scalars['String']>
  period: Scalars['String']
}

export type Invitation = {
  __typename?: 'Invitation'
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  hash: Scalars['String']
  id: Scalars['ID']
  link: Scalars['String']
  organizationId?: Maybe<Scalars['ID']>
  state: State
  updatedAt: Scalars['DateTime']
}

export type InvitationUpdateInput = {
  id: Scalars['String']
}

export type Invoice = {
  __typename?: 'Invoice'
  Expert?: Maybe<Expert>
  Project?: Maybe<Project>
  bankName: Scalars['String']
  companyAddress: Scalars['String']
  companyCountry: Scalars['String']
  companyName: Scalars['String']
  createdAt: Scalars['DateTime']
  currency: Scalars['String']
  description: Scalars['String']
  dueDate: Scalars['DateTime']
  expertAddress: Scalars['String']
  expertCity: Scalars['String']
  expertCountry: Scalars['String']
  expertEmail: Scalars['String']
  expertId?: Maybe<Scalars['String']>
  expertName: Scalars['String']
  expertPhoneNumber: Scalars['String']
  expertPostalCode: Scalars['String']
  hourlyRate: Scalars['Int']
  iban: Scalars['String']
  id: Scalars['ID']
  invoiceNumber: Scalars['Int']
  minutes: Scalars['Int']
  projectId?: Maybe<Scalars['String']>
  state: InvoiceState
  swift: Scalars['String']
  tinNumber: Scalars['String']
  total: Scalars['Int']
  updatedAt: Scalars['DateTime']
}

export type InvoiceCreateInput = {
  bankName: Scalars['String']
  expertAddress: Scalars['String']
  expertCity: Scalars['String']
  expertCountry: Scalars['String']
  expertEmail: Scalars['String']
  expertName: Scalars['String']
  expertPhoneNumber: Scalars['String']
  expertPostalCode: Scalars['String']
  iban: Scalars['String']
  projectId: Scalars['String']
  swift: Scalars['String']
  tinNumber: Scalars['String']
}

export type InvoiceNotification = {
  __typename?: 'InvoiceNotification'
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  expertName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  invoiceId?: Maybe<Scalars['String']>
  nullableProjectId?: Maybe<Scalars['String']>
  nullableProjectTitle?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export enum InvoiceState {
  Approved = 'APPROVED',
  Paid = 'PAID',
  Raised = 'RAISED',
  Rejected = 'REJECTED',
}

export type Language = {
  __typename?: 'Language'
  createdAt: Scalars['DateTime']
  expertId: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  proficiency?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type LocationFilterInfoNode = {
  __typename?: 'LocationFilterInfoNode'
  count: Scalars['Int']
  details?: Maybe<Array<FilterInfoNode>>
  title: Scalars['String']
}

export type LocationInfo = {
  __typename?: 'LocationInfo'
  city?: Maybe<Scalars['String']>
  country: Iso2CountryCode
  state?: Maybe<Scalars['String']>
  zip?: Maybe<Scalars['String']>
}

export enum MemberRole {
  Manager = 'MANAGER',
  Participant = 'PARTICIPANT',
}

export type MeshData = {
  descriptorName: Scalars['String']
  mainTopic: Scalars['Boolean']
  qualifier?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  acceptExpertForProject: Expert
  answerVettingQuestions: Scalars['Boolean']
  cancelExpertConsultation: Expert
  changeReadStatus: Array<NotificationUnion>
  createComment: Comment
  createExpert: Expert
  createExpertDirectInvitation: Invitation
  /** @deprecated Use createExpertDirectInvitation instead */
  createExpertInvitation: Invitation
  createExpertOnboardingInvitation: Invitation
  createInvoice: Invoice
  createMeeting: Consultation
  createOrganizationInvitation: Invitation
  /** @deprecated Use createOrganizationInvitation instead */
  createOrganizationInvite: Invitation
  createProject: Project
  createProjectComment: ProjectComment
  createStripeCheckoutSession: Scalars['String']
  createStripePortalSession: Scalars['String']
  deleteComment: Comment
  deleteProject: Scalars['String']
  deleteProjectComment: ProjectComment
  deleteReview: Review
  deleteSalesMockupOrganizationResources: Scalars['Boolean']
  deleteUser: BasicUser
  onboardExpert: BasicUser
  postExpertReview: Review
  postProjectReview: Review
  purchaseConsultation: Consultation
  purchaseCredits: Scalars['String']
  /** @deprecated Use requestExpertInfo instead */
  requestExpert: ExpertRequest
  /** @deprecated Use purchaseConsultation instead */
  requestExpertConsultation: Expert
  requestExpertInfo: ExpertRequest
  signUp: BasicUser
  updateComment: Comment
  updateConsultation: Consultation
  updateExpert: Expert
  updateExpertsPerProject: Project
  updateInvoice: Invoice
  updateOrganization: Organization
  updateProject: Project
  updateProjectComment: ProjectComment
  updateReview: Review
  updateViewer: BasicUser
}

export type MutationAcceptExpertForProjectArgs = {
  collaborationId: Scalars['String']
}

export type MutationAnswerVettingQuestionsArgs = {
  answers: Array<VettingQuestionAnswerDto>
  expertId?: InputMaybe<Scalars['String']>
  projectId: Scalars['String']
}

export type MutationCancelExpertConsultationArgs = {
  consultationId: Scalars['String']
}

export type MutationChangeReadStatusArgs = {
  data: Array<NotificationUpdateData>
}

export type MutationCreateCommentArgs = {
  data: CommentCreateInput
}

export type MutationCreateExpertArgs = {
  data: ExpertCreateInput
}

export type MutationCreateExpertDirectInvitationArgs = {
  data: CreateExpertInvitationInput
}

export type MutationCreateExpertInvitationArgs = {
  data: CreateExpertInvitationInput
}

export type MutationCreateExpertOnboardingInvitationArgs = {
  data: CreateExpertOnboardingInvitationInput
}

export type MutationCreateInvoiceArgs = {
  data: InvoiceCreateInput
  expertId?: InputMaybe<Scalars['String']>
}

export type MutationCreateMeetingArgs = {
  consultationId: Scalars['String']
}

export type MutationCreateOrganizationInvitationArgs = {
  data: OrganizationalInviteCreateInput
}

export type MutationCreateOrganizationInviteArgs = {
  data: OrganizationalInviteCreateInput
}

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput
}

export type MutationCreateProjectCommentArgs = {
  data: ProjectCommentCreateInput
}

export type MutationCreateStripeCheckoutSessionArgs = {
  cancelUrl: Scalars['String']
  successUrl: Scalars['String']
}

export type MutationCreateStripePortalSessionArgs = {
  paymentInfoId?: InputMaybe<Scalars['String']>
  returnUrl: Scalars['String']
}

export type MutationDeleteCommentArgs = {
  id: Scalars['String']
}

export type MutationDeleteProjectArgs = {
  id: Scalars['String']
  title: Scalars['String']
}

export type MutationDeleteProjectCommentArgs = {
  id: Scalars['String']
}

export type MutationDeleteReviewArgs = {
  id: Scalars['String']
}

export type MutationDeleteUserArgs = {
  id: Scalars['String']
  name: Scalars['String']
}

export type MutationOnboardExpertArgs = {
  data: OnboardExpertInput
}

export type MutationPostExpertReviewArgs = {
  data: ExpertReviewCreateInput
}

export type MutationPostProjectReviewArgs = {
  data: ProjectReviewCreateInput
}

export type MutationPurchaseConsultationArgs = {
  date?: InputMaybe<Scalars['DateTime']>
  durationInMinutes: Scalars['Int']
  expertProjectCollaborationId: Scalars['String']
  organizationMemberIds: Array<Scalars['String']>
  recordConsultation: Scalars['Boolean']
}

export type MutationPurchaseCreditsArgs = {
  cancelUrl: Scalars['String']
  quantity: Scalars['Float']
  successUrl: Scalars['String']
}

export type MutationRequestExpertArgs = {
  description: Scalars['String']
  expertId?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type MutationRequestExpertInfoArgs = {
  description: Scalars['String']
  expertId?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type MutationSignUpArgs = {
  data: SignupUserInput
}

export type MutationUpdateCommentArgs = {
  id: Scalars['String']
  text: Scalars['String']
}

export type MutationUpdateConsultationArgs = {
  date?: InputMaybe<Scalars['DateTime']>
  durationInMinutes?: InputMaybe<Scalars['Int']>
  expertProjectCollaborationId?: InputMaybe<Scalars['String']>
  id: Scalars['String']
  meetingNumber?: InputMaybe<Scalars['String']>
  organizationMemberIds?: InputMaybe<Array<Scalars['String']>>
  recordConsultation?: InputMaybe<Scalars['Boolean']>
}

export type MutationUpdateExpertArgs = {
  data: UpdateExpertInput
  id?: InputMaybe<Scalars['String']>
  linkedinURL?: InputMaybe<Scalars['String']>
}

export type MutationUpdateExpertsPerProjectArgs = {
  expertIds: Array<Scalars['String']>
  id: Scalars['String']
}

export type MutationUpdateInvoiceArgs = {
  data: UpdateInvoiceInput
  id: Scalars['String']
}

export type MutationUpdateOrganizationArgs = {
  data: OrganizationUpdateInput
  id: Scalars['String']
}

export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput
  id: Scalars['String']
}

export type MutationUpdateProjectCommentArgs = {
  id: Scalars['String']
  text: Scalars['String']
}

export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput
  id: Scalars['String']
}

export type MutationUpdateViewerArgs = {
  data: UpdateViewerInput
}

export type NotificationConnection = {
  __typename?: 'NotificationConnection'
  edges: Array<NotificationUnionEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export enum NotificationType {
  CommentCreated = 'COMMENT_CREATED',
  CommentDeleted = 'COMMENT_DELETED',
  ExpertProjectCollaborationCancelled = 'EXPERT_PROJECT_COLLABORATION_CANCELLED',
  ExpertProjectCollaborationCreated = 'EXPERT_PROJECT_COLLABORATION_CREATED',
  ExpertProjectCollaborationDeleted = 'EXPERT_PROJECT_COLLABORATION_DELETED',
  ExpertProjectCollaborationUpdated = 'EXPERT_PROJECT_COLLABORATION_UPDATED',
  InvoiceCreated = 'INVOICE_CREATED',
  OrganizationMemberCreated = 'ORGANIZATION_MEMBER_CREATED',
  OrganizationMemberDeleted = 'ORGANIZATION_MEMBER_DELETED',
  OrganizationMemberUpdated = 'ORGANIZATION_MEMBER_UPDATED',
  ProjectCommentCreated = 'PROJECT_COMMENT_CREATED',
  ProjectCreated = 'PROJECT_CREATED',
  ProjectMemberCreated = 'PROJECT_MEMBER_CREATED',
  ProjectMemberDeleted = 'PROJECT_MEMBER_DELETED',
  ProjectMemberUpdated = 'PROJECT_MEMBER_UPDATED',
  ProjectUpdated = 'PROJECT_UPDATED',
  ReviewCreated = 'REVIEW_CREATED',
}

export type NotificationUnion =
  | CommentNotification
  | ExpertProjectNotification
  | InvoiceNotification
  | OrganizationMemberNotification
  | ProjectCommentNotification
  | ProjectMemberNotification
  | ProjectNotification
  | ReviewNotification

export type NotificationUnionEdge = {
  __typename?: 'NotificationUnionEdge'
  cursor: Scalars['String']
  node: NotificationUnion
}

export type NotificationUpdateData = {
  id: Scalars['String']
  read: Scalars['Boolean']
}

export type OnboardExpertInput = {
  email: Scalars['String']
  hash: Scalars['String']
  hourlyRate: Scalars['Int']
  linkedinURL?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  password: Scalars['String']
  /** Regular mobile phone number, can contain any countries mobile number */
  phone: Scalars['String']
  preferredCurrency: Iso4217CurrencyCode
  researchGateURL?: InputMaybe<Scalars['String']>
  twitterURL?: InputMaybe<Scalars['String']>
}

export enum OnboardingStatus {
  Accepted = 'ACCEPTED',
  Identified = 'IDENTIFIED',
  Rejected = 'REJECTED',
}

export type Organization = {
  __typename?: 'Organization'
  Consultations: Array<Consultation>
  Credit?: Maybe<Credit>
  ExpertRequests: Array<ExpertRequest>
  Invitations: Array<Invitation>
  Members: Array<OrganizationMember>
  Projects: Array<Project>
  Subscription: PaymentSubscription
  Support: SupportDto
  _count: OrganizationCounts
  createdAt: Scalars['DateTime']
  detailedProjectFields: Scalars['Boolean']
  id: Scalars['ID']
  /** @deprecated picturePath will contain the organization logo from now on */
  imageUrl?: Maybe<Scalars['String']>
  isHourlyRatePresented: Scalars['Boolean']
  isOnboardingStatusPresented: Scalars['Boolean']
  legacyID?: Maybe<Scalars['String']>
  name: Scalars['String']
  picturePath?: Maybe<Scalars['String']>
  showExpertSearch: Scalars['Boolean']
  supportId: Scalars['String']
  updatedAt: Scalars['DateTime']
  url?: Maybe<Scalars['String']>
  verified: Scalars['Boolean']
}

export type OrganizationCounts = {
  __typename?: 'OrganizationCounts'
  ExpertRequests: Scalars['Int']
  Invitations: Scalars['Int']
  Projects: Scalars['Int']
}

export type OrganizationMember = {
  __typename?: 'OrganizationMember'
  AuthoredComments: Array<Comment>
  Consultations: Array<Consultation>
  Expert?: Maybe<Expert>
  /** @deprecated Use NotificationsPaginated instead */
  Notifications: Array<NotificationUnion>
  NotificationsPaginated: NotificationConnection
  OrganizationMembership?: Maybe<OrganizationMembership>
  Projects: Array<Project>
  Reviews: Array<ReviewShallow>
  cognitoId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  emailPreference: Scalars['String']
  id: Scalars['ID']
  legacyID?: Maybe<Scalars['String']>
  name: Scalars['String']
  notificationCount: Scalars['Int']
  organizationMemberId: Scalars['ID']
  organizationMemberRole: MemberRole
  phone?: Maybe<Scalars['String']>
  profilePicturePath?: Maybe<Scalars['String']>
  role: Role
  showTutorial: Scalars['Boolean']
  updatedAt: Scalars['DateTime']
}

export type OrganizationMemberConsultationsArgs = {
  meetingNumber?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type OrganizationMemberNotificationsPaginatedArgs = {
  paginationInput: PrismaPaginationInfo
}

export type OrganizationMemberNotificationCountArgs = {
  unread: Scalars['Boolean']
}

export type OrganizationMemberNotification = {
  __typename?: 'OrganizationMemberNotification'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  memberId?: Maybe<Scalars['String']>
  memberName?: Maybe<Scalars['String']>
  organizationId?: Maybe<Scalars['String']>
  organizationName?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export type OrganizationMemberUpdateInput = {
  role: MemberRole
  userId: Scalars['String']
}

export type OrganizationMembership = {
  __typename?: 'OrganizationMembership'
  Organization: Organization
  id: Scalars['ID']
  organizationMemberRole: MemberRole
}

export type OrganizationUpdateInput = {
  imageUrl?: InputMaybe<Scalars['String']>
  invitations?: InputMaybe<Array<InvitationUpdateInput>>
  members?: InputMaybe<Array<OrganizationMemberUpdateInput>>
  name?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type OrganizationalInviteCreateInput = {
  email: Scalars['String']
  /** If `organizationId` is not provided, the default organization of the viewer will be used. The attempt to invite to an organization viewer is not a part of will fail for a non-admin user */
  organizationId?: InputMaybe<Scalars['String']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type PaymentSubscription = {
  __typename?: 'PaymentSubscription'
  currency: Scalars['String']
  currentPeriodEnd?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  price: Scalars['Int']
  status: SubscriptionStatus
}

export type PriceRangePerCredit = {
  __typename?: 'PriceRangePerCredit'
  from: Scalars['Float']
  to?: Maybe<Scalars['Float']>
}

export type PrismaPaginationInfo = {
  cursor?: InputMaybe<Scalars['String']>
  take: Scalars['Int']
}

export type Project = {
  __typename?: 'Project'
  ClientAvailability: Array<Timespan>
  Comments: Array<Comment>
  /** @deprecated Use ProjectExperts instead */
  Experts: Array<ProjectExpert>
  Files: Array<File>
  Members: Array<ProjectMember>
  Organization: Organization
  ProjectComments: Array<ProjectComment>
  ProjectExperts: Array<ExpertProjectCollaboration>
  VettingQuestions: Array<VettingQuestion>
  _count: ProjectCounts
  active: Scalars['Boolean']
  chargeCode?: Maybe<Scalars['String']>
  company?: Maybe<Scalars['String']>
  complianceLimitations?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  dueDate?: Maybe<Scalars['DateTime']>
  geography?: Maybe<Scalars['String']>
  goals?: Maybe<Scalars['String']>
  id: Scalars['ID']
  industry?: Maybe<Scalars['String']>
  legacyID?: Maybe<Scalars['String']>
  organizationId: Scalars['String']
  /** @deprecated Use VettingQuestions instead */
  questions: Array<Scalars['String']>
  /** @deprecated Not needed anymore */
  state: ProjectState
  title: Scalars['String']
  updatedAt: Scalars['DateTime']
  visibility: ProjectVisibility
}

export type ProjectComment = {
  __typename?: 'ProjectComment'
  Author?: Maybe<BasicUser>
  Project: Project
  authorId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  projectId: Scalars['String']
  text: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type ProjectCommentCreateInput = {
  projectId: Scalars['String']
  text: Scalars['String']
}

export type ProjectCommentNotification = {
  __typename?: 'ProjectCommentNotification'
  authorId?: Maybe<Scalars['String']>
  authorName?: Maybe<Scalars['String']>
  commentId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  projectId?: Maybe<Scalars['String']>
  projectTitle?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export type ProjectCounts = {
  __typename?: 'ProjectCounts'
  ExpertCollaborators: Scalars['Int']
  Members: Scalars['Int']
  ProjectComments: Scalars['Int']
}

export type ProjectCreateInput = {
  VettingQuestions?: InputMaybe<Array<Scalars['String']>>
  active?: InputMaybe<Scalars['Boolean']>
  chargeCode?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  complianceLimitations?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  dueDate?: InputMaybe<Scalars['String']>
  geography?: InputMaybe<Scalars['String']>
  goals?: InputMaybe<Scalars['String']>
  industry?: InputMaybe<Scalars['String']>
  questions?: InputMaybe<Array<Scalars['String']>>
  title: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
  visibility: ProjectVisibility
}

export type ProjectExpert = {
  __typename?: 'ProjectExpert'
  Availability: Array<Timespan>
  Certifications: Array<Certification>
  ClinicalTrials: Array<ClinicalTrial>
  Comments: Array<Comment>
  ConferenceActivity: Array<ConferenceActivity>
  Education: Array<EducationRecord>
  Experience: Array<ExperienceRecord>
  IndustryCollaborationItem: Array<IndustryCollaborationItem>
  Invoices: Array<Invoice>
  Languages: Array<Language>
  Projects: Array<Project>
  Publications: Array<Publication>
  Reviews: Array<ReviewShallow>
  Skills: Array<Skill>
  User: BasicUser
  VettingQuestionAnswers: Array<VettingQuestionAnswer>
  VettingQuestionsAnswers: Array<VettingQuestionAnswer>
  _count: ExpertCounts
  about: Scalars['String']
  blacklisted: Scalars['Boolean']
  collaborationCreatedAt: Scalars['DateTime']
  collaborationId: Scalars['String']
  countries?: Maybe<Array<Iso2CountryCode>>
  createdAt: Scalars['DateTime']
  hIndex: Scalars['Int']
  hourlyCreditRate?: Maybe<Scalars['Int']>
  hourlyRate?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  industries?: Maybe<Array<Scalars['String']>>
  isOnboarded: Scalars['Boolean']
  legacyID: Scalars['String']
  linkedinFollowers?: Maybe<Scalars['Int']>
  linkedinID?: Maybe<Scalars['String']>
  linkedinURL?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  locationInfo?: Maybe<LocationInfo>
  onboardingStatus?: Maybe<OnboardingStatus>
  originalHourlyRate?: Maybe<Scalars['Int']>
  preferredCurrency?: Maybe<Iso4217CurrencyCode>
  projectConsentStatus: ExpertTermsConsentStatus
  projectState: ExpertProjectCollaborationState
  researchGateURL?: Maybe<Scalars['String']>
  seniority: Scalars['String']
  state: ExpertState
  termsAccepted: Scalars['Boolean']
  termsAcceptedAt?: Maybe<Scalars['DateTime']>
  title?: Maybe<Scalars['String']>
  twitterFollowers?: Maybe<Scalars['Int']>
  twitterURL?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
  userId: Scalars['String']
}

export type ProjectExpertCommentsArgs = {
  projectId?: InputMaybe<Scalars['String']>
}

export type ProjectMember = {
  __typename?: 'ProjectMember'
  AuthoredComments: Array<Comment>
  Consultations: Array<Consultation>
  Expert?: Maybe<Expert>
  /** @deprecated Use NotificationsPaginated instead */
  Notifications: Array<NotificationUnion>
  NotificationsPaginated: NotificationConnection
  OrganizationMembership?: Maybe<OrganizationMembership>
  Projects: Array<Project>
  Reviews: Array<ReviewShallow>
  cognitoId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  emailPreference: Scalars['String']
  id: Scalars['ID']
  legacyID?: Maybe<Scalars['String']>
  name: Scalars['String']
  notificationCount: Scalars['Int']
  organizationMemberId: Scalars['String']
  phone?: Maybe<Scalars['String']>
  profilePicturePath?: Maybe<Scalars['String']>
  projectMemberRole: MemberRole
  role: Role
  showTutorial: Scalars['Boolean']
  updatedAt: Scalars['DateTime']
}

export type ProjectMemberConsultationsArgs = {
  meetingNumber?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type ProjectMemberNotificationsPaginatedArgs = {
  paginationInput: PrismaPaginationInfo
}

export type ProjectMemberNotificationCountArgs = {
  unread: Scalars['Boolean']
}

export type ProjectMemberInput = {
  organizationMemberId: Scalars['String']
  role: MemberRole
}

export type ProjectMemberNotification = {
  __typename?: 'ProjectMemberNotification'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  memberId?: Maybe<Scalars['String']>
  memberName?: Maybe<Scalars['String']>
  projectId?: Maybe<Scalars['String']>
  projectTitle?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export type ProjectNotification = {
  __typename?: 'ProjectNotification'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  projectId?: Maybe<Scalars['String']>
  projectTitle?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export type ProjectReviewCreateInput = {
  projectId: Scalars['String']
  rating: Scalars['Int']
  text?: InputMaybe<Scalars['String']>
}

export enum ProjectState {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  Ongoing = 'ONGOING',
}

export type ProjectUpdateInput = {
  VettingQuestions?: InputMaybe<Array<VettingQuestionInput>>
  active?: InputMaybe<Scalars['Boolean']>
  availability?: InputMaybe<Array<TimespanDto>>
  chargeCode?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  complianceLimitations?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  dueDate?: InputMaybe<Scalars['String']>
  filePaths?: InputMaybe<Array<Scalars['String']>>
  geography?: InputMaybe<Scalars['String']>
  goals?: InputMaybe<Scalars['String']>
  industry?: InputMaybe<Scalars['String']>
  legacyID?: InputMaybe<Scalars['String']>
  members?: InputMaybe<Array<ProjectMemberInput>>
  questions?: InputMaybe<Array<Scalars['String']>>
  state?: InputMaybe<ProjectState>
  title?: InputMaybe<Scalars['String']>
  visibility?: InputMaybe<ProjectVisibility>
}

export enum ProjectVisibility {
  Anonymous = 'ANONYMOUS',
  Visible = 'VISIBLE',
}

export type PublicInvitation = ClientInvitation | ExpertInvitation

export type Publication = {
  __typename?: 'Publication'
  Authors: Array<PublicationAuthor>
  authors: Array<Scalars['String']>
  citationIds: Array<Scalars['String']>
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  doi?: Maybe<Scalars['String']>
  id: Scalars['ID']
  link?: Maybe<Scalars['String']>
  name: Scalars['String']
  ncbiId: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  updatedAt: Scalars['DateTime']
}

export type PublicationAuthor = {
  __typename?: 'PublicationAuthor'
  expertId?: Maybe<Scalars['String']>
  name: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  comments: Array<Comment>
  consultation: Consultation
  creditPrices: Array<CreditPriceModel>
  currentCompanyFilterInfo: FilterInfoConnection
  expert: Expert
  expertRequests: Array<ExpertRequest>
  filterInfo: SearchedExpertFilterInfo
  /** @deprecated Use projectExpert instead */
  findProjectExpert: ProjectExpert
  invitation: PublicInvitation
  invitations: Array<Invitation>
  invoice: Invoice
  /** @deprecated Use viewer.Expert.Invoices instead */
  invoices: Array<Invoice>
  locationFilterInfo: Array<LocationFilterInfoNode>
  organization: Organization
  organizations: Array<Organization>
  pastCompaniesFilterInfo: FilterInfoConnection
  project: Project
  projectComments: Array<ProjectComment>
  projectExpert: ExpertProjectCollaboration
  projects: Array<Project>
  reviews: Array<Review>
  searchExperts: ExpertSearchConnection
  seniorityFilterInfo: FilterInfoConnection
  skillsFilterInfo: FilterInfoConnection
  viewer: BasicUser
}

export type QueryCommentsArgs = {
  authorId?: InputMaybe<Scalars['String']>
  expertId?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type QueryConsultationArgs = {
  id: Scalars['String']
}

export type QueryCurrentCompanyFilterInfoArgs = {
  filterSearchTerm?: InputMaybe<Scalars['String']>
  paginationInput: PrismaPaginationInfo
  term: Scalars['String']
}

export type QueryExpertArgs = {
  id: Scalars['String']
}

export type QueryExpertRequestsArgs = {
  organizationId?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type QueryFilterInfoArgs = {
  term: Scalars['String']
}

export type QueryFindProjectExpertArgs = {
  expertCollaborationID: Scalars['String']
}

export type QueryInvitationArgs = {
  hash: Scalars['String']
}

export type QueryInvitationsArgs = {
  data?: InputMaybe<FilterInput>
}

export type QueryInvoiceArgs = {
  id: Scalars['String']
}

export type QueryLocationFilterInfoArgs = {
  term: Scalars['String']
}

export type QueryOrganizationArgs = {
  id: Scalars['String']
}

export type QueryPastCompaniesFilterInfoArgs = {
  filterSearchTerm?: InputMaybe<Scalars['String']>
  paginationInput: PrismaPaginationInfo
  term: Scalars['String']
}

export type QueryProjectArgs = {
  id: Scalars['String']
}

export type QueryProjectCommentsArgs = {
  projectId: Scalars['String']
}

export type QueryProjectExpertArgs = {
  expertCollaborationID: Scalars['String']
}

export type QueryReviewsArgs = {
  authorId?: InputMaybe<Scalars['String']>
  expertId?: InputMaybe<Scalars['String']>
  projectId?: InputMaybe<Scalars['String']>
}

export type QuerySearchExpertsArgs = {
  filter?: InputMaybe<SearchForExpertsFilters>
  paginationInput: PrismaPaginationInfo
  term: Scalars['String']
}

export type QuerySeniorityFilterInfoArgs = {
  filterSearchTerm?: InputMaybe<Scalars['String']>
  paginationInput: PrismaPaginationInfo
  term: Scalars['String']
}

export type QuerySkillsFilterInfoArgs = {
  filterSearchTerm?: InputMaybe<Scalars['String']>
  paginationInput: PrismaPaginationInfo
  term: Scalars['String']
}

export type Review = {
  __typename?: 'Review'
  Author?: Maybe<BasicUser>
  Expert: Expert
  Project: Project
  authorId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  projectId: Scalars['String']
  rating: Scalars['Int']
  text?: Maybe<Scalars['String']>
  type: ReviewType
  updatedAt: Scalars['DateTime']
}

export type ReviewNotification = {
  __typename?: 'ReviewNotification'
  authorId?: Maybe<Scalars['String']>
  authorName?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  expertName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  projectId?: Maybe<Scalars['String']>
  projectTitle?: Maybe<Scalars['String']>
  read: Scalars['Boolean']
  reviewId?: Maybe<Scalars['String']>
  type: NotificationType
  updatedAt: Scalars['DateTime']
}

export type ReviewShallow = {
  __typename?: 'ReviewShallow'
  authorId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  projectId: Scalars['String']
  rating: Scalars['Int']
  text?: Maybe<Scalars['String']>
  type: ReviewType
  updatedAt: Scalars['DateTime']
}

export enum ReviewType {
  Expert = 'EXPERT',
  Project = 'PROJECT',
}

export type ReviewUpdateInput = {
  rating: Scalars['Int']
  text?: InputMaybe<Scalars['String']>
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type SearchForExpertsFilters = {
  currentCompany?: InputMaybe<Array<Scalars['String']>>
  detailedLocations?: InputMaybe<Array<DetailedLocationFilter>>
  pastCompany?: InputMaybe<Array<Scalars['String']>>
  seniority?: InputMaybe<Array<Scalars['String']>>
  skills?: InputMaybe<Array<Scalars['String']>>
}

export type SearchedExpertFilterInfo = {
  __typename?: 'SearchedExpertFilterInfo'
  currentCompany: Array<FilterInfoNode>
  location: Array<LocationFilterInfoNode>
  pastCompanies: Array<FilterInfoNode>
  seniority: Array<FilterInfoNode>
  skill: Array<FilterInfoNode>
}

export type SignupUserInput = {
  email: Scalars['String']
  hash: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  phone?: InputMaybe<Scalars['String']>
}

export type Skill = {
  __typename?: 'Skill'
  createdAt: Scalars['DateTime']
  endorcementCount: Scalars['Int']
  expertId: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export enum State {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Revoked = 'REVOKED',
}

export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type SupportDto = {
  __typename?: 'SupportDTO'
  email: Scalars['String']
  name: Scalars['String']
  phone: Scalars['String']
}

export type Timespan = {
  __typename?: 'Timespan'
  createdAt: Scalars['DateTime']
  expertId?: Maybe<Scalars['String']>
  from: Scalars['DateTime']
  id: Scalars['ID']
  projectId?: Maybe<Scalars['String']>
  to: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type TimespanDto = {
  from: Scalars['DateTime']
  to: Scalars['DateTime']
}

export enum UsState {
  Ak = 'ak',
  Al = 'al',
  Ar = 'ar',
  As = 'as',
  Az = 'az',
  Ca = 'ca',
  Co = 'co',
  Ct = 'ct',
  Dc = 'dc',
  De = 'de',
  Fl = 'fl',
  Fm = 'fm',
  Ga = 'ga',
  Gu = 'gu',
  Hi = 'hi',
  Ia = 'ia',
  Id = 'id',
  Il = 'il',
  In = 'in',
  Ks = 'ks',
  Ky = 'ky',
  La = 'la',
  Ma = 'ma',
  Md = 'md',
  Me = 'me',
  Mh = 'mh',
  Mi = 'mi',
  Mn = 'mn',
  Mo = 'mo',
  Mp = 'mp',
  Ms = 'ms',
  Mt = 'mt',
  Nc = 'nc',
  Nd = 'nd',
  Ne = 'ne',
  Nh = 'nh',
  Nj = 'nj',
  Nm = 'nm',
  Nv = 'nv',
  Ny = 'ny',
  Oh = 'oh',
  Ok = 'ok',
  Or = 'or',
  Pa = 'pa',
  Pr = 'pr',
  Pw = 'pw',
  Ri = 'ri',
  Sc = 'sc',
  Sd = 'sd',
  Tn = 'tn',
  Tx = 'tx',
  Ut = 'ut',
  Va = 'va',
  Vi = 'vi',
  Vt = 'vt',
  Wa = 'wa',
  Wi = 'wi',
  Wv = 'wv',
  Wy = 'wy',
}

export type UpdateExpertInput = {
  Certifications?: InputMaybe<Array<CreateCertificationInput>>
  ClinicalTrials?: InputMaybe<Array<CreateClinicalTrialInput>>
  ConferenceActivity?: InputMaybe<Array<ConferenceActivityInput>>
  Education?: InputMaybe<Array<CreateEducationRecordInput>>
  Experience?: InputMaybe<Array<CreateExperienceRecordInput>>
  IndustryCollaboration?: InputMaybe<Array<IndustryCollaborationItemInput>>
  Languages?: InputMaybe<Array<CreateLanguageInput>>
  Publications?: InputMaybe<Array<CreatePublicationInput>>
  Skills?: InputMaybe<Array<CreateSkillInput>>
  about?: InputMaybe<Scalars['String']>
  company?: InputMaybe<Scalars['String']>
  countries?: InputMaybe<Array<Iso2CountryCode>>
  email?: InputMaybe<Scalars['String']>
  hourlyRate?: InputMaybe<Scalars['Int']>
  industries?: InputMaybe<Array<Scalars['String']>>
  linkedinFollowers?: InputMaybe<Scalars['Int']>
  linkedinURL?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  preferredCurrency?: InputMaybe<Iso4217CurrencyCode>
  researchGateURL?: InputMaybe<Scalars['String']>
  school?: InputMaybe<Scalars['String']>
  seniority?: InputMaybe<Scalars['String']>
  state?: InputMaybe<ExpertState>
  title?: InputMaybe<Scalars['String']>
  twitterFollowers?: InputMaybe<Scalars['Int']>
  twitterURL?: InputMaybe<Scalars['String']>
}

export type UpdateInvoiceInput = {
  state?: InputMaybe<InvoiceState>
}

export type UpdateViewerInput = {
  email?: InputMaybe<Scalars['String']>
  expertAvailability?: InputMaybe<Array<TimespanDto>>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  showTutorial?: InputMaybe<Scalars['Boolean']>
}

export type VettingQuestion = {
  __typename?: 'VettingQuestion'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  orderNumber: Scalars['Int']
  text: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type VettingQuestionAnswer = {
  __typename?: 'VettingQuestionAnswer'
  VettingQuestion: VettingQuestion
  createdAt: Scalars['DateTime']
  expertProjectCollaborationId: Scalars['String']
  id: Scalars['ID']
  text: Scalars['ID']
  updatedAt: Scalars['DateTime']
  vettingQuestionId: Scalars['String']
}

export type VettingQuestionAnswerDto = {
  id?: InputMaybe<Scalars['String']>
  text: Scalars['String']
  vettingQuestionId: Scalars['String']
}

export type VettingQuestionInput = {
  id?: InputMaybe<Scalars['String']>
  orderNumber: Scalars['Int']
  text: Scalars['String']
}

export type GetViewerQueryVariables = Exact<{ [key: string]: never }>

export type GetViewerQuery = {
  __typename?: 'Query'
  viewer: {
    __typename?: 'BasicUser'
    id: string
    showTutorial: boolean
    notificationCount: number
    email?: string | null
    role: Role
    name: string
    phone?: string | null
    profilePicturePath?: string | null
    OrganizationMembership?: {
      __typename?: 'OrganizationMembership'
      id: string
      organizationMemberRole: MemberRole
      Organization: {
        __typename?: 'Organization'
        id: string
        showExpertSearch: boolean
        detailedProjectFields: boolean
        isOnboardingStatusPresented: boolean
      }
    } | null
    Expert?: {
      __typename?: 'Expert'
      id: string
      VettingQuestionsAnswers: Array<{
        __typename?: 'VettingQuestionAnswer'
        id: string
        text: string
        expertProjectCollaborationId: string
        vettingQuestionId: string
        VettingQuestion: {
          __typename?: 'VettingQuestion'
          text: string
          id: string
          createdAt: string
        }
      }>
    } | null
  }
}

export const GetViewerDocument = gql`
  query GetViewer {
    viewer {
      id
      showTutorial
      notificationCount(unread: true)
      email
      OrganizationMembership {
        id
        organizationMemberRole
        Organization {
          id
          showExpertSearch
          detailedProjectFields
          isOnboardingStatusPresented
        }
      }
      Expert {
        id
        VettingQuestionsAnswers {
          id
          text
          expertProjectCollaborationId
          VettingQuestion {
            text
            id
            createdAt
          }
          vettingQuestionId
        }
      }
      role
      name
      phone
      profilePicturePath
    }
  }
`

/**
 * __useGetViewerQuery__
 *
 * To run a query within a React component, call `useGetViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetViewerQuery(
  baseOptions?: Apollo.QueryHookOptions<GetViewerQuery, GetViewerQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetViewerQuery, GetViewerQueryVariables>(
    GetViewerDocument,
    options
  )
}

export function useGetViewerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetViewerQuery,
    GetViewerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetViewerQuery, GetViewerQueryVariables>(
    GetViewerDocument,
    options
  )
}

export type GetViewerQueryHookResult = ReturnType<typeof useGetViewerQuery>

export type GetViewerLazyQueryHookResult = ReturnType<
  typeof useGetViewerLazyQuery
>

export type GetViewerQueryResult = Apollo.QueryResult<
  GetViewerQuery,
  GetViewerQueryVariables
>
