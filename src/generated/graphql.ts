import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};



export type Address = {
  __typename?: 'Address';
  Line1?: Maybe<Scalars['String']>;
  Line2?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  PostalCode?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  Country?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  Line1?: Maybe<Scalars['String']>;
  Line2?: Maybe<Scalars['String']>;
  City?: Maybe<Scalars['String']>;
  PostalCode?: Maybe<Scalars['String']>;
  State?: Maybe<Scalars['String']>;
  Country?: Maybe<Scalars['String']>;
};

export type AllowanceBenefitInput = {
  CompanyID?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type AllowanceBenfitEntity = InterfaceBase & {
  __typename?: 'AllowanceBenfitEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  AllowanceBenefitID: Scalars['String'];
  CompanyID: Scalars['String'];
  Name: Scalars['String'];
  Company: CompanyEntity;
};

export enum AllowanceFrequency {
  Monthly = 'Monthly',
  Yearly = 'Yearly',
  Lifetime = 'Lifetime'
}

export type AllowanceItemEntity = InterfaceBase & {
  __typename?: 'AllowanceItemEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  AllowanceItemID: Scalars['String'];
  AllowanceBenefitID: Scalars['String'];
  Name: Scalars['String'];
  PayItemID: Scalars['String'];
  AllowanceFrequency: AllowanceFrequency;
  TotalAmount: Scalars['Float'];
  AllowanceBenefit: AllowanceBenfitEntity;
};

export type AllowanceItemInput = {
  AllowanceBenefitID?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  PayItemID?: Maybe<Scalars['String']>;
  AllowanceFrequency?: Maybe<AllowanceFrequency>;
  TotalAmount?: Maybe<Scalars['Float']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum ApprovalStatus {
  Draft = 'Draft',
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected'
}

export enum AvailableBasis {
  FullEntitlement = 'Full_Entitlement',
  EarnByProration = 'Earn_By_Proration',
  NoProration = 'No_Proration'
}

export type BankInfoEntity = InterfaceBase & {
  __typename?: 'BankInfoEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  BankInfoID: Scalars['String'];
  CompanyID: Scalars['String'];
  Name: Scalars['String'];
  AccountName: Scalars['String'];
  AccountNo: Scalars['String'];
  SwiftCode: Scalars['String'];
  OrganizationCode: Scalars['String'];
  Address: Address;
  IsDefault: Scalars['Boolean'];
  Company: CompanyEntity;
};

export type BankInfoInputs = {
  CompanyID?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  AccountName?: Maybe<Scalars['String']>;
  AccountNo?: Maybe<Scalars['String']>;
  SwiftCode?: Maybe<Scalars['String']>;
  OrganizationCode?: Maybe<Scalars['String']>;
  Address?: Maybe<AddressInput>;
  IsDefault?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum CalculationMethod {
  ServiceDay = 'Service_Day',
  ServiceMonth = 'Service_Month'
}

export type CalendarOffDayEntity = InterfaceBase & {
  __typename?: 'CalendarOffDayEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  CalendarOffDayID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  StateID?: Maybe<Scalars['String']>;
};

export type CalendarOffDayInput = {
  EmployeeID: Scalars['String'];
  StateID: Scalars['String'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type CareerLogEntity = InterfaceBase & {
  __typename?: 'CareerLogEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  CareerLogID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  FromCompany?: Maybe<Scalars['String']>;
  ToCompany?: Maybe<Scalars['String']>;
  FromDepartment?: Maybe<Scalars['String']>;
  ToDepartment?: Maybe<Scalars['String']>;
  FromPosition?: Maybe<Scalars['String']>;
  ToPosition?: Maybe<Scalars['String']>;
  EffectiveDate?: Maybe<Scalars['DateTime']>;
  DocumentID?: Maybe<Scalars['String']>;
  Employee?: Maybe<EmployeeEntity>;
};

export type CareerLogInput = {
  EmployeeID?: Maybe<Scalars['String']>;
  FromCompany?: Maybe<Scalars['String']>;
  ToCompany?: Maybe<Scalars['String']>;
  FromDepartment?: Maybe<Scalars['String']>;
  ToDepartment?: Maybe<Scalars['String']>;
  FromPosition?: Maybe<Scalars['String']>;
  ToPosition?: Maybe<Scalars['String']>;
  EffectiveDate?: Maybe<Scalars['DateTime']>;
  DocumentID?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum CfMethod {
  PercEntitlement = 'Perc_Entitlement',
  PercBalance = 'Perc_Balance',
  Day = 'Day'
}

export type ClaimBenefitEntity = InterfaceBase & {
  __typename?: 'ClaimBenefitEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  ClaimBenefitID: Scalars['String'];
  CompanyID: Scalars['String'];
  Name: Scalars['String'];
  Company: CompanyEntity;
};

export type ClaimBenefitInput = {
  CompanyID?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type ClaimDetailsEntity = InterfaceBase & {
  __typename?: 'ClaimDetailsEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  ClaimDetailsID: Scalars['String'];
  ClaimHeaderID?: Maybe<Scalars['String']>;
  ClaimTypeID?: Maybe<Scalars['String']>;
  JobAccountID?: Maybe<Scalars['String']>;
  ReceiptDate: Scalars['DateTime'];
  ReceiptNo?: Maybe<Scalars['String']>;
  ClaimAmount: Scalars['Float'];
  DocumentID?: Maybe<Scalars['String']>;
  ClaimRemarks?: Maybe<Scalars['String']>;
  ClaimHeader?: Maybe<ClaimHeaderEntity>;
};

export type ClaimDetailsInput = {
  ClaimHeaderID?: Maybe<Scalars['String']>;
  ClaimTypeID?: Maybe<Scalars['String']>;
  JobAccountID?: Maybe<Scalars['String']>;
  ReceiptDate?: Maybe<Scalars['DateTime']>;
  ReceiptNo?: Maybe<Scalars['String']>;
  ClaimAmount: Scalars['Float'];
  DocumentID?: Maybe<Scalars['String']>;
  ClaimRemarks: Scalars['String'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum ClaimFrequency {
  Montly = 'Montly',
  Yearly = 'Yearly',
  BiYearly = 'Bi_Yearly',
  Lifetime = 'Lifetime'
}

export type ClaimHeaderEntity = InterfaceBase & {
  __typename?: 'ClaimHeaderEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  ClaimHeaderID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  Subject?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  ApprovalStatus: ApprovalStatus;
  ApprovalDate?: Maybe<Scalars['DateTime']>;
  ClaimAmountByFinance: Scalars['Float'];
  FinanceApproveDT?: Maybe<Scalars['DateTime']>;
  FinanceApproveBy?: Maybe<Scalars['String']>;
  FinanceRemarks?: Maybe<Scalars['String']>;
  PostedDate?: Maybe<Scalars['DateTime']>;
  ClaimDetails: Array<ClaimDetailsEntity>;
  Employee?: Maybe<EmployeeEntity>;
  Company?: Maybe<CompanyEntity>;
};

export type ClaimHeaderInput = {
  CompanyID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  Subject?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  ApprovalStatus: ApprovalStatus;
  ApprovalDate?: Maybe<Scalars['DateTime']>;
  ClaimAmountByFinance?: Maybe<Scalars['Float']>;
  FinanceApproveDT?: Maybe<Scalars['DateTime']>;
  FinanceApproveBy?: Maybe<Scalars['String']>;
  FinanceRemarks?: Maybe<Scalars['String']>;
  PostedDate?: Maybe<Scalars['DateTime']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type ClaimItemEntity = InterfaceBase & {
  __typename?: 'ClaimItemEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  ClaimItemID: Scalars['String'];
  ClaimBenefitID: Scalars['String'];
  Name: Scalars['String'];
  ClaimFrequency: ClaimFrequency;
  PayItemID: Scalars['String'];
  PayMethod: PaymentMethod;
  TotalAmt: Scalars['Float'];
  Occurrence: Occurrence;
  OccurrenceLimit: Scalars['Float'];
  IsLimit: Scalars['Boolean'];
  ClaimBenefit: ClaimBenefitEntity;
};

export type ClaimItemInput = {
  ClaimBenefitID?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  ClaimFrequency?: Maybe<ClaimFrequency>;
  PayItemID?: Maybe<Scalars['String']>;
  PayMethod?: Maybe<PaymentMethod>;
  TotalAmount?: Maybe<Scalars['Float']>;
  Occurrence?: Maybe<Occurrence>;
  OccurrenceLimit?: Maybe<Scalars['Float']>;
  IsLimit?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type ClaimPostingInput = {
  PayPeriodID?: Maybe<Scalars['String']>;
  PostedDate?: Maybe<Scalars['DateTime']>;
};

export type CompanyEntity = InterfaceBase & {
  __typename?: 'CompanyEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  CompanyID: Scalars['String'];
  SubscriptionAccountID?: Maybe<Scalars['String']>;
  CompanyName?: Maybe<Scalars['String']>;
  BizRegNo?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  WorkDaysAMonth?: Maybe<Scalars['Float']>;
  WorkHoursADay?: Maybe<Scalars['Float']>;
  PayrollCutOffDay?: Maybe<Scalars['Float']>;
  CalendarStateID?: Maybe<Scalars['String']>;
  ContactID?: Maybe<Scalars['String']>;
  ClaimTrxDayLimit: Scalars['Int'];
  Departments?: Maybe<Array<DepartmentEntity>>;
  Employees?: Maybe<Array<EmployeeEntity>>;
  CompanyStatutory?: Maybe<CompanyStatutoryEntity>;
  JobGrades?: Maybe<Array<JobGradeEntity>>;
  BankInfos?: Maybe<Array<BankInfoEntity>>;
  CompanyOffDays?: Maybe<Array<CompanyOffDayEntity>>;
  RecurringRestOffDays?: Maybe<Array<RecurringRestOffDayEntity>>;
  LeaveRounding?: Maybe<LeaveRoundingEntity>;
};

export type CompanyInput = {
  SubscriptionAccountID?: Maybe<Scalars['String']>;
  CompanyName?: Maybe<Scalars['String']>;
  BizRegNo?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  WorkDaysAMonth?: Maybe<Scalars['Float']>;
  WorkHoursADay?: Maybe<Scalars['Float']>;
  PayrollCutOffDay?: Maybe<Scalars['Float']>;
  CalendarStateID?: Maybe<Scalars['String']>;
  ContactID?: Maybe<Scalars['String']>;
  ClaimTrxDayLimit?: Maybe<Scalars['Int']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type CompanyOffDayEntity = InterfaceBase & {
  __typename?: 'CompanyOffDayEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  CompanyOffDayID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  RecurringRestOffDayID?: Maybe<Scalars['String']>;
  HolidayID?: Maybe<Scalars['String']>;
  DayOffDate?: Maybe<Scalars['DateTime']>;
  Description?: Maybe<Scalars['String']>;
  Company: CompanyEntity;
};

export type CompanyOffDayInput = {
  CompanyID?: Maybe<Scalars['String']>;
  RecurringRestOffDayID?: Maybe<Scalars['String']>;
  HolidayID?: Maybe<Scalars['String']>;
  DayOffDate?: Maybe<Scalars['DateTime']>;
  Description?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type CompanyStatutoryEntity = InterfaceBase & {
  __typename?: 'CompanyStatutoryEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  CompanyStatutoryID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  IsEPF?: Maybe<Scalars['Boolean']>;
  EPFNo?: Maybe<Scalars['String']>;
  IsSocso?: Maybe<Scalars['Boolean']>;
  SocsoNo?: Maybe<Scalars['String']>;
  IsPCB?: Maybe<Scalars['Boolean']>;
  PCBNo?: Maybe<Scalars['String']>;
  IsEIS?: Maybe<Scalars['Boolean']>;
  EISNo?: Maybe<Scalars['String']>;
  IsAngkasa?: Maybe<Scalars['Boolean']>;
  AngkasaNo?: Maybe<Scalars['String']>;
  IsASB?: Maybe<Scalars['Boolean']>;
  ASBNo?: Maybe<Scalars['String']>;
  IsKWAP?: Maybe<Scalars['Boolean']>;
  KWAPNo?: Maybe<Scalars['String']>;
  IsTBH?: Maybe<Scalars['Boolean']>;
  TBHNo?: Maybe<Scalars['String']>;
  IsZakat?: Maybe<Scalars['Boolean']>;
  ZakatNo?: Maybe<Scalars['String']>;
  IsHRDF?: Maybe<Scalars['Boolean']>;
  HRDFNo?: Maybe<Scalars['String']>;
  HRDFRate?: Maybe<Scalars['Float']>;
  SignBy?: Maybe<Scalars['String']>;
  Company?: Maybe<CompanyEntity>;
  SignByCompany?: Maybe<CompanyEntity>;
};

export type CompanyStatutoryInput = {
  CompanyID?: Maybe<Scalars['String']>;
  IsEPF?: Maybe<Scalars['Boolean']>;
  EPFNo?: Maybe<Scalars['String']>;
  IsSocso?: Maybe<Scalars['Boolean']>;
  SocsoNo?: Maybe<Scalars['String']>;
  IsPCB?: Maybe<Scalars['Boolean']>;
  PCBNo?: Maybe<Scalars['String']>;
  IsEIS?: Maybe<Scalars['Boolean']>;
  EISNo?: Maybe<Scalars['String']>;
  IsAngkasa?: Maybe<Scalars['Boolean']>;
  AngkasaNo?: Maybe<Scalars['String']>;
  IsASB?: Maybe<Scalars['Boolean']>;
  ASBNo?: Maybe<Scalars['String']>;
  IsKWAP?: Maybe<Scalars['Boolean']>;
  KWAPNo?: Maybe<Scalars['String']>;
  IsTBH?: Maybe<Scalars['Boolean']>;
  TBHNo?: Maybe<Scalars['String']>;
  IsZakat?: Maybe<Scalars['Boolean']>;
  ZakatNo?: Maybe<Scalars['String']>;
  IsHRDF?: Maybe<Scalars['Boolean']>;
  HRDFNo?: Maybe<Scalars['String']>;
  HRDFRate?: Maybe<Scalars['Float']>;
  SignBy?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type ContactEntity = InterfaceBase & {
  __typename?: 'ContactEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  ContactID: Scalars['String'];
  ParentID: Scalars['String'];
  FullName: Scalars['String'];
  MobileNo: Scalars['String'];
  OfficeNo?: Maybe<Scalars['String']>;
  FaxNo?: Maybe<Scalars['String']>;
  Email: Scalars['String'];
  NRIC: Scalars['String'];
  PassportNo: Scalars['String'];
  Nationality: Nationality;
  Marital: Marital;
  Gender: Gender;
  Race: Race;
  Religion: Religion;
  BirthDate: Scalars['DateTime'];
  Address: Address;
  ProfilePicture?: Maybe<Scalars['String']>;
  WebUrl: Scalars['String'];
};

export type ContactInput = {
  ContactID?: Maybe<Scalars['String']>;
  FullName?: Maybe<Scalars['String']>;
  MobileNo?: Maybe<Scalars['String']>;
  OfficeNo?: Maybe<Scalars['String']>;
  FaxNo?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  NRIC?: Maybe<Scalars['String']>;
  PassportNo?: Maybe<Scalars['String']>;
  Nationality?: Maybe<Nationality>;
  Marital?: Maybe<Marital>;
  Gender?: Maybe<Gender>;
  Race?: Maybe<Race>;
  Religion?: Maybe<Religion>;
  BirthDate?: Maybe<Scalars['DateTime']>;
  Address?: Maybe<AddressInput>;
  ProfilePicture?: Maybe<Scalars['String']>;
  WebUrl?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type Cp159Entity = InterfaceBase & {
  __typename?: 'CP159Entity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  CP159ID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYearMonth?: Maybe<Scalars['DateTime']>;
  ReceiptNoPCB?: Maybe<Scalars['String']>;
  ReceiptDatePCB?: Maybe<Scalars['DateTime']>;
  ReceiptNoCP38?: Maybe<Scalars['String']>;
  ReceiptDateCP38?: Maybe<Scalars['DateTime']>;
  Company?: Maybe<CompanyEntity>;
};

export type Cp159Input = {
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYearMonth?: Maybe<Scalars['DateTime']>;
  ReceiptNoPCB?: Maybe<Scalars['String']>;
  ReceiptDatePCB?: Maybe<Scalars['DateTime']>;
  ReceiptNoCP38?: Maybe<Scalars['String']>;
  ReceiptDateCP38?: Maybe<Scalars['DateTime']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};


export type DepartmentEntity = InterfaceBase & {
  __typename?: 'DepartmentEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  DepartmentID: Scalars['String'];
  ParentID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  DepartmentType: DepartmentType;
  CompanyID: Scalars['String'];
  Company: CompanyEntity;
};

export type DepartmentInput = {
  ParentID?: Maybe<Scalars['String']>;
  CompanyID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  DepartmentType: DepartmentType;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum DepartmentType {
  Department = 'Department',
  Division = 'Division'
}

export type DocumentsEntity = InterfaceBase & {
  __typename?: 'DocumentsEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  DocumentID: Scalars['String'];
  DocumentType: DocumentType;
  Description?: Maybe<Scalars['String']>;
  DocumentFile?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  ParentID?: Maybe<Scalars['String']>;
};

export type DocumentsInput = {
  DocumentType: DocumentType;
  Description?: Maybe<Scalars['String']>;
  DocumentFile?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  ParentID?: Maybe<Scalars['String']>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum DocumentType {
  Payslip = 'Payslip',
  EaForm = 'EA_FORM',
  TaxRelief = 'Tax_Relief',
  GeneralDoc = 'General_Doc',
  PersonalDoc = 'Personal_Doc'
}

export type EaFormSetupEntity = InterfaceBase & {
  __typename?: 'EAFormSetupEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  EAFormSetupID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYear?: Maybe<Scalars['Float']>;
  PayItemID?: Maybe<Scalars['String']>;
  EAForm?: Maybe<Scalars['Float']>;
  CP21?: Maybe<Scalars['Float']>;
  CP22?: Maybe<Scalars['Float']>;
  CP22a?: Maybe<Scalars['Float']>;
  IsShow?: Maybe<Scalars['Boolean']>;
};

export type EaFormSetupInput = {
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYear?: Maybe<Scalars['Float']>;
  PayItemID?: Maybe<Scalars['String']>;
  EAForm?: Maybe<Scalars['Float']>;
  CP21?: Maybe<Scalars['Float']>;
  CP22?: Maybe<Scalars['Float']>;
  CP22a?: Maybe<Scalars['Float']>;
  IsShow?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type EaPartFEntity = InterfaceBase & {
  __typename?: 'EAPartFEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  EAPartFID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  LimitAmt?: Maybe<Scalars['Float']>;
};

export type EaPartFInput = {
  CompanyID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  LimitAmt?: Maybe<Scalars['Float']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum Education {
  Studying = 'Studying',
  DiplomaOnwardsMsia = 'Diploma_Onwards_Msia',
  DegreeOnwardsOutsideMsia = 'Degree_Onwards_Outside_Msia',
  No = 'No'
}

export type EmmployeeListingInput = {
  CompanyID: Scalars['String'];
  Year?: Maybe<Scalars['Float']>;
};

export type EmployeeDependentsEntity = InterfaceBase & {
  __typename?: 'EmployeeDependentsEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  EmployeeDependentsID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  Relationship: Relationship;
  Education: Education;
  ContactID?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  Designation?: Maybe<Scalars['String']>;
  IsWorking?: Maybe<Scalars['Boolean']>;
  IsOKU?: Maybe<Scalars['Boolean']>;
  ChildEligibleRate?: Maybe<Scalars['Float']>;
  Employee?: Maybe<EmployeeEntity>;
  Contact?: Maybe<ContactEntity>;
};

export type EmployeeDependentsInput = {
  EmployeeDependentsID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  Relationship?: Maybe<Relationship>;
  Education?: Maybe<Education>;
  ContactID?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  Designation?: Maybe<Scalars['String']>;
  IsWorking?: Maybe<Scalars['Boolean']>;
  IsOKU?: Maybe<Scalars['Boolean']>;
  ChildEligibleRate?: Maybe<Scalars['Float']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type EmployeeEntity = InterfaceBase & {
  __typename?: 'EmployeeEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  EmployeeID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  SubscriptionUserID?: Maybe<Scalars['String']>;
  DepartmentID?: Maybe<Scalars['String']>;
  JobGradeID?: Maybe<Scalars['String']>;
  ContactID?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  Designation?: Maybe<Scalars['String']>;
  EmploymentType: EmploymentType;
  ReportTo?: Maybe<Scalars['String']>;
  EmployeeNo?: Maybe<Scalars['String']>;
  ResidentStatus: ResidentStatus;
  JoinedDate?: Maybe<Scalars['DateTime']>;
  ConfirmedDate?: Maybe<Scalars['DateTime']>;
  ResignedDate?: Maybe<Scalars['DateTime']>;
  IsOKU: Scalars['Boolean'];
  IsHOD: Scalars['Boolean'];
  Company?: Maybe<CompanyEntity>;
  Contact?: Maybe<ContactEntity>;
  Department?: Maybe<DepartmentEntity>;
  EmployeeStatutory?: Maybe<EmployeeStatutoryEntity>;
  EmployeePrevContribution?: Maybe<EmployeePrevContributionEntity>;
  EmployeeDependents?: Maybe<Array<EmployeeDependentsEntity>>;
  EmployeeCareerLogs?: Maybe<Array<CareerLogEntity>>;
  EmployeeTaxReliefs?: Maybe<Array<EmployeeTaxReliefEntity>>;
};

export type EmployeeInput = {
  CompanyID?: Maybe<Scalars['String']>;
  DepartmentID?: Maybe<Scalars['String']>;
  JobGradeID?: Maybe<Scalars['String']>;
  ContactID?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  SubscriptionUserID?: Maybe<Scalars['String']>;
  Designation?: Maybe<Scalars['String']>;
  EmploymentType?: Maybe<EmploymentType>;
  ReportTo?: Maybe<Scalars['String']>;
  EmployeeNo?: Maybe<Scalars['String']>;
  ResidentStatus?: Maybe<ResidentStatus>;
  JoinedDate?: Maybe<Scalars['DateTime']>;
  ConfirmedDate?: Maybe<Scalars['DateTime']>;
  ResignedDate?: Maybe<Scalars['DateTime']>;
  IsOKU?: Maybe<Scalars['Boolean']>;
  IsHOD?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type EmployeePrevContributionEntity = InterfaceBase & {
  __typename?: 'EmployeePrevContributionEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  EmployeePrevContributionID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  PeriodYear?: Maybe<Scalars['Float']>;
  GrossTaxable?: Maybe<Scalars['Float']>;
  EPFPaid?: Maybe<Scalars['Float']>;
  PCBPaid?: Maybe<Scalars['Float']>;
  ZAKATPaid?: Maybe<Scalars['Float']>;
  Employee?: Maybe<EmployeeEntity>;
};

export type EmployeePrevContributionInput = {
  CompanyID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  PeriodYear: Scalars['Int'];
  GrossTaxable: Scalars['Float'];
  EPFPaid: Scalars['Float'];
  PCBPaid: Scalars['Float'];
  ZAKATPaid: Scalars['Float'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type EmployeeStatutoryEntity = InterfaceBase & {
  __typename?: 'EmployeeStatutoryEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  EmployeeStatutoryID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  IsEPF?: Maybe<Scalars['Boolean']>;
  EPFNo?: Maybe<Scalars['String']>;
  EPFVERate?: Maybe<Scalars['Float']>;
  EPFVERateCmp?: Maybe<Scalars['Float']>;
  IsSocso?: Maybe<Scalars['Boolean']>;
  SocsoNo?: Maybe<Scalars['String']>;
  IsSocsoRelief?: Maybe<Scalars['Boolean']>;
  IsPCB?: Maybe<Scalars['Boolean']>;
  PCBNo?: Maybe<Scalars['String']>;
  PCBBranch?: Maybe<Scalars['String']>;
  IsEIS?: Maybe<Scalars['Boolean']>;
  EISNo?: Maybe<Scalars['String']>;
  IsAngkasa?: Maybe<Scalars['Boolean']>;
  AngkasaNo?: Maybe<Scalars['String']>;
  AngkasaAmount?: Maybe<Scalars['Float']>;
  AngkasaRate?: Maybe<Scalars['Float']>;
  IsASB?: Maybe<Scalars['Boolean']>;
  ASBNo?: Maybe<Scalars['String']>;
  ASBAmount?: Maybe<Scalars['Float']>;
  ASBRate?: Maybe<Scalars['Float']>;
  IsKWAP?: Maybe<Scalars['Boolean']>;
  KWAPNo?: Maybe<Scalars['String']>;
  KWAPAmount?: Maybe<Scalars['Float']>;
  KWAPRate?: Maybe<Scalars['Float']>;
  IsTBH?: Maybe<Scalars['Boolean']>;
  TBHNo?: Maybe<Scalars['String']>;
  TBHAmount?: Maybe<Scalars['Float']>;
  TBHRate?: Maybe<Scalars['Float']>;
  IsZakat?: Maybe<Scalars['Boolean']>;
  ZakatNo?: Maybe<Scalars['String']>;
  ZakatAmount?: Maybe<Scalars['Float']>;
  ZakatRate?: Maybe<Scalars['Float']>;
  Employee?: Maybe<EmployeeEntity>;
};

export type EmployeeStatutoryInput = {
  EmployeeID?: Maybe<Scalars['String']>;
  IsEPF?: Maybe<Scalars['Boolean']>;
  EPFNo?: Maybe<Scalars['String']>;
  EPFVERate?: Maybe<Scalars['Float']>;
  EPFVERateCmp?: Maybe<Scalars['Float']>;
  IsSocso?: Maybe<Scalars['Boolean']>;
  SocsoNo?: Maybe<Scalars['String']>;
  IsSocsoRelief?: Maybe<Scalars['Boolean']>;
  IsPCB?: Maybe<Scalars['Boolean']>;
  PCBNo?: Maybe<Scalars['String']>;
  PCBBranch?: Maybe<Scalars['String']>;
  IsEIS?: Maybe<Scalars['Boolean']>;
  EISNo?: Maybe<Scalars['String']>;
  IsAngkasa?: Maybe<Scalars['Boolean']>;
  AngkasaNo?: Maybe<Scalars['String']>;
  AngkasaAmount?: Maybe<Scalars['Float']>;
  AngkasaRate?: Maybe<Scalars['Float']>;
  IsASB?: Maybe<Scalars['Boolean']>;
  ASBNo?: Maybe<Scalars['String']>;
  ASBAmount?: Maybe<Scalars['Float']>;
  ASBRate?: Maybe<Scalars['Float']>;
  IsKWAP?: Maybe<Scalars['Boolean']>;
  KWAPNo?: Maybe<Scalars['String']>;
  KWAPAmount?: Maybe<Scalars['Float']>;
  KWAPRate?: Maybe<Scalars['Float']>;
  IsTBH?: Maybe<Scalars['Boolean']>;
  TBHNo?: Maybe<Scalars['String']>;
  TBHAmount?: Maybe<Scalars['Float']>;
  TBHRate?: Maybe<Scalars['Float']>;
  IsZakat?: Maybe<Scalars['Boolean']>;
  ZakatNo?: Maybe<Scalars['String']>;
  ZakatAmount?: Maybe<Scalars['Float']>;
  ZakatRate?: Maybe<Scalars['Float']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type EmployeeTaxReliefEntity = InterfaceBase & {
  __typename?: 'EmployeeTaxReliefEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  EmployeeTaxReliefID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  TaxReliefID?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  ReliefAmount?: Maybe<Scalars['Float']>;
  Employee?: Maybe<EmployeeEntity>;
};

export type EmployeeTaxReliefInput = {
  CompanyID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  TaxReliefID?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  ReliefAmount?: Maybe<Scalars['Float']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum EmploymentType {
  Contract = 'Contract',
  Internship = 'Internship',
  Probation = 'Probation',
  Permanent = 'Permanent',
  Department = 'Department',
  Division = 'Division'
}

export type FinalClaimApprovalUpdateInput = {
  FinanceApproveDT?: Maybe<Scalars['DateTime']>;
  FinanceApproveBy?: Maybe<Scalars['String']>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export type InterbankGiroEntity = InterfaceBase & {
  __typename?: 'InterbankGiroEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  InterbankGiroID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  BankInfoID?: Maybe<Scalars['String']>;
  EmployeeBankID?: Maybe<Scalars['String']>;
  IBGCode?: Maybe<Scalars['String']>;
  Company: CompanyEntity;
};

export type InterbankGiroInput = {
  CompanyID?: Maybe<Scalars['String']>;
  BankInfoID?: Maybe<Scalars['String']>;
  EmployeeBankID?: Maybe<Scalars['String']>;
  IBGCode?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type InterfaceBase = {
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
};

export type JobGradeEntity = InterfaceBase & {
  __typename?: 'JobGradeEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  JobGradeID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  LeaveBenefitID?: Maybe<Scalars['String']>;
  ClaimBenefitID?: Maybe<Scalars['String']>;
  AllowanceBenefitID?: Maybe<Scalars['String']>;
  LeaveBenefit: LeaveBenefitEntity;
  ClaimBenefit: ClaimBenefitEntity;
  AllowanceBenefit: AllowanceBenfitEntity;
  Company?: Maybe<CompanyEntity>;
};

export type JobGradeInput = {
  CompanyID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  LeaveBenefitID?: Maybe<Scalars['String']>;
  ClaimBenefitID?: Maybe<Scalars['String']>;
  AllowanceBenefitID?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type LeaveApprovalUpdateInput = {
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['String']>;
};

export type LeaveBenefitEntity = InterfaceBase & {
  __typename?: 'LeaveBenefitEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  LeaveBenefitID: Scalars['String'];
  CompanyID: Scalars['String'];
  Name: Scalars['String'];
  LeaveItems?: Maybe<Array<LeaveItemEntity>>;
};

export type LeaveBenefitInput = {
  CompanyID?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type LeaveBenefitRuleEntity = InterfaceBase & {
  __typename?: 'LeaveBenefitRuleEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  LeaveBenefitRuleID: Scalars['String'];
  LeaveItemID: Scalars['String'];
  FormulaText: Scalars['String'];
  FormulaValue: Scalars['String'];
  TotalDay: Scalars['Float'];
  LeaveRule: LeaveRuleType;
  LOSRange: Scalars['String'];
};

export type LeaveBenefitRuleInput = {
  LeaveItemID: Scalars['String'];
  FormulaText?: Maybe<Scalars['String']>;
  FormulaValue?: Maybe<Scalars['String']>;
  TotalDay?: Maybe<Scalars['Float']>;
  LeaveRule?: Maybe<Scalars['String']>;
  LOSRange?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type LeaveDetailsEntity = InterfaceBase & {
  __typename?: 'LeaveDetailsEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  LeaveDetailsID: Scalars['String'];
  LeaveHeaderID: Scalars['String'];
  SessionType?: Maybe<SessionType>;
  LeaveDate?: Maybe<Scalars['String']>;
  NumberOfDay?: Maybe<Scalars['Float']>;
  ManualEntryID?: Maybe<Scalars['String']>;
  LeaveHeader?: Maybe<LeaveHeaderEntity>;
};

export type LeaveDetailsInput = {
  LeaveHeaderID: Scalars['String'];
  SessionType: Scalars['String'];
  LeaveDate: Scalars['DateTime'];
  NumberOfDay: Scalars['Float'];
  ManualEntryID?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum LeaveFrequency {
  AnnualIncrement = 'Annual_Increment',
  Occurrence = 'Occurrence',
  ManualEntry = 'Manual_Entry'
}

export type LeaveHeaderEntity = InterfaceBase & {
  __typename?: 'LeaveHeaderEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  LeaveHeaderID: Scalars['String'];
  CompanyID: Scalars['String'];
  EmployeeID: Scalars['String'];
  LeaveTypeID: Scalars['String'];
  SubLeaveTypeID: Scalars['String'];
  LeaveHeaderType: LeaveHeaderType;
  PeriodYear: Scalars['Float'];
  TotalDay: Scalars['Float'];
  FromDate?: Maybe<Scalars['DateTime']>;
  UntilDate?: Maybe<Scalars['DateTime']>;
  DocumentID: Scalars['String'];
  Remarks: Scalars['String'];
  IsShortPeriodNotice: Scalars['Boolean'];
  TotalCFTaken: Scalars['Float'];
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  PostedDate?: Maybe<Scalars['DateTime']>;
  LeaveDetails?: Maybe<Array<LeaveDetailsEntity>>;
  Company?: Maybe<CompanyEntity>;
  Employee?: Maybe<EmployeeEntity>;
  LeaveItem?: Maybe<LeaveItemEntity>;
};

export type LeaveHeaderInput = {
  CompanyID: Scalars['String'];
  EmployeeID: Scalars['String'];
  LeaveTypeID: Scalars['String'];
  SubLeaveTypeID?: Maybe<Scalars['String']>;
  LeaveHeaderType: LeaveHeaderType;
  PeriodYear: Scalars['Float'];
  TotalDay: Scalars['Float'];
  FromDate?: Maybe<Scalars['DateTime']>;
  UntilDate?: Maybe<Scalars['DateTime']>;
  DocumentID: Scalars['String'];
  Remarks: Scalars['String'];
  IsShortPeriodNotice: Scalars['Boolean'];
  TotalCFTaken?: Maybe<Scalars['Float']>;
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum LeaveHeaderType {
  OpeningBalance = 'Opening_Balance',
  ClosingBalance = 'Closing_Balance',
  LeaveApplication = 'Leave_Application',
  SystemAdjustment = 'System_Adjustment',
  WorkdayAdjustment = 'Workday_Adjustment',
  CarryForward = 'Carry_Forward',
  CarryForwardAdjustment = 'Carry_Forward_Adjustment'
}

export type LeaveItemEntity = InterfaceBase & {
  __typename?: 'LeaveItemEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  LeaveItemID: Scalars['String'];
  LeaveBenefitID: Scalars['String'];
  Name: Scalars['String'];
  TotalDay: Scalars['Float'];
  LeaveFrequency: LeaveFrequency;
  CutOffDate: Scalars['DateTime'];
  Occurrence: Occurrence;
  NoOccurrence?: Maybe<Scalars['Float']>;
  AvailableBasis: AvailableBasis;
  CalculationMethod: CalculationMethod;
  NewCutOffDay: Scalars['Float'];
  ResignCutOffDay: Scalars['Float'];
  MonthlyCutOffDay: Scalars['Float'];
  ShortNoticeType: ShortNoticeType;
  ShortNoticePeriod: Scalars['Float'];
  CFMethod: CfMethod;
  CFValue: Scalars['Float'];
  CFMonth: Scalars['Float'];
  IsOffDay: Scalars['Boolean'];
  IsRestDay: Scalars['Boolean'];
  IsPublicHoliday: Scalars['Boolean'];
  IsHalfDay: Scalars['Boolean'];
  IsAttachment: Scalars['Boolean'];
  IsRemarks: Scalars['Boolean'];
  IsRounding: Scalars['Boolean'];
  LeaveBenefit?: Maybe<LeaveBenefitEntity>;
};

export type LeaveItemInput = {
  LeaveBenefitID?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  TotalDay?: Maybe<Scalars['Float']>;
  LeaveFrequency?: Maybe<LeaveFrequency>;
  CutOffDate?: Maybe<Scalars['DateTime']>;
  Occurrence?: Maybe<Occurrence>;
  NoOccurrence?: Maybe<Scalars['Float']>;
  AvailableBasis?: Maybe<AvailableBasis>;
  CalculationMethod?: Maybe<CalculationMethod>;
  NewCutOffDay: Scalars['Float'];
  ResignCutOffDay: Scalars['Float'];
  MonthlyCutOffDay: Scalars['Float'];
  ShortNoticeType: ShortNoticeType;
  ShortNoticePeriod: Scalars['Float'];
  CFMethod: CfMethod;
  CFValue: Scalars['Float'];
  CFMonth: Scalars['Float'];
  IsOffDay: Scalars['Boolean'];
  IsRestDay: Scalars['Boolean'];
  IsPublicHoliday: Scalars['Boolean'];
  IsHalfDay: Scalars['Boolean'];
  IsAttachment: Scalars['Boolean'];
  IsRemarks: Scalars['Boolean'];
  IsRounding: Scalars['Boolean'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type LeavePostingInput = {
  CompanyID?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  PostedDate?: Maybe<Scalars['DateTime']>;
};

export type LeaveRoundingEntity = InterfaceBase & {
  __typename?: 'LeaveRoundingEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  LeaveRoundingID: Scalars['String'];
  CompanyID: Scalars['String'];
  StartValue: Scalars['Float'];
  EndValue: Scalars['Float'];
  RoundTo: Scalars['Float'];
  Company: CompanyEntity;
};

export type LeaveRoundingInput = {
  CompanyID: Scalars['String'];
  StartValue: Scalars['Float'];
  EndValue: Scalars['Float'];
  RoundTo: Scalars['Float'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum LeaveRuleType {
  Los = 'LOS',
  Gender = 'Gender',
  IsConfirmed = 'Is_Confirmed'
}

export type LeaveTempEntitlementEntity = InterfaceBase & {
  __typename?: 'LeaveTempEntitlementEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  LeaveTempEntitlement: Scalars['String'];
  EmployeeID: Scalars['String'];
  LeaveTypeID: Scalars['String'];
  LeaveHeaderID: Scalars['String'];
  StartDate: Scalars['String'];
  EndDate: Scalars['String'];
  Year: Scalars['Float'];
  TotalDay: Scalars['Float'];
  AccumulateTotalDay: Scalars['Float'];
};

export type LeaveTempEntitlementInput = {
  EmployeeID: Scalars['String'];
  LeaveTypeID: Scalars['String'];
  LeaveHeaderID: Scalars['String'];
  StartDate: Scalars['DateTime'];
  EndDate: Scalars['DateTime'];
  Year: Scalars['Float'];
  TotalDay: Scalars['Float'];
  AccumulateTotalDay: Scalars['Float'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type LoginInputType = {
  LoginId: Scalars['String'];
  Password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  AccessToken: Scalars['String'];
  SubscriptionUser: SubscriptionUserEntity;
};

export enum Marital {
  Divorced = 'Divorced',
  Married = 'Married',
  Seperated = 'Seperated',
  Single = 'Single',
  Widowed = 'Widowed'
}

export type Mutation = {
  __typename?: 'Mutation';
  ContactInsert: Scalars['Boolean'];
  ClaimPolicyInsert: ClaimBenefitEntity;
  ClaimPolicyUpdate: Scalars['Boolean'];
  ClaimEntitlementInsert: ClaimItemEntity;
  ClaimEntitlementUpdate: Scalars['Boolean'];
  MyClaimInsert: Scalars['Boolean'];
  MyClaimUpdate: Scalars['Boolean'];
  ClaimPostingInsert: Scalars['Boolean'];
  ClaimPostedUpdate: Scalars['Boolean'];
  FinalClaimApprovalUpdate: Scalars['Boolean'];
  ClaimManagementUpdate: Scalars['Boolean'];
  AllowancePolicyInsert: AllowanceBenfitEntity;
  AllowancePolicyUpdate: Scalars['Boolean'];
  AllowanceEntitlementInsert: AllowanceItemEntity;
  AllowanceEntitlementUpdate: Scalars['Boolean'];
  BankInsert: BankInfoEntity;
  BankUpdate: Scalars['Boolean'];
  CompanyInsert: Scalars['Boolean'];
  CompanyUpdate: Scalars['Boolean'];
  CP159Update: Scalars['Boolean'];
  CP159Insert: Cp159Entity;
  DepartmentInsert: DepartmentEntity;
  DepartmentUpdate: Scalars['Boolean'];
  DivisionInsert: DepartmentEntity;
  DivisionUpdate: Scalars['Boolean'];
  InterbankInsert: InterbankGiroEntity;
  InterbankUpdate: Scalars['Boolean'];
  JobGradeInsert: JobGradeEntity;
  JobGradeUpdate: Scalars['Boolean'];
  CompanyStatutoryInsert: CompanyStatutoryEntity;
  CompanyStatutoryUpdate: Scalars['Boolean'];
  MyCareerLogInsert: CareerLogEntity;
  DocumentInsert: DocumentsEntity;
  DependentsUpdate: Scalars['Boolean'];
  DependentsInsert: Scalars['Boolean'];
  EmployeePrevContributionInsert: Scalars['Boolean'];
  EmployeeInsert: Scalars['Boolean'];
  PersonalInfoUpdate: Scalars['Boolean'];
  JobInfoUpdate: Scalars['Boolean'];
  MyProfileUpdate: Scalars['Boolean'];
  TP3Insert: EmployeePrevContributionEntity;
  TP3Update: Scalars['Boolean'];
  EmployeeStatutoryUpdate: Scalars['Boolean'];
  EmployeeStatutoryInsert: Scalars['Boolean'];
  TaxReliefInsert: EmployeeTaxReliefEntity;
  TaxReliefUpdate: Scalars['Boolean'];
  WorkdayAdjustmentInsert: WorkdayAdjustmentEntity;
  WorkdayAdjustmentUpdate: Scalars['Boolean'];
  LeavePolicyInsert: LeaveBenefitEntity;
  LeavePolicyUpdate: Scalars['Boolean'];
  LeaveEntitlementInsert: LeaveItemEntity;
  LeaveEntitlementUpdate: Scalars['Boolean'];
  LeaveManagmentCreate: Scalars['Boolean'];
  LeaveApprovalUpdate: Scalars['Boolean'];
  MyLeaveInsert: Scalars['Boolean'];
  MyLeaveUpdate: Scalars['Boolean'];
  LeavePostingInsert: Scalars['Boolean'];
  LeavePostingUpdate: Scalars['Boolean'];
  LeaveRoundingInsert: LeaveRoundingEntity;
  LeaveRoundingUpdate: Scalars['Boolean'];
  LHDNReportInsert: EaFormSetupEntity;
  LHDNReportUpdate: Scalars['Boolean'];
  EAPartFInsert: EaPartFEntity;
  EAPartFUpdate: Scalars['Boolean'];
  UpdateLastProcess: Scalars['Boolean'];
  PayProcessInsert: Scalars['Boolean'];
  PublishPayslipInsert: PublishPayslipEntity;
  PayrollCycleInsert: PayrollCycleEntity;
  PayrollCycleUpdate: Scalars['Boolean'];
  PayItemInsert: Scalars['Boolean'];
  PayItemUpdate: Scalars['Boolean'];
  OneTimePayIemInsert: OneTimePayEntity;
  OneTimePayIemUpdate: Scalars['Boolean'];
  RecurringPayItemInsert: RecurringPayEntity;
  RecurringPayItemUpdate: Scalars['Boolean'];
  PayrollCutOffDayUpdate: Scalars['Boolean'];
  MyRequisitionInsert: RequisitionEntity;
  MyRequisitionUpdate: Scalars['Boolean'];
  RequisitionManagementApprovalUpdate: Scalars['Boolean'];
  SubscriptionAccCreate: SubscriptionAccountEntity;
  SubscriptionAccUpdate: Scalars['Boolean'];
  SubscriptionAccDelete: Scalars['Boolean'];
  SubscriptionUserCreate: SubscriptionUserEntity;
  SubscriptionUserRegister: SubscriptionUserEntity;
  SubscriptionUserActivate: Scalars['Boolean'];
  SubscriptionUserUpdate: Scalars['Boolean'];
  SubscriptionUserDelete: Scalars['Boolean'];
  Login: LoginResponse;
  Logout: Scalars['Boolean'];
  ChangePassword: SubscriptionUserEntity;
  ForgotPassword: Scalars['Boolean'];
  ResetPassword: Scalars['Boolean'];
};


export type MutationContactInsertArgs = {
  ContactInput: ContactInput;
};


export type MutationClaimPolicyInsertArgs = {
  input: ClaimBenefitInput;
};


export type MutationClaimPolicyUpdateArgs = {
  ClaimBenefitID: Scalars['String'];
  input: ClaimBenefitInput;
};


export type MutationClaimEntitlementInsertArgs = {
  input: ClaimItemInput;
};


export type MutationClaimEntitlementUpdateArgs = {
  ClaimItemID: Scalars['String'];
  input: ClaimItemInput;
};


export type MutationMyClaimInsertArgs = {
  ClaimDetailsInput: Array<ClaimDetailsInput>;
  ClaimHeaderInput: ClaimHeaderInput;
};


export type MutationMyClaimUpdateArgs = {
  ClaimDetailsInput: Array<ClaimDetailsInput>;
  input: ClaimHeaderInput;
  ClaimHeaderID: Scalars['String'];
};


export type MutationClaimPostingInsertArgs = {
  input: ClaimPostingInput;
  ClaimHeaderID: Scalars['String'];
};


export type MutationClaimPostedUpdateArgs = {
  input: ClaimPostingInput;
  ClaimHeaderID: Scalars['String'];
};


export type MutationFinalClaimApprovalUpdateArgs = {
  ClaimHeaderID: Scalars['String'];
  input: FinalClaimApprovalUpdateInput;
};


export type MutationClaimManagementUpdateArgs = {
  input: ClaimHeaderInput;
  ClaimHeaderID: Scalars['String'];
};


export type MutationAllowancePolicyInsertArgs = {
  input: AllowanceBenefitInput;
};


export type MutationAllowancePolicyUpdateArgs = {
  AllowanceBenefitID: Scalars['String'];
  input: AllowanceBenefitInput;
};


export type MutationAllowanceEntitlementInsertArgs = {
  input: AllowanceItemInput;
};


export type MutationAllowanceEntitlementUpdateArgs = {
  AllowanceItemID: Scalars['String'];
  input: AllowanceItemInput;
};


export type MutationBankInsertArgs = {
  input: BankInfoInputs;
};


export type MutationBankUpdateArgs = {
  BankInfoID: Scalars['String'];
  input: BankInfoInputs;
};


export type MutationCompanyInsertArgs = {
  ContactInput: ContactInput;
  CompanyInput: CompanyInput;
};


export type MutationCompanyUpdateArgs = {
  ContactInput: ContactInput;
  ContactID: Scalars['String'];
};


export type MutationCp159UpdateArgs = {
  CP159ID: Scalars['String'];
  input: Cp159Input;
};


export type MutationCp159InsertArgs = {
  input: Cp159Input;
};


export type MutationDepartmentInsertArgs = {
  input: DepartmentInput;
};


export type MutationDepartmentUpdateArgs = {
  DepartmentID: Scalars['String'];
  input: DepartmentInput;
};


export type MutationDivisionInsertArgs = {
  input: DepartmentInput;
};


export type MutationDivisionUpdateArgs = {
  DepartmentID: Scalars['String'];
  input: DepartmentInput;
};


export type MutationInterbankInsertArgs = {
  input: InterbankGiroInput;
};


export type MutationInterbankUpdateArgs = {
  InterbankGiroID: Scalars['String'];
  input: InterbankGiroInput;
};


export type MutationJobGradeInsertArgs = {
  input: JobGradeInput;
};


export type MutationJobGradeUpdateArgs = {
  JobGradeID: Scalars['String'];
  input: JobGradeInput;
};


export type MutationCompanyStatutoryInsertArgs = {
  CompanyStatutoryInput: CompanyStatutoryInput;
};


export type MutationCompanyStatutoryUpdateArgs = {
  CompanyStatutoryInput: CompanyStatutoryInput;
  CompanyStatutoryID: Scalars['String'];
};


export type MutationMyCareerLogInsertArgs = {
  input: CareerLogInput;
};


export type MutationDocumentInsertArgs = {
  input: DocumentsInput;
};


export type MutationDependentsUpdateArgs = {
  ContactInput: ContactInput;
  EmployeeDependentsInput: EmployeeDependentsInput;
  EmployeeDependentsID: Scalars['String'];
};


export type MutationDependentsInsertArgs = {
  EmployeeDependentsInput: EmployeeDependentsInput;
};


export type MutationEmployeePrevContributionInsertArgs = {
  EmployeePrevContributionInput: EmployeePrevContributionInput;
};


export type MutationEmployeeInsertArgs = {
  EmployeeDependentsInput: Array<EmployeeDependentsInput>;
  EmployeePrevContributionInput: EmployeePrevContributionInput;
  EmployeeStatutoryInput: EmployeeStatutoryInput;
  EmployeeInput: EmployeeInput;
  DependentContactInput: Array<ContactInput>;
  ContactInput: ContactInput;
};


export type MutationPersonalInfoUpdateArgs = {
  ContactInput: ContactInput;
  ContactID: Scalars['String'];
};


export type MutationJobInfoUpdateArgs = {
  EmployeeInput: EmployeeInput;
  EmployeeID: Scalars['String'];
};


export type MutationMyProfileUpdateArgs = {
  ContactInput: ContactInput;
  ContactID: Scalars['String'];
};


export type MutationTp3InsertArgs = {
  TP3Input: EmployeePrevContributionInput;
};


export type MutationTp3UpdateArgs = {
  input: EmployeePrevContributionInput;
  EmployeePrevContributionID: Scalars['String'];
};


export type MutationEmployeeStatutoryUpdateArgs = {
  EmployeeStatutoryInput: EmployeeStatutoryInput;
  EmployeeStatutoryID: Scalars['String'];
};


export type MutationEmployeeStatutoryInsertArgs = {
  EmployeeStatutoryInput: EmployeeStatutoryInput;
};


export type MutationTaxReliefInsertArgs = {
  input: EmployeeTaxReliefInput;
};


export type MutationTaxReliefUpdateArgs = {
  input: EmployeeTaxReliefInput;
  EmployeeTaxReliefID: Scalars['String'];
};


export type MutationWorkdayAdjustmentInsertArgs = {
  input: WorkdayAdjustmentInput;
};


export type MutationWorkdayAdjustmentUpdateArgs = {
  WorkdayAdjustmentID: Scalars['String'];
  input: WorkdayAdjustmentInput;
};


export type MutationLeavePolicyInsertArgs = {
  input: LeaveBenefitInput;
};


export type MutationLeavePolicyUpdateArgs = {
  LeaveBenefitID: Scalars['String'];
  input: LeaveBenefitInput;
};


export type MutationLeaveEntitlementInsertArgs = {
  input: LeaveItemInput;
};


export type MutationLeaveEntitlementUpdateArgs = {
  LeaveItemID: Scalars['String'];
  input: LeaveItemInput;
};


export type MutationLeaveManagmentCreateArgs = {
  input: LeaveHeaderInput;
};


export type MutationLeaveApprovalUpdateArgs = {
  input: LeaveApprovalUpdateInput;
  ApprovalID: Scalars['String'];
};


export type MutationMyLeaveInsertArgs = {
  input: MyLeaveInsertInput;
};


export type MutationMyLeaveUpdateArgs = {
  input: MyLeaveUpdateInput;
  LeaveHeaderID: Scalars['String'];
};


export type MutationLeavePostingInsertArgs = {
  input: LeavePostingInput;
};


export type MutationLeavePostingUpdateArgs = {
  input: LeavePostingInput;
  id: Scalars['String'];
};


export type MutationLeaveRoundingInsertArgs = {
  input: LeaveRoundingInput;
};


export type MutationLeaveRoundingUpdateArgs = {
  LeaveRoundingID: Scalars['String'];
  input: LeaveRoundingInput;
};


export type MutationLhdnReportInsertArgs = {
  input: EaFormSetupInput;
};


export type MutationLhdnReportUpdateArgs = {
  input: EaFormSetupInput;
  EAFormSetupID: Scalars['String'];
};


export type MutationEaPartFInsertArgs = {
  input: EaPartFInput;
};


export type MutationEaPartFUpdateArgs = {
  EAPartFID: Scalars['String'];
  input: EaPartFInput;
};


export type MutationUpdateLastProcessArgs = {
  IsLastProcess: Scalars['Boolean'];
  PayrollCyclePeriodID: Scalars['String'];
};


export type MutationPayProcessInsertArgs = {
  input: PayrollDetailInput;
};


export type MutationPublishPayslipInsertArgs = {
  input: PublishPayslipInput;
};


export type MutationPayrollCycleInsertArgs = {
  input: PayrollCycleInput;
};


export type MutationPayrollCycleUpdateArgs = {
  input: PayrollCycleInput;
  PayrollCycleID: Scalars['String'];
};


export type MutationPayItemInsertArgs = {
  input: PayItemInput;
};


export type MutationPayItemUpdateArgs = {
  input: PayItemInput;
  PayItemID: Scalars['String'];
};


export type MutationOneTimePayIemInsertArgs = {
  input: OneTimePayInput;
};


export type MutationOneTimePayIemUpdateArgs = {
  input: OneTimePayInput;
  OneTimePayID: Scalars['String'];
};


export type MutationRecurringPayItemInsertArgs = {
  input: RecurringPayInput;
};


export type MutationRecurringPayItemUpdateArgs = {
  input: RecurringPayInput;
  id: Scalars['String'];
};


export type MutationPayrollCutOffDayUpdateArgs = {
  input: CompanyInput;
  CompanyID: Scalars['String'];
};


export type MutationMyRequisitionInsertArgs = {
  input: RequisitionInput;
};


export type MutationMyRequisitionUpdateArgs = {
  RequisitionHeaderID: Scalars['String'];
  input: RequisitionUpdateInput;
};


export type MutationRequisitionManagementApprovalUpdateArgs = {
  RequisitionHeaderID: Scalars['String'];
  input: RequisitionUpdateInput;
};


export type MutationSubscriptionAccCreateArgs = {
  input: SubscriptionAccInput;
};


export type MutationSubscriptionAccUpdateArgs = {
  SubscriptionAccountID: Scalars['String'];
  input: SubscriptionAccInput;
};


export type MutationSubscriptionAccDeleteArgs = {
  SubscriptionAccountID: Scalars['String'];
};


export type MutationSubscriptionUserCreateArgs = {
  input: SubscriptionUserInput;
};


export type MutationSubscriptionUserRegisterArgs = {
  CompanyInput: CompanyInput;
  EmployeeInput: EmployeeInput;
  ContactInput: ContactInput;
  input: SubscriptionUserInput;
};


export type MutationSubscriptionUserActivateArgs = {
  token: Scalars['String'];
};


export type MutationSubscriptionUserUpdateArgs = {
  SubscriptionUserID: Scalars['String'];
  input?: Maybe<SubscriptionUpdateInput>;
};


export type MutationSubscriptionUserDeleteArgs = {
  SubscriptionUserID: Scalars['String'];
};


export type MutationLoginArgs = {
  Password: Scalars['String'];
  LoginId: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  NewPassword: Scalars['String'];
  CurrentPassword: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  Email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type MyLeaveInsertInput = {
  CompanyID: Scalars['String'];
  EmployeeID: Scalars['String'];
  LeaveTypeID: Scalars['String'];
  SubLeaveTypeID: Scalars['String'];
  LeaveHeaderType: LeaveHeaderType;
  PeriodYear: Scalars['Float'];
  TotalDay: Scalars['Float'];
  FromDate?: Maybe<Scalars['DateTime']>;
  UntilDate?: Maybe<Scalars['DateTime']>;
  DocumentID: Scalars['String'];
  Remarks: Scalars['String'];
  IsShortPeriodNotice: Scalars['Boolean'];
  TotalCFTaken: Scalars['Float'];
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type MyLeaveSummaryInput = {
  EmployeeID: Scalars['String'];
  StartDate?: Maybe<Scalars['String']>;
  EndDate?: Maybe<Scalars['String']>;
};

export type MyLeaveUpdateInput = {
  CompanyID: Scalars['String'];
  EmployeeID: Scalars['String'];
  LeaveTypeID: Scalars['String'];
  SubLeaveTypeID: Scalars['String'];
  LeaveHeaderType: LeaveHeaderType;
  PeriodYear: Scalars['Float'];
  TotalDay: Scalars['Float'];
  FromDate?: Maybe<Scalars['DateTime']>;
  UntilDate?: Maybe<Scalars['DateTime']>;
  DocumentID: Scalars['String'];
  Remarks: Scalars['String'];
  IsShortPeriodNotice: Scalars['Boolean'];
  TotalCFTaken: Scalars['Float'];
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type MySubordinatesInput = {
  CompanyID?: Maybe<Scalars['String']>;
  ReportTo?: Maybe<Scalars['Float']>;
};

export enum Nationality {
  Afghan = 'Afghan',
  Albanian = 'Albanian',
  Algerian = 'Algerian',
  American = 'American',
  Argentine = 'Argentine',
  Argentinian = 'Argentinian',
  Australian = 'Australian',
  Austrian = 'Austrian',
  Bangladeshi = 'Bangladeshi',
  Batswana = 'Batswana',
  Belgian = 'Belgian',
  Bolivian = 'Bolivian',
  Brazilian = 'Brazilian',
  British = 'British',
  Bulgarian = 'Bulgarian',
  Cambodian = 'Cambodian',
  Cameroonian = 'Cameroonian',
  Canadian = 'Canadian',
  Chilean = 'Chilean',
  Chinese = 'Chinese',
  Colombian = 'Colombian',
  CostaRican = 'Costa_Rican',
  Croatian = 'Croatian',
  Cuban = 'Cuban',
  Czech = 'Czech',
  Danish = 'Danish',
  Dominican = 'Dominican',
  Dutch = 'Dutch',
  Ecuadorian = 'Ecuadorian',
  Egyptian = 'Egyptian',
  Emirati = 'Emirati',
  English = 'English',
  Estonian = 'Estonian',
  Ethiopian = 'Ethiopian',
  Fijian = 'Fijian',
  Finnish = 'Finnish',
  French = 'French',
  German = 'German',
  Ghanaian = 'Ghanaian',
  Greek = 'Greek',
  Guatemalan = 'Guatemalan',
  Haitian = 'Haitian',
  Honduran = 'Honduran',
  Hungarian = 'Hungarian',
  Icelandic = 'Icelandic',
  Indian = 'Indian',
  Indonesian = 'Indonesian',
  Iranian = 'Iranian',
  Iraqi = 'Iraqi',
  Irish = 'Irish',
  Israeli = 'Israeli',
  Italian = 'Italian',
  Jamaican = 'Jamaican',
  Japanese = 'Japanese',
  Jordanian = 'Jordanian',
  Kenyan = 'Kenyan',
  Korean = 'Korean',
  Kuwaiti = 'Kuwaiti',
  Lao = 'Lao',
  Latvian = 'Latvian',
  Lebanese = 'Lebanese',
  Libyan = 'Libyan',
  Lithuanian = 'Lithuanian',
  Malagasy = 'Malagasy',
  Malaysian = 'Malaysian',
  Malian = 'Malian',
  Maltese = 'Maltese',
  Mexican = 'Mexican',
  Mongolian = 'Mongolian',
  Moroccan = 'Moroccan',
  Mozambican = 'Mozambican',
  Namibian = 'Namibian',
  Nepalese = 'Nepalese',
  NewZealand = 'New_Zealand',
  Nicaraguan = 'Nicaraguan',
  Nigerian = 'Nigerian',
  Norwegian = 'Norwegian',
  Pakistani = 'Pakistani',
  Panamanian = 'Panamanian',
  Paraguayan = 'Paraguayan',
  Peruvian = 'Peruvian',
  Philippine = 'Philippine',
  Polish = 'Polish',
  Portuguese = 'Portuguese',
  Romanian = 'Romanian',
  Russian = 'Russian',
  Salvadorian = 'Salvadorian',
  Saudi = 'Saudi',
  Scottish = 'Scottish',
  Senegalese = 'Senegalese',
  Serbian = 'Serbian',
  Singaporean = 'Singaporean',
  Slovak = 'Slovak',
  SouthAfrican = 'South_African',
  Spanish = 'Spanish',
  SriLankan = 'Sri_Lankan',
  Sudanese = 'Sudanese',
  Swedish = 'Swedish',
  Swiss = 'Swiss',
  Syrian = 'Syrian',
  Taiwanese = 'Taiwanese',
  Tajikistani = 'Tajikistani',
  Thai = 'Thai',
  Tongan = 'Tongan',
  Tunisian = 'Tunisian',
  Turkish = 'Turkish',
  Ukrainian = 'Ukrainian',
  Uruguayan = 'Uruguayan',
  Venezuelan = 'Venezuelan',
  Vietnamese = 'Vietnamese',
  Welsh = 'Welsh',
  Zambian = 'Zambian',
  Zimbabwean = 'Zimbabwean'
}

export type NewsEntity = InterfaceBase & {
  __typename?: 'NewsEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  NewsID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  Content?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  ValidFrom: Scalars['DateTime'];
  ValidTo: Scalars['DateTime'];
  NewsRead: Array<NewsReadEntity>;
};

export type NewsInput = {
  CompanyID: Scalars['String'];
  Title: Scalars['String'];
  Content: Scalars['String'];
  DocumentID: Scalars['String'];
  ValidFrom: Scalars['DateTime'];
  ValidTo: Scalars['DateTime'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type NewsReadEntity = InterfaceBase & {
  __typename?: 'NewsReadEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  NewsReadID: Scalars['String'];
  NewsID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  News: NewsEntity;
};

export type NewsReadInput = {
  NewsID: Scalars['String'];
  EmployeeID: Scalars['String'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum Occurrence {
  CalendarDay = 'Calendar_Day',
  EmploymentPeriod = 'Employment_Period'
}

export type OneTimePayEntity = InterfaceBase & {
  __typename?: 'OneTimePayEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  OneTimePayID: Scalars['String'];
  PayItemID?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  CompanyID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  Amount?: Maybe<Scalars['Float']>;
  PayPeriod?: Maybe<PayPeriodEntity>;
  PayItem?: Maybe<PayItemEntity>;
};

export type OneTimePayInput = {
  PayItemID?: Maybe<Scalars['String']>;
  CompanyID?: Maybe<Scalars['String']>;
  EmployeeID?: Maybe<Scalars['String']>;
  Amount?: Maybe<Scalars['Float']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum PayCategoryType {
  General = 'General',
  PayItem = 'Pay_Item'
}

export type PayItemEntity = InterfaceBase & {
  __typename?: 'PayItemEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PayItemID: Scalars['String'];
  CompanyID: Scalars['String'];
  PayCode?: Maybe<Scalars['String']>;
  PayName?: Maybe<Scalars['String']>;
  PayItemType: PayItemType;
  EAPartFID?: Maybe<Scalars['String']>;
  Formula?: Maybe<Scalars['String']>;
  IsLHDN?: Maybe<Scalars['Boolean']>;
  IsEPF?: Maybe<Scalars['Boolean']>;
  IsSOCSO?: Maybe<Scalars['Boolean']>;
  IsAddRemuneration?: Maybe<Scalars['Boolean']>;
  IsEPFVE?: Maybe<Scalars['Boolean']>;
  IsBonus?: Maybe<Scalars['Boolean']>;
  IsEIS?: Maybe<Scalars['Boolean']>;
  IsHRDF?: Maybe<Scalars['Boolean']>;
  IsSystem?: Maybe<Scalars['Boolean']>;
};

export type PayItemInput = {
  CompanyID?: Maybe<Scalars['String']>;
  PayCode?: Maybe<Scalars['String']>;
  PayName?: Maybe<Scalars['String']>;
  PayItemType: PayItemType;
  EAPartFID?: Maybe<Scalars['String']>;
  Formula?: Maybe<Scalars['String']>;
  IsLHDN?: Maybe<Scalars['Boolean']>;
  IsEPF?: Maybe<Scalars['Boolean']>;
  IsSOCSO?: Maybe<Scalars['Boolean']>;
  IsAddRemuneration?: Maybe<Scalars['Boolean']>;
  IsEPFVE?: Maybe<Scalars['Boolean']>;
  IsBonus?: Maybe<Scalars['Boolean']>;
  IsEIS?: Maybe<Scalars['Boolean']>;
  IsHRDF?: Maybe<Scalars['Boolean']>;
  IsSystem?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum PayItemType {
  Earning = 'Earning',
  Deduction = 'Deduction',
  NonPayable = 'Non_Payable'
}

export enum PaymentMethod {
  Payroll = 'Payroll',
  BankTransfer = 'Bank_Transfer',
  Cash = 'Cash',
  Cheque = 'Cheque'
}

export type PayPeriodEntity = InterfaceBase & {
  __typename?: 'PayPeriodEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PayPeriodID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYearMonth?: Maybe<Scalars['DateTime']>;
  FromDate?: Maybe<Scalars['DateTime']>;
  ToDate?: Maybe<Scalars['DateTime']>;
  ActualWorkDays?: Maybe<Scalars['Float']>;
};

export type PayPeriodInput = {
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYearMonth?: Maybe<Scalars['DateTime']>;
  FromDate?: Maybe<Scalars['DateTime']>;
  ToDate?: Maybe<Scalars['DateTime']>;
  ActualWorkDays?: Maybe<Scalars['Float']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type PayPeriodSelectionInput = {
  CompanyID: Scalars['String'];
  Year?: Maybe<Scalars['Float']>;
};

export type PayrollCycleEntity = InterfaceBase & {
  __typename?: 'PayrollCycleEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PayrollCycleID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  EPF?: Maybe<Scalars['Boolean']>;
  EPFVE?: Maybe<Scalars['Boolean']>;
  SOCSO?: Maybe<Scalars['Boolean']>;
  MTD?: Maybe<Scalars['Boolean']>;
  Zakat?: Maybe<Scalars['Boolean']>;
  EIS?: Maybe<Scalars['Boolean']>;
  Company?: Maybe<CompanyEntity>;
};

export type PayrollCycleInput = {
  CompanyID?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  EPF?: Maybe<Scalars['Boolean']>;
  EPFVE?: Maybe<Scalars['Boolean']>;
  SOCSO?: Maybe<Scalars['Boolean']>;
  MTD?: Maybe<Scalars['Boolean']>;
  Zakat?: Maybe<Scalars['Boolean']>;
  EIS?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type PayrollCyclePeriodEntity = InterfaceBase & {
  __typename?: 'PayrollCyclePeriodEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PayrollCyclePeriodID: Scalars['String'];
  CompanyID: Scalars['String'];
  PayPeriodID: Scalars['String'];
  PayrollCycleID: Scalars['String'];
  SequenceNo: Scalars['Float'];
  PayrollCycleStatus: PayrollCycleStatus;
  IsLastProcess: Scalars['Boolean'];
};

export type PayrollCyclePeriodInput = {
  CompanyID: Scalars['String'];
  PayPeriodID: Scalars['String'];
  PayrollCycleID: Scalars['String'];
  SequenceNo: Scalars['Float'];
  PayrollCycleStatus: PayrollCycleStatus;
  IsLastProcess: Scalars['Boolean'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type PayrollCycleSelectionInput = {
  CompanyID: Scalars['String'];
  Year?: Maybe<Scalars['Float']>;
};

export enum PayrollCycleStatus {
  Raw = 'Raw',
  Processed = 'Processed',
  Locked = 'Locked'
}

export type PayrollDetailEntity = InterfaceBase & {
  __typename?: 'PayrollDetailEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PayrollDetailID: Scalars['String'];
  PayrollHeaderID: Scalars['String'];
  PayCategoryType: PayCategoryType;
  PayItemID: Scalars['String'];
  Percentage: Scalars['Float'];
  Amount: Scalars['String'];
  AdjustAmount: Scalars['String'];
  PayrollHeader: PayrollHeaderEntity;
  PayItem: PayItemEntity;
};

export type PayrollDetailInput = {
  PayrollHeaderID: Scalars['String'];
  PayCategoryType: PayCategoryType;
  PayItemID: Scalars['String'];
  Percentage?: Maybe<Scalars['Float']>;
  Amount: Scalars['String'];
  AdjustAmount: Scalars['String'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type PayrollHeaderEntity = InterfaceBase & {
  __typename?: 'PayrollHeaderEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PayrollHeaderID: Scalars['String'];
  EmployeeID: Scalars['String'];
  PayrollCyclePeriodID: Scalars['String'];
  ActualWorkday: Scalars['Float'];
  AdjustWorkday: Scalars['Float'];
  ProcessLog: Scalars['String'];
  NetPay?: Maybe<Scalars['String']>;
  TotalGross: Scalars['String'];
  TotalDeduction: Scalars['String'];
  NormalRemn: Scalars['String'];
  AdditionalRemn: Scalars['String'];
  ChargeEPF: Scalars['String'];
  ChargeSOCSO: Scalars['String'];
  ChargeEIS: Scalars['String'];
  ChargeZAKAT: Scalars['String'];
  TaxRelief: Scalars['String'];
};

export type PayrollHeaderInput = {
  EmployeeID: Scalars['String'];
  PayrollCyclePeriodID: Scalars['String'];
  ActualWorkday: Scalars['Float'];
  AdjustWorkday: Scalars['Float'];
  ProcessLog: Scalars['String'];
  NetPay: Scalars['String'];
  TotalGross: Scalars['String'];
  TotalDeduction: Scalars['String'];
  NormalRemn: Scalars['String'];
  AdditionalRemn: Scalars['String'];
  ChargeSOCSO: Scalars['String'];
  ChargeEPF: Scalars['String'];
  ChargeEIS: Scalars['String'];
  ChargeZAKAT: Scalars['String'];
  TaxRelief: Scalars['String'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type PublishEaEntity = InterfaceBase & {
  __typename?: 'PublishEAEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PublishEAID: Scalars['String'];
  CompanyID: Scalars['String'];
  PeriodYear: Scalars['Float'];
  IsPublish: Scalars['Boolean'];
  PublishedDate: Scalars['DateTime'];
  Remarks: Scalars['String'];
};

export type PublishEaInput = {
  CompanyID: Scalars['String'];
  PeriodYear: Scalars['Float'];
  IsPublish: Scalars['Boolean'];
  PublishedDate: Scalars['DateTime'];
  Remarks: Scalars['String'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type PublishPayslipEntity = InterfaceBase & {
  __typename?: 'PublishPayslipEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  PublishPaySlipID: Scalars['String'];
  CompanyID: Scalars['String'];
  IsPublish: Scalars['Boolean'];
  PublishedDate: Scalars['DateTime'];
  Remarks: Scalars['String'];
  PayrollCyclePeriodID: Scalars['String'];
  PayrollCyclePeriod: PayrollCyclePeriodEntity;
};

export type PublishPayslipInput = {
  CompanyID: Scalars['String'];
  PayrollCyclePeriodID: Scalars['String'];
  IsPublish: Scalars['Boolean'];
  PublishedDate: Scalars['DateTime'];
  Remarks: Scalars['String'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type Query = {
  __typename?: 'Query';
  ClaimPolicy: Array<ClaimBenefitEntity>;
  ClaimEntitlementListing: Array<ClaimItemEntity>;
  ClaimEntitlementDetail: Array<ClaimItemEntity>;
  MyClaimSummary: Array<ClaimHeaderEntity>;
  MyClaimDetail: Array<ClaimDetailsEntity>;
  ClaimListing: Array<ClaimHeaderEntity>;
  ClaimDetail: Array<ClaimDetailsEntity>;
  ClaimPostingListing: Array<ClaimHeaderEntity>;
  ClaimPostedListing: Array<ClaimHeaderEntity>;
  FinalClaimApprovalListing: Array<ClaimHeaderEntity>;
  ClaimManagementListing: Array<ClaimHeaderEntity>;
  ClaimManagementDetail: Array<ClaimDetailsEntity>;
  FinalClaimApprovalDetail: ClaimHeaderEntity;
  AllowancePolicy: Array<AllowanceBenfitEntity>;
  AllowanceEntitlementListing: Array<AllowanceItemEntity>;
  AllowanceEntitlementDetail: Array<AllowanceItemEntity>;
  BankDetail: Array<BankInfoEntity>;
  BankListing: Array<BankInfoEntity>;
  CompanyListing: Array<CompanyEntity>;
  CompanySummary: CompanyEntity;
  CP159Details: Array<Cp159Entity>;
  CP159Listing: Array<Cp159Entity>;
  DepartmentListing: Array<DepartmentEntity>;
  DepartmentDetail: Array<DepartmentEntity>;
  DivisionListing: Array<DepartmentEntity>;
  DivisionDetail: Array<DepartmentEntity>;
  InterbankDetail: Array<InterbankGiroEntity>;
  InterbankListing: Array<InterbankGiroEntity>;
  JobGradeDetail: Array<JobGradeEntity>;
  CompanyStatutoryDetail: CompanyStatutoryEntity;
  CareerLog: Array<CareerLogEntity>;
  CareerLogInsert: Array<CareerLogEntity>;
  MyCareerLog: Array<CareerLogEntity>;
  MyDocumentListing: Array<DocumentsEntity>;
  DependentsDetails: Array<EmployeeDependentsEntity>;
  EmployeeListing: Array<EmployeeEntity>;
  EmployeeProfile: EmployeeEntity;
  PersonalInfoDetail: EmployeeEntity;
  JobInfo: EmployeeEntity;
  MyProfileDetail: EmployeeEntity;
  TP3Details: Array<EmployeePrevContributionEntity>;
  SubordinatesDetails: Array<EmployeeEntity>;
  CalendarHoliday: Array<CompanyOffDayEntity>;
  CalendarMyLeave: Array<LeaveHeaderEntity>;
  CalendarStaffLeave: Array<LeaveHeaderEntity>;
  CalendarBirthday: Array<EmployeeEntity>;
  EmployeeStatutoryDetails: EmployeeStatutoryEntity;
  TaxRelief: Array<EmployeeTaxReliefEntity>;
  TaxReliefDetails: Array<EmployeeTaxReliefEntity>;
  WorkdayAdjustmentDetail: Array<WorkdayAdjustmentEntity>;
  WorkdayAdjustmentListing: Array<WorkdayAdjustmentEntity>;
  LeavePolicy: Array<LeaveBenefitEntity>;
  LeaveEntitlementListing: Array<LeaveBenefitEntity>;
  LeaveEntitlementDetail: LeaveItemEntity;
  LeaveManagementListing: Array<LeaveHeaderEntity>;
  LeaveManagementDetail: LeaveHeaderEntity;
  MyLeaveSummary: Array<LeaveHeaderEntity>;
  MyLeaveDetail: LeaveHeaderEntity;
  LeaveListing: Array<LeaveHeaderEntity>;
  LeaveDetails: LeaveHeaderEntity;
  LeavePostingListing: Array<LeaveHeaderEntity>;
  LeavePostedListing: Array<LeaveHeaderEntity>;
  LeaveRoundingDetail: Array<LeaveRoundingEntity>;
  LeaveRoundingListing: Array<LeaveRoundingEntity>;
  LHDNReportDetail: EaFormSetupEntity;
  LHDNReportListing: Array<EaFormSetupEntity>;
  EAPartFDetail: Array<EaPartFEntity>;
  EAPartFListing: Array<EaPartFEntity>;
  PayProcessSelectPayPeriod: Array<PayPeriodEntity>;
  PayProcessSelectPayrollCycle: Array<PayrollCycleEntity>;
  PayProcessEmployeeList: Array<EmployeeEntity>;
  PayProcessDetail: Array<PayrollDetailEntity>;
  PublishPaySlipListing: Array<PublishPayslipEntity>;
  PayrollCycleListing: Array<PayrollCycleEntity>;
  PayrollCycleDetail: Array<PayrollCycleEntity>;
  PayItemListing: Array<PayItemEntity>;
  PayItemDetail: PayItemEntity;
  OneTimePayIemListing: Array<OneTimePayEntity>;
  OneTimePayIemDetail: Array<OneTimePayEntity>;
  RecurringPayItemListing: Array<RecurringPayEntity>;
  RecurringPayItemDetail: Array<RecurringPayEntity>;
  PayrollSummary: CompanyEntity;
  MyRequisitionListing: Array<RequisitionEntity>;
  MyRequisitionDetail: Array<RequisitionEntity>;
  RequisitionListing: Array<RequisitionEntity>;
  RequisitionDetails: Array<RequisitionEntity>;
  RequisitionManagementListing: Array<RequisitionEntity>;
  RequisitionManagementDetail: Array<RequisitionEntity>;
  hello: Scalars['String'];
  SubscriptionAccListing: Array<SubscriptionAccountEntity>;
  SubscriptionUserListing: Array<SubscriptionUserEntity>;
};


export type QueryClaimPolicyArgs = {
  CompanyID: Scalars['String'];
};


export type QueryClaimEntitlementListingArgs = {
  ClaimBenefitID: Scalars['String'];
};


export type QueryClaimEntitlementDetailArgs = {
  ClaimItemID: Array<Scalars['String']>;
};


export type QueryMyClaimSummaryArgs = {
  Year: Scalars['Float'];
  EmployeeID: Array<Scalars['String']>;
};


export type QueryMyClaimDetailArgs = {
  ClaimDetailsID: Scalars['String'];
};


export type QueryClaimListingArgs = {
  EmployeeID: Scalars['String'];
};


export type QueryClaimDetailArgs = {
  ClaimDetailsID: Scalars['String'];
};


export type QueryClaimPostingListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryClaimPostedListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryFinalClaimApprovalListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryClaimManagementListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryClaimManagementDetailArgs = {
  ClaimDetailsID: Scalars['String'];
};


export type QueryFinalClaimApprovalDetailArgs = {
  ClaimHeaderID: Scalars['String'];
};


export type QueryAllowancePolicyArgs = {
  CompanyID: Scalars['String'];
};


export type QueryAllowanceEntitlementListingArgs = {
  AllowanceBenefitID: Scalars['String'];
};


export type QueryAllowanceEntitlementDetailArgs = {
  AllowanceItemIDs: Array<Scalars['String']>;
};


export type QueryBankDetailArgs = {
  BankInfoIDs: Array<Scalars['String']>;
};


export type QueryBankListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryCompanyListingArgs = {
  SubscriptionAccountID: Scalars['String'];
};


export type QueryCompanySummaryArgs = {
  CompanyID: Scalars['String'];
};


export type QueryCp159DetailsArgs = {
  CP159ID: Scalars['String'];
};


export type QueryCp159ListingArgs = {
  Cp159IDs: Array<Scalars['String']>;
};


export type QueryDepartmentListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryDepartmentDetailArgs = {
  DepartmentID: Scalars['String'];
};


export type QueryDivisionListingArgs = {
  DepartmentID: Scalars['String'];
};


export type QueryDivisionDetailArgs = {
  DepartmentID: Scalars['String'];
};


export type QueryInterbankDetailArgs = {
  InterbankGiroIDs: Array<Scalars['String']>;
};


export type QueryInterbankListingArgs = {
  BankInfoID: Scalars['String'];
};


export type QueryJobGradeDetailArgs = {
  JobGradeIDs: Array<Scalars['String']>;
};


export type QueryCompanyStatutoryDetailArgs = {
  CompanyStatutoryID: Scalars['String'];
};


export type QueryCareerLogArgs = {
  EmployeeID: Scalars['String'];
};


export type QueryCareerLogInsertArgs = {
  CareerLogInput: CareerLogInput;
};


export type QueryMyCareerLogArgs = {
  EmployeeID?: Maybe<Scalars['String']>;
};


export type QueryMyDocumentListingArgs = {
  ParentID: Scalars['String'];
};


export type QueryDependentsDetailsArgs = {
  EmployeeID?: Maybe<Scalars['String']>;
};


export type QueryEmployeeListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryEmployeeProfileArgs = {
  EmployeeID: Scalars['String'];
};


export type QueryPersonalInfoDetailArgs = {
  EmployeeID: Scalars['String'];
};


export type QueryJobInfoArgs = {
  EmployeeID: Scalars['String'];
};


export type QueryMyProfileDetailArgs = {
  SubscriptionUserID: Scalars['String'];
};


export type QueryTp3DetailsArgs = {
  EmployeeID: Scalars['String'];
};


export type QuerySubordinatesDetailsArgs = {
  input: MySubordinatesInput;
};


export type QueryCalendarHolidayArgs = {
  Year: Scalars['String'];
  CompanyID: Scalars['String'];
};


export type QueryCalendarMyLeaveArgs = {
  Year: Scalars['String'];
  EmployeeID: Scalars['String'];
};


export type QueryCalendarStaffLeaveArgs = {
  Year: Scalars['String'];
  DepartmentID: Scalars['String'];
};


export type QueryCalendarBirthdayArgs = {
  Year: Scalars['String'];
  DepartmentID: Scalars['String'];
};


export type QueryEmployeeStatutoryDetailsArgs = {
  EmployeeStatutoryID?: Maybe<Scalars['String']>;
};


export type QueryTaxReliefArgs = {
  EmployeeID?: Maybe<Scalars['String']>;
};


export type QueryTaxReliefDetailsArgs = {
  EmployeeTaxReliefID?: Maybe<Scalars['String']>;
};


export type QueryWorkdayAdjustmentDetailArgs = {
  WorkdayAdjustmentID: Scalars['String'];
};


export type QueryWorkdayAdjustmentListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryLeavePolicyArgs = {
  CompanyID: Scalars['String'];
};


export type QueryLeaveEntitlementListingArgs = {
  LeaveBenefitID: Scalars['String'];
};


export type QueryLeaveEntitlementDetailArgs = {
  LeaveItemID: Scalars['String'];
};


export type QueryLeaveManagementListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryLeaveManagementDetailArgs = {
  LeaveHeaderID: Scalars['String'];
};


export type QueryMyLeaveSummaryArgs = {
  input: MyLeaveSummaryInput;
};


export type QueryMyLeaveDetailArgs = {
  EmployeeID: Scalars['String'];
  LeaveHeaderID: Scalars['String'];
};


export type QueryLeaveListingArgs = {
  EmployeeID: Scalars['String'];
};


export type QueryLeaveDetailsArgs = {
  LeaveHeaderID: Scalars['String'];
};


export type QueryLeavePostingListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryLeavePostedListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryLeaveRoundingDetailArgs = {
  LeaveRoundingID: Scalars['String'];
};


export type QueryLeaveRoundingListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryLhdnReportDetailArgs = {
  EAFormSetupID?: Maybe<Scalars['String']>;
};


export type QueryLhdnReportListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryEaPartFDetailArgs = {
  EAPartFID: Scalars['String'];
};


export type QueryEaPartFListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryPayProcessSelectPayPeriodArgs = {
  input: PayPeriodSelectionInput;
};


export type QueryPayProcessSelectPayrollCycleArgs = {
  CompanyID: Scalars['String'];
};


export type QueryPayProcessEmployeeListArgs = {
  CompanyID: Scalars['String'];
};


export type QueryPayProcessDetailArgs = {
  PayrollDetailID: Scalars['String'];
};


export type QueryPublishPaySlipListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryPayrollCycleListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryPayrollCycleDetailArgs = {
  PayrollCycleID?: Maybe<Scalars['String']>;
};


export type QueryPayItemListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryPayItemDetailArgs = {
  PayItemID?: Maybe<Scalars['String']>;
};


export type QueryOneTimePayIemListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryOneTimePayIemDetailArgs = {
  OneTimePayID?: Maybe<Scalars['String']>;
};


export type QueryRecurringPayItemListingArgs = {
  CompanyID: Array<Scalars['String']>;
};


export type QueryRecurringPayItemDetailArgs = {
  RecurringPayID?: Maybe<Scalars['String']>;
};


export type QueryPayrollSummaryArgs = {
  CompanyID: Scalars['String'];
};


export type QueryMyRequisitionListingArgs = {
  Year: Scalars['Int'];
  EmployeeID: Scalars['String'];
};


export type QueryMyRequisitionDetailArgs = {
  RequisitionHeaderID: Scalars['String'];
};


export type QueryRequisitionListingArgs = {
  EmployeeID: Scalars['String'];
};


export type QueryRequisitionDetailsArgs = {
  RequisitionHeaderID: Scalars['String'];
};


export type QueryRequisitionManagementListingArgs = {
  CompanyID: Scalars['String'];
};


export type QueryRequisitionManagementDetailArgs = {
  RequisitionHeaderID: Scalars['String'];
};


export type QuerySubscriptionAccListingArgs = {
  SubscriptionAccountID?: Maybe<Scalars['String']>;
};


export type QuerySubscriptionUserListingArgs = {
  SubscriptionUserID?: Maybe<Scalars['String']>;
};

export enum Race {
  Malay = 'Malay',
  Chinese = 'Chinese',
  Indian = 'Indian',
  Others = 'Others'
}

export type RecurringPayEntity = InterfaceBase & {
  __typename?: 'RecurringPayEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  RecurringPayID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  CompanyID?: Maybe<Scalars['String']>;
  Company?: Maybe<CompanyEntity>;
  PayItemID?: Maybe<Scalars['String']>;
  PayItem?: Maybe<PayItemEntity>;
  StartPeriodID?: Maybe<Scalars['String']>;
  EndPeroidID?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Float']>;
  Amount?: Maybe<Scalars['Float']>;
  Remark?: Maybe<Scalars['String']>;
};

export type RecurringPayInput = {
  EmployeeID?: Maybe<Scalars['String']>;
  CompanyID?: Maybe<Scalars['String']>;
  PayItemID?: Maybe<Scalars['String']>;
  StartPeriodID?: Maybe<Scalars['String']>;
  EndPeroidID?: Maybe<Scalars['String']>;
  Quantity?: Maybe<Scalars['Float']>;
  Amount?: Maybe<Scalars['Float']>;
  Remark?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type RecurringRestOffDayEntity = InterfaceBase & {
  __typename?: 'RecurringRestOffDayEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  RecurringRestOffDayID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYear: Scalars['Int'];
  RestOffType: RestOffType;
  DayOfWeek: Scalars['Int'];
  StateID?: Maybe<Scalars['String']>;
  Company: CompanyEntity;
};

export type RecurringRestOffDayInput = {
  CompanyID?: Maybe<Scalars['String']>;
  PeriodYear: Scalars['Int'];
  RestOffType?: Maybe<RestOffType>;
  DayOfWeek: Scalars['Int'];
  StateID?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum Relationship {
  Aunt = 'Aunt',
  Brother = 'Brother',
  Cousin = 'Cousin',
  Daughter = 'Daughter',
  Father = 'Father',
  Husband = 'Husband',
  Mother = 'Mother',
  Nephew = 'Nephew',
  Niece = 'Niece',
  Sister = 'Sister',
  Son = 'Son',
  Uncle = 'Uncle',
  Wife = 'Wife'
}

export enum Religion {
  Islam = 'Islam',
  Buddhism = 'Buddhism',
  Christianity = 'Christianity',
  Hinduism = 'Hinduism',
  Taoism = 'Taoism',
  Others = 'Others'
}

export type RequisitionEntity = InterfaceBase & {
  __typename?: 'RequisitionEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  RequisitionHeaderID: Scalars['String'];
  CompanyID?: Maybe<Scalars['String']>;
  RequisitionType: RequisitionType;
  Subject?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  NumberOfItem: Scalars['Int'];
  CostPerItem: Scalars['Int'];
  Amount: Scalars['Float'];
  StartDate: Scalars['DateTime'];
  EndDate: Scalars['DateTime'];
  TravelFrom?: Maybe<Scalars['String']>;
  TravelTo?: Maybe<Scalars['String']>;
  VisitingPlace?: Maybe<Scalars['String']>;
  TransportMode: TransportMode;
  Activities?: Maybe<Scalars['String']>;
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['DateTime']>;
  EmployeeID: Scalars['String'];
  Employee: EmployeeEntity;
};

export type RequisitionInput = {
  CompanyID: Scalars['String'];
  EmployeeID: Scalars['String'];
  RequisitionType: RequisitionType;
  Subject: Scalars['String'];
  Description: Scalars['String'];
  NumberOfItem: Scalars['Int'];
  CostPerItem: Scalars['Int'];
  Amount: Scalars['Float'];
  StartDate: Scalars['DateTime'];
  EndDate: Scalars['DateTime'];
  TravelFrom: Scalars['String'];
  TravelTo: Scalars['String'];
  VisitingPlace: Scalars['String'];
  TransportMode: TransportMode;
  Activities: Scalars['String'];
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['DateTime']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum RequisitionType {
  PurchasingRequisition = 'Purchasing_Requisition',
  TravelRequisition = 'Travel_Requisition',
  CashAdvanceRequisition = 'Cash_Advance_Requisition',
  Others = 'Others'
}

export type RequisitionUpdateInput = {
  ApprovalStatus: ApprovalStatus;
  ApprovalDT?: Maybe<Scalars['DateTime']>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum ResidentStatus {
  Resident = 'Resident',
  NonResident = 'Non_Resident'
}

export enum RestOffType {
  RestDay = 'Rest_Day',
  OffDay = 'Off_Day',
  PublicHoliday = 'Public_Holiday'
}

export type SalaryLogEntity = InterfaceBase & {
  __typename?: 'SalaryLogEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  SalaryLogID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  SalaryType: SalaryType;
  BasicSalary?: Maybe<Scalars['String']>;
  EffectiveDate?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
};

export type SalaryLogInput = {
  EmployeeID?: Maybe<Scalars['String']>;
  SalaryType?: Maybe<SalaryType>;
  BasicSalary?: Maybe<Scalars['String']>;
  EffectiveDate?: Maybe<Scalars['String']>;
  DocumentID?: Maybe<Scalars['String']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export enum SalaryType {
  Monthly = 'Monthly',
  Daily = 'Daily'
}

export enum SessionType {
  Full = 'Full',
  FirstHalf = 'First_Half',
  SecondHalf = 'Second_Half'
}

export enum ShortNoticeType {
  CalenderDay = 'Calender_Day',
  WorkingDay = 'Working_Day'
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Hidden = 'Hidden',
  Confirmed = 'Confirmed',
  Probation = 'Probation',
  Resigned = 'Resigned',
  Terminated = 'Terminated'
}

export type SubscriptionAccInput = {
  AccountNo: Scalars['String'];
  Name: Scalars['String'];
  ExpiryDate: Scalars['DateTime'];
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type SubscriptionAccountEntity = InterfaceBase & {
  __typename?: 'SubscriptionAccountEntity';
  Status?: Maybe<Status>;
  UserLogs: UserLogs;
  SubscriptionAccountID: Scalars['String'];
  AccountNo?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  ExpiryDate: Scalars['DateTime'];
  Users: Array<SubscriptionUserEntity>;
};

export type SubscriptionUpdateInput = {
  LoginID?: Maybe<Scalars['String']>;
  Avatar?: Maybe<Scalars['String']>;
  IsAdmin?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  SubscriptionAccountID?: Maybe<Scalars['String']>;
};

export type SubscriptionUserEntity = InterfaceBase & {
  __typename?: 'SubscriptionUserEntity';
  Status: Status;
  UserLogs?: Maybe<UserLogs>;
  SubscriptionUserID: Scalars['String'];
  LoginID: Scalars['String'];
  Avatar?: Maybe<Scalars['String']>;
  IsActived: Scalars['Boolean'];
  IsAdmin: Scalars['Boolean'];
  LastLoginCompanyID?: Maybe<Scalars['String']>;
  SubscriptionAccountID: Scalars['String'];
  SubscriptionAccount: SubscriptionAccountEntity;
};

export type SubscriptionUserInput = {
  LoginID: Scalars['String'];
  Avatar?: Maybe<Scalars['String']>;
  Password: Scalars['String'];
  IsAdmin?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Status>;
  SubscriptionAccountID: Scalars['String'];
};

export enum TransportMode {
  Flight = 'Flight',
  Car = 'Car',
  Bus = 'Bus',
  Train = 'Train',
  Motorcycle = 'Motorcycle'
}

export type UserLogInput = {
  createdDT?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  modifiedDT?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
};

export type UserLogs = {
  __typename?: 'UserLogs';
  createdDT?: Maybe<Scalars['String']>;
  createdBy?: Maybe<Scalars['String']>;
  modifiedDT?: Maybe<Scalars['String']>;
  modifiedBy?: Maybe<Scalars['String']>;
};

export type WorkdayAdjustmentEntity = InterfaceBase & {
  __typename?: 'WorkdayAdjustmentEntity';
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogs>;
  WorkdayAdjustmentID: Scalars['String'];
  EmployeeID?: Maybe<Scalars['String']>;
  CompanyID?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  WorkDays: Scalars['Int'];
  AdjustedWorkDays: Scalars['Int'];
  Company?: Maybe<CompanyEntity>;
  Employee?: Maybe<EmployeeEntity>;
};

export type WorkdayAdjustmentInput = {
  EmployeeID?: Maybe<Scalars['String']>;
  CompanyID?: Maybe<Scalars['String']>;
  PayPeriodID?: Maybe<Scalars['String']>;
  WorkDays?: Maybe<Scalars['Int']>;
  AdjustedWorkDays?: Maybe<Scalars['Int']>;
  Status?: Maybe<Status>;
  UserLogs?: Maybe<UserLogInput>;
};

export type AddSubscriptionAccMutationVariables = {
  input: SubscriptionAccInput;
};


export type AddSubscriptionAccMutation = (
  { __typename?: 'Mutation' }
  & { SubscriptionAccCreate: (
    { __typename?: 'SubscriptionAccountEntity' }
    & Pick<SubscriptionAccountEntity, 'SubscriptionAccountID' | 'AccountNo' | 'Name'>
  ) }
);

export type LoginMutationVariables = {
  Password: Scalars['String'];
  LoginId: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { Login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'AccessToken'>
    & { SubscriptionUser: (
      { __typename?: 'SubscriptionUserEntity' }
      & Pick<SubscriptionUserEntity, 'SubscriptionUserID' | 'Status' | 'IsAdmin'>
    ) }
  ) }
);

export type GetSubscriptionAccQueryVariables = {
  SubscriptionAccountID?: Maybe<Scalars['String']>;
};


export type GetSubscriptionAccQuery = (
  { __typename?: 'Query' }
  & { SubscriptionAccListing: Array<(
    { __typename?: 'SubscriptionAccountEntity' }
    & Pick<SubscriptionAccountEntity, 'SubscriptionAccountID' | 'Name' | 'Status'>
  )> }
);

export type BatchQueryQueryVariables = {
  SubscriptionAccountID?: Maybe<Scalars['String']>;
  subInput: Scalars['String'];
};


export type BatchQueryQuery = (
  { __typename?: 'Query' }
  & { SubscriptionAccListing: Array<(
    { __typename?: 'SubscriptionAccountEntity' }
    & Pick<SubscriptionAccountEntity, 'SubscriptionAccountID' | 'Name' | 'Status'>
  )>, ClaimEntitlementListing: Array<(
    { __typename?: 'ClaimItemEntity' }
    & Pick<ClaimItemEntity, 'Status'>
  )> }
);

export const AddSubscriptionAccDocument = gql`
    mutation addSubscriptionAcc($input: SubscriptionAccInput!) {
  SubscriptionAccCreate(input: $input) {
    SubscriptionAccountID
    AccountNo
    Name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddSubscriptionAccGQL extends Apollo.Mutation<AddSubscriptionAccMutation, AddSubscriptionAccMutationVariables> {
    document = AddSubscriptionAccDocument;
    
  }
export const LoginDocument = gql`
    mutation Login($Password: String!, $LoginId: String!) {
  Login(Password: $Password, LoginId: $LoginId) {
    AccessToken
    SubscriptionUser {
      SubscriptionUserID
      Status
      IsAdmin
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const GetSubscriptionAccDocument = gql`
    query getSubscriptionAcc($SubscriptionAccountID: String) {
  SubscriptionAccListing(SubscriptionAccountID: $SubscriptionAccountID) {
    SubscriptionAccountID
    Name
    Status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSubscriptionAccGQL extends Apollo.Query<GetSubscriptionAccQuery, GetSubscriptionAccQueryVariables> {
    document = GetSubscriptionAccDocument;
    
  }
export const BatchQueryDocument = gql`
    query BatchQuery($SubscriptionAccountID: String, $subInput: String!) {
  SubscriptionAccListing(SubscriptionAccountID: $SubscriptionAccountID) {
    SubscriptionAccountID
    Name
    Status
  }
  ClaimEntitlementListing(ClaimBenefitID: $subInput) {
    Status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BatchQueryGQL extends Apollo.Query<BatchQueryQuery, BatchQueryQueryVariables> {
    document = BatchQueryDocument;
    
  }