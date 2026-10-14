/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { DataSnowflakeAccountsAccountsParametersAbortDetachedQueryList,
DataSnowflakeAccountsAccountsParametersActivePythonProfilerList,
DataSnowflakeAccountsAccountsParametersAllowBindValuesAccessList,
DataSnowflakeAccountsAccountsParametersAllowClientMfaCachingList,
DataSnowflakeAccountsAccountsParametersAllowIdTokenList,
DataSnowflakeAccountsAccountsParametersAllowedSpcsWorkloadTypesList,
DataSnowflakeAccountsAccountsParametersAutocommitList,
DataSnowflakeAccountsAccountsParametersBaseLocationPrefixList,
DataSnowflakeAccountsAccountsParametersBinaryInputFormatList,
DataSnowflakeAccountsAccountsParametersBinaryOutputFormatList,
DataSnowflakeAccountsAccountsParametersCatalogList,
DataSnowflakeAccountsAccountsParametersCatalogSyncList,
DataSnowflakeAccountsAccountsParametersClientEnableLogInfoStatementParametersList,
DataSnowflakeAccountsAccountsParametersClientEncryptionKeySizeList,
DataSnowflakeAccountsAccountsParametersClientMemoryLimitList,
DataSnowflakeAccountsAccountsParametersClientMetadataRequestUseConnectionCtxList,
DataSnowflakeAccountsAccountsParametersClientMetadataUseSessionDatabaseList,
DataSnowflakeAccountsAccountsParametersClientPrefetchThreadsList,
DataSnowflakeAccountsAccountsParametersClientResultChunkSizeList,
DataSnowflakeAccountsAccountsParametersClientResultColumnCaseInsensitiveList,
DataSnowflakeAccountsAccountsParametersClientSessionKeepAliveList,
DataSnowflakeAccountsAccountsParametersClientSessionKeepAliveHeartbeatFrequencyList,
DataSnowflakeAccountsAccountsParametersClientTimestampTypeMappingList,
DataSnowflakeAccountsAccountsParametersCortexCodeCliDailyEstCreditLimitPerUserList,
DataSnowflakeAccountsAccountsParametersCortexCodeDesktopDailyEstCreditLimitPerUserList,
DataSnowflakeAccountsAccountsParametersCortexCodeSnowsightDailyEstCreditLimitPerUserList,
DataSnowflakeAccountsAccountsParametersCortexEnabledCrossRegionList,
DataSnowflakeAccountsAccountsParametersCortexModelsAllowlistStructList,
DataSnowflakeAccountsAccountsParametersCsvTimestampFormatList,
DataSnowflakeAccountsAccountsParametersDataMetricScheduleList,
DataSnowflakeAccountsAccountsParametersDataRetentionTimeInDaysList,
DataSnowflakeAccountsAccountsParametersDateInputFormatList,
DataSnowflakeAccountsAccountsParametersDateOutputFormatList,
DataSnowflakeAccountsAccountsParametersDefaultDbtVersionList,
DataSnowflakeAccountsAccountsParametersDefaultDdlCollationList,
DataSnowflakeAccountsAccountsParametersDefaultNotebookComputePoolCpuList,
DataSnowflakeAccountsAccountsParametersDefaultNotebookComputePoolGpuList,
DataSnowflakeAccountsAccountsParametersDefaultNullOrderingList,
DataSnowflakeAccountsAccountsParametersDefaultStreamlitComputePoolList,
DataSnowflakeAccountsAccountsParametersDefaultStreamlitNotebookWarehouseList,
DataSnowflakeAccountsAccountsParametersDisableUiDownloadButtonList,
DataSnowflakeAccountsAccountsParametersDisableUserPrivilegeGrantsList,
DataSnowflakeAccountsAccountsParametersDisallowedSpcsWorkloadTypesList,
DataSnowflakeAccountsAccountsParametersEnableAutomaticSensitiveDataClassificationLogList,
DataSnowflakeAccountsAccountsParametersEnableBudgetEventLoggingList,
DataSnowflakeAccountsAccountsParametersEnableConsoleOutputList,
DataSnowflakeAccountsAccountsParametersEnableCortexAnalystList,
DataSnowflakeAccountsAccountsParametersEnableDataCompactionList,
DataSnowflakeAccountsAccountsParametersEnableEgressCostOptimizerList,
DataSnowflakeAccountsAccountsParametersEnableGetDdlUseDataTypeAliasList,
DataSnowflakeAccountsAccountsParametersEnableIcebergMergeOnReadList,
DataSnowflakeAccountsAccountsParametersEnableIdentifierFirstLoginList,
DataSnowflakeAccountsAccountsParametersEnableInternalStagesPrivatelinkList,
DataSnowflakeAccountsAccountsParametersEnableNotebookCreationInPersonalDbList,
DataSnowflakeAccountsAccountsParametersEnablePerAccountAppServicePrivatelinkUrlList,
DataSnowflakeAccountsAccountsParametersEnablePersonalDatabaseList,
DataSnowflakeAccountsAccountsParametersEnableSpcsBlockStorageSnowflakeFullEncryptionEnforcementList,
DataSnowflakeAccountsAccountsParametersEnableTagPropagationEventLoggingList,
DataSnowflakeAccountsAccountsParametersEnableTriSecretAndRekeyOptOutForImageRepositoryList,
DataSnowflakeAccountsAccountsParametersEnableTriSecretAndRekeyOptOutForSpcsBlockStorageList,
DataSnowflakeAccountsAccountsParametersEnableUnhandledExceptionsReportingList,
DataSnowflakeAccountsAccountsParametersEnableUnloadPhysicalTypeOptimizationList,
DataSnowflakeAccountsAccountsParametersEnableUnredactedQuerySyntaxErrorList,
DataSnowflakeAccountsAccountsParametersEnableUnredactedSecureObjectErrorList,
DataSnowflakeAccountsAccountsParametersEnforceNetworkRulesForInternalStagesList,
DataSnowflakeAccountsAccountsParametersErrorOnNondeterministicMergeList,
DataSnowflakeAccountsAccountsParametersErrorOnNondeterministicUpdateList,
DataSnowflakeAccountsAccountsParametersEventTableList,
DataSnowflakeAccountsAccountsParametersExternalOauthAddPrivilegedRolesToBlockedListStructList,
DataSnowflakeAccountsAccountsParametersExternalVolumeList,
DataSnowflakeAccountsAccountsParametersGeographyOutputFormatList,
DataSnowflakeAccountsAccountsParametersGeometryOutputFormatList,
DataSnowflakeAccountsAccountsParametersHybridTableLockTimeoutList,
DataSnowflakeAccountsAccountsParametersIcebergVersionDefaultList,
DataSnowflakeAccountsAccountsParametersInitialReplicationSizeLimitInTbList,
DataSnowflakeAccountsAccountsParametersJdbcTreatDecimalAsIntList,
DataSnowflakeAccountsAccountsParametersJdbcTreatTimestampNtzAsUtcList,
DataSnowflakeAccountsAccountsParametersJdbcUseSessionTimezoneList,
DataSnowflakeAccountsAccountsParametersJsTreatIntegerAsBigintList,
DataSnowflakeAccountsAccountsParametersJsonIndentList,
DataSnowflakeAccountsAccountsParametersListingAutoFulfillmentReplicationRefreshScheduleList,
DataSnowflakeAccountsAccountsParametersLockTimeoutList,
DataSnowflakeAccountsAccountsParametersLogEventLevelList,
DataSnowflakeAccountsAccountsParametersLogLevelList,
DataSnowflakeAccountsAccountsParametersMaxConcurrencyLevelList,
DataSnowflakeAccountsAccountsParametersMaxDataExtensionTimeInDaysList,
DataSnowflakeAccountsAccountsParametersMetricLevelList,
DataSnowflakeAccountsAccountsParametersMinDataRetentionTimeInDaysList,
DataSnowflakeAccountsAccountsParametersMultiStatementCountList,
DataSnowflakeAccountsAccountsParametersNetworkPolicyList,
DataSnowflakeAccountsAccountsParametersNoorderSequenceAsDefaultList,
DataSnowflakeAccountsAccountsParametersOauthAddPrivilegedRolesToBlockedListStructList,
DataSnowflakeAccountsAccountsParametersOdbcTreatDecimalAsIntList,
DataSnowflakeAccountsAccountsParametersPeriodicDataRekeyingList,
DataSnowflakeAccountsAccountsParametersPipeExecutionPausedList,
DataSnowflakeAccountsAccountsParametersPreventLoadFromInlineUrlList,
DataSnowflakeAccountsAccountsParametersPreventUnloadToInlineUrlList,
DataSnowflakeAccountsAccountsParametersPreventUnloadToInternalStagesList,
DataSnowflakeAccountsAccountsParametersPythonProfilerModulesList,
DataSnowflakeAccountsAccountsParametersPythonProfilerTargetStageList } from './structs0';
export interface DataSnowflakeAccountsAccountsParametersQueryTag {
}

export function dataSnowflakeAccountsAccountsParametersQueryTagToTerraform(struct?: DataSnowflakeAccountsAccountsParametersQueryTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersQueryTagToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersQueryTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersQueryTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersQueryTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersQueryTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersQueryTagList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersQueryTagOutputReference {
    return new DataSnowflakeAccountsAccountsParametersQueryTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCase {
}

export function dataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCaseToTerraform(struct?: DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCaseToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCaseList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCaseOutputReference {
    return new DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersReadConsistencyMode {
}

export function dataSnowflakeAccountsAccountsParametersReadConsistencyModeToTerraform(struct?: DataSnowflakeAccountsAccountsParametersReadConsistencyMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersReadConsistencyModeToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersReadConsistencyMode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersReadConsistencyModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersReadConsistencyMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersReadConsistencyMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersReadConsistencyModeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersReadConsistencyModeOutputReference {
    return new DataSnowflakeAccountsAccountsParametersReadConsistencyModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersReplaceInvalidCharacters {
}

export function dataSnowflakeAccountsAccountsParametersReplaceInvalidCharactersToTerraform(struct?: DataSnowflakeAccountsAccountsParametersReplaceInvalidCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersReplaceInvalidCharactersToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersReplaceInvalidCharacters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersReplaceInvalidCharactersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersReplaceInvalidCharacters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersReplaceInvalidCharacters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersReplaceInvalidCharactersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersReplaceInvalidCharactersOutputReference {
    return new DataSnowflakeAccountsAccountsParametersReplaceInvalidCharactersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreation {
}

export function dataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreationToTerraform(struct?: DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreationToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreationOutputReference {
    return new DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperation {
}

export function dataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperationToTerraform(struct?: DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperationToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperationOutputReference {
    return new DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersRowTimestampDefault {
}

export function dataSnowflakeAccountsAccountsParametersRowTimestampDefaultToTerraform(struct?: DataSnowflakeAccountsAccountsParametersRowTimestampDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersRowTimestampDefaultToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersRowTimestampDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersRowTimestampDefaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersRowTimestampDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersRowTimestampDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersRowTimestampDefaultList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersRowTimestampDefaultOutputReference {
    return new DataSnowflakeAccountsAccountsParametersRowTimestampDefaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersRowsPerResultset {
}

export function dataSnowflakeAccountsAccountsParametersRowsPerResultsetToTerraform(struct?: DataSnowflakeAccountsAccountsParametersRowsPerResultset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersRowsPerResultsetToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersRowsPerResultset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersRowsPerResultsetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersRowsPerResultset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersRowsPerResultset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersRowsPerResultsetList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersRowsPerResultsetOutputReference {
    return new DataSnowflakeAccountsAccountsParametersRowsPerResultsetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersS3StageVpceDnsName {
}

export function dataSnowflakeAccountsAccountsParametersS3StageVpceDnsNameToTerraform(struct?: DataSnowflakeAccountsAccountsParametersS3StageVpceDnsName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersS3StageVpceDnsNameToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersS3StageVpceDnsName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersS3StageVpceDnsNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersS3StageVpceDnsName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersS3StageVpceDnsName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersS3StageVpceDnsNameList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersS3StageVpceDnsNameOutputReference {
    return new DataSnowflakeAccountsAccountsParametersS3StageVpceDnsNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersSearchPath {
}

export function dataSnowflakeAccountsAccountsParametersSearchPathToTerraform(struct?: DataSnowflakeAccountsAccountsParametersSearchPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersSearchPathToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersSearchPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersSearchPathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersSearchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersSearchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersSearchPathList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersSearchPathOutputReference {
    return new DataSnowflakeAccountsAccountsParametersSearchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSize {
}

export function dataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSizeToTerraform(struct?: DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSizeToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSizeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSizeOutputReference {
    return new DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSize {
}

export function dataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSizeToTerraform(struct?: DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSizeToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSizeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSizeOutputReference {
    return new DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersShareRestrictions {
}

export function dataSnowflakeAccountsAccountsParametersShareRestrictionsToTerraform(struct?: DataSnowflakeAccountsAccountsParametersShareRestrictions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersShareRestrictionsToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersShareRestrictions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersShareRestrictionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersShareRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersShareRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersShareRestrictionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersShareRestrictionsOutputReference {
    return new DataSnowflakeAccountsAccountsParametersShareRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumer {
}

export function dataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumerToTerraform(struct?: DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumerToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumerList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumerOutputReference {
    return new DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersSqlTraceQueryText {
}

export function dataSnowflakeAccountsAccountsParametersSqlTraceQueryTextToTerraform(struct?: DataSnowflakeAccountsAccountsParametersSqlTraceQueryText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersSqlTraceQueryTextToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersSqlTraceQueryText): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersSqlTraceQueryTextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersSqlTraceQueryText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersSqlTraceQueryText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersSqlTraceQueryTextList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersSqlTraceQueryTextOutputReference {
    return new DataSnowflakeAccountsAccountsParametersSqlTraceQueryTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersSsoLoginPage {
}

export function dataSnowflakeAccountsAccountsParametersSsoLoginPageToTerraform(struct?: DataSnowflakeAccountsAccountsParametersSsoLoginPage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersSsoLoginPageToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersSsoLoginPage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersSsoLoginPageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersSsoLoginPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersSsoLoginPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersSsoLoginPageList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersSsoLoginPageOutputReference {
    return new DataSnowflakeAccountsAccountsParametersSsoLoginPageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSeconds {
}

export function dataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSecondsToTerraform(struct?: DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSecondsToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSecondsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSecondsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSecondsOutputReference {
    return new DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersStatementTimeoutInSeconds {
}

export function dataSnowflakeAccountsAccountsParametersStatementTimeoutInSecondsToTerraform(struct?: DataSnowflakeAccountsAccountsParametersStatementTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersStatementTimeoutInSecondsToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersStatementTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersStatementTimeoutInSecondsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersStatementTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersStatementTimeoutInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersStatementTimeoutInSecondsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersStatementTimeoutInSecondsOutputReference {
    return new DataSnowflakeAccountsAccountsParametersStatementTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersStorageSerializationPolicy {
}

export function dataSnowflakeAccountsAccountsParametersStorageSerializationPolicyToTerraform(struct?: DataSnowflakeAccountsAccountsParametersStorageSerializationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersStorageSerializationPolicyToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersStorageSerializationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersStorageSerializationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersStorageSerializationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersStorageSerializationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersStorageSerializationPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersStorageSerializationPolicyOutputReference {
    return new DataSnowflakeAccountsAccountsParametersStorageSerializationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersStrictJsonOutput {
}

export function dataSnowflakeAccountsAccountsParametersStrictJsonOutputToTerraform(struct?: DataSnowflakeAccountsAccountsParametersStrictJsonOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersStrictJsonOutputToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersStrictJsonOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersStrictJsonOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersStrictJsonOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersStrictJsonOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersStrictJsonOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersStrictJsonOutputOutputReference {
    return new DataSnowflakeAccountsAccountsParametersStrictJsonOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailures {
}

export function dataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailuresToTerraform(struct?: DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailuresToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailures): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailuresOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailuresList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailuresOutputReference {
    return new DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttempts {
}

export function dataSnowflakeAccountsAccountsParametersTaskAutoRetryAttemptsToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttempts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTaskAutoRetryAttemptsToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttempts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttemptsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttemptsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttemptsOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttemptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimeInputFormat {
}

export function dataSnowflakeAccountsAccountsParametersTimeInputFormatToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimeInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimeInputFormatToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimeInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimeInputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimeInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimeInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimeInputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimeInputFormatOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimeInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimeOutputFormat {
}

export function dataSnowflakeAccountsAccountsParametersTimeOutputFormatToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimeOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimeOutputFormatToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimeOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimeOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimeOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimeOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimeOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimeOutputFormatOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimeOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24H {
}

export function dataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24HToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24H): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24HToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24H): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24HOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24H | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24H | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24HList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24HOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24HOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimestampInputFormat {
}

export function dataSnowflakeAccountsAccountsParametersTimestampInputFormatToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimestampInputFormatToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimestampInputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimestampInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimestampInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimestampInputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimestampInputFormatOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimestampInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormat {
}

export function dataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormatToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormatToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormatOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormat {
}

export function dataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormatToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormatToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormatOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimestampOutputFormat {
}

export function dataSnowflakeAccountsAccountsParametersTimestampOutputFormatToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimestampOutputFormatToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimestampOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimestampOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimestampOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimestampOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimestampOutputFormatOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimestampOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimestampTypeMapping {
}

export function dataSnowflakeAccountsAccountsParametersTimestampTypeMappingToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampTypeMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimestampTypeMappingToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampTypeMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimestampTypeMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimestampTypeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimestampTypeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimestampTypeMappingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimestampTypeMappingOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimestampTypeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormat {
}

export function dataSnowflakeAccountsAccountsParametersTimestampTzOutputFormatToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimestampTzOutputFormatToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormatOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTimezone {
}

export function dataSnowflakeAccountsAccountsParametersTimezoneToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimezone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTimezoneToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTimezone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTimezoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTimezone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTimezoneList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTimezoneOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTraceLevel {
}

export function dataSnowflakeAccountsAccountsParametersTraceLevelToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTraceLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTraceLevelToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTraceLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTraceLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTraceLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTraceLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTraceLevelList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTraceLevelOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTraceLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTransactionAbortOnError {
}

export function dataSnowflakeAccountsAccountsParametersTransactionAbortOnErrorToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTransactionAbortOnError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTransactionAbortOnErrorToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTransactionAbortOnError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTransactionAbortOnErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTransactionAbortOnError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTransactionAbortOnError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTransactionAbortOnErrorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTransactionAbortOnErrorOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTransactionAbortOnErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevel {
}

export function dataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevelToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevelToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevelList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevelOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStart {
}

export function dataSnowflakeAccountsAccountsParametersTwoDigitCenturyStartToTerraform(struct?: DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersTwoDigitCenturyStartToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStartList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStartOutputReference {
    return new DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersUnsupportedDdlAction {
}

export function dataSnowflakeAccountsAccountsParametersUnsupportedDdlActionToTerraform(struct?: DataSnowflakeAccountsAccountsParametersUnsupportedDdlAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersUnsupportedDdlActionToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersUnsupportedDdlAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersUnsupportedDdlActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersUnsupportedDdlAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersUnsupportedDdlAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersUnsupportedDdlActionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersUnsupportedDdlActionOutputReference {
    return new DataSnowflakeAccountsAccountsParametersUnsupportedDdlActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersUseCachedResult {
}

export function dataSnowflakeAccountsAccountsParametersUseCachedResultToTerraform(struct?: DataSnowflakeAccountsAccountsParametersUseCachedResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersUseCachedResultToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersUseCachedResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersUseCachedResultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersUseCachedResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersUseCachedResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersUseCachedResultList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersUseCachedResultOutputReference {
    return new DataSnowflakeAccountsAccountsParametersUseCachedResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersUseWorkspacesForSql {
}

export function dataSnowflakeAccountsAccountsParametersUseWorkspacesForSqlToTerraform(struct?: DataSnowflakeAccountsAccountsParametersUseWorkspacesForSql): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersUseWorkspacesForSqlToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersUseWorkspacesForSql): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersUseWorkspacesForSqlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersUseWorkspacesForSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersUseWorkspacesForSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersUseWorkspacesForSqlList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersUseWorkspacesForSqlOutputReference {
    return new DataSnowflakeAccountsAccountsParametersUseWorkspacesForSqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSize {
}

export function dataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSizeToTerraform(struct?: DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSizeToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSizeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSizeOutputReference {
    return new DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSeconds {
}

export function dataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSecondsToTerraform(struct?: DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSecondsToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSecondsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference {
    return new DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMs {
}

export function dataSnowflakeAccountsAccountsParametersUserTaskTimeoutMsToTerraform(struct?: DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersUserTaskTimeoutMsToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMsOutputReference {
    return new DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersWeekOfYearPolicy {
}

export function dataSnowflakeAccountsAccountsParametersWeekOfYearPolicyToTerraform(struct?: DataSnowflakeAccountsAccountsParametersWeekOfYearPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersWeekOfYearPolicyToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersWeekOfYearPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersWeekOfYearPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersWeekOfYearPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersWeekOfYearPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersWeekOfYearPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersWeekOfYearPolicyOutputReference {
    return new DataSnowflakeAccountsAccountsParametersWeekOfYearPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParametersWeekStart {
}

export function dataSnowflakeAccountsAccountsParametersWeekStartToTerraform(struct?: DataSnowflakeAccountsAccountsParametersWeekStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersWeekStartToHclTerraform(struct?: DataSnowflakeAccountsAccountsParametersWeekStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersWeekStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParametersWeekStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParametersWeekStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataSnowflakeAccountsAccountsParametersWeekStartList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersWeekStartOutputReference {
    return new DataSnowflakeAccountsAccountsParametersWeekStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsParameters {
}

export function dataSnowflakeAccountsAccountsParametersToTerraform(struct?: DataSnowflakeAccountsAccountsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsParametersToHclTerraform(struct?: DataSnowflakeAccountsAccountsParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_detached_query - computed: true, optional: false, required: false
  private _abortDetachedQuery = new DataSnowflakeAccountsAccountsParametersAbortDetachedQueryList(this, "abort_detached_query", false);
  public get abortDetachedQuery() {
    return this._abortDetachedQuery;
  }

  // active_python_profiler - computed: true, optional: false, required: false
  private _activePythonProfiler = new DataSnowflakeAccountsAccountsParametersActivePythonProfilerList(this, "active_python_profiler", false);
  public get activePythonProfiler() {
    return this._activePythonProfiler;
  }

  // allow_bind_values_access - computed: true, optional: false, required: false
  private _allowBindValuesAccess = new DataSnowflakeAccountsAccountsParametersAllowBindValuesAccessList(this, "allow_bind_values_access", false);
  public get allowBindValuesAccess() {
    return this._allowBindValuesAccess;
  }

  // allow_client_mfa_caching - computed: true, optional: false, required: false
  private _allowClientMfaCaching = new DataSnowflakeAccountsAccountsParametersAllowClientMfaCachingList(this, "allow_client_mfa_caching", false);
  public get allowClientMfaCaching() {
    return this._allowClientMfaCaching;
  }

  // allow_id_token - computed: true, optional: false, required: false
  private _allowIdToken = new DataSnowflakeAccountsAccountsParametersAllowIdTokenList(this, "allow_id_token", false);
  public get allowIdToken() {
    return this._allowIdToken;
  }

  // allowed_spcs_workload_types - computed: true, optional: false, required: false
  private _allowedSpcsWorkloadTypes = new DataSnowflakeAccountsAccountsParametersAllowedSpcsWorkloadTypesList(this, "allowed_spcs_workload_types", false);
  public get allowedSpcsWorkloadTypes() {
    return this._allowedSpcsWorkloadTypes;
  }

  // autocommit - computed: true, optional: false, required: false
  private _autocommit = new DataSnowflakeAccountsAccountsParametersAutocommitList(this, "autocommit", false);
  public get autocommit() {
    return this._autocommit;
  }

  // base_location_prefix - computed: true, optional: false, required: false
  private _baseLocationPrefix = new DataSnowflakeAccountsAccountsParametersBaseLocationPrefixList(this, "base_location_prefix", false);
  public get baseLocationPrefix() {
    return this._baseLocationPrefix;
  }

  // binary_input_format - computed: true, optional: false, required: false
  private _binaryInputFormat = new DataSnowflakeAccountsAccountsParametersBinaryInputFormatList(this, "binary_input_format", false);
  public get binaryInputFormat() {
    return this._binaryInputFormat;
  }

  // binary_output_format - computed: true, optional: false, required: false
  private _binaryOutputFormat = new DataSnowflakeAccountsAccountsParametersBinaryOutputFormatList(this, "binary_output_format", false);
  public get binaryOutputFormat() {
    return this._binaryOutputFormat;
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new DataSnowflakeAccountsAccountsParametersCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }

  // catalog_sync - computed: true, optional: false, required: false
  private _catalogSync = new DataSnowflakeAccountsAccountsParametersCatalogSyncList(this, "catalog_sync", false);
  public get catalogSync() {
    return this._catalogSync;
  }

  // client_enable_log_info_statement_parameters - computed: true, optional: false, required: false
  private _clientEnableLogInfoStatementParameters = new DataSnowflakeAccountsAccountsParametersClientEnableLogInfoStatementParametersList(this, "client_enable_log_info_statement_parameters", false);
  public get clientEnableLogInfoStatementParameters() {
    return this._clientEnableLogInfoStatementParameters;
  }

  // client_encryption_key_size - computed: true, optional: false, required: false
  private _clientEncryptionKeySize = new DataSnowflakeAccountsAccountsParametersClientEncryptionKeySizeList(this, "client_encryption_key_size", false);
  public get clientEncryptionKeySize() {
    return this._clientEncryptionKeySize;
  }

  // client_memory_limit - computed: true, optional: false, required: false
  private _clientMemoryLimit = new DataSnowflakeAccountsAccountsParametersClientMemoryLimitList(this, "client_memory_limit", false);
  public get clientMemoryLimit() {
    return this._clientMemoryLimit;
  }

  // client_metadata_request_use_connection_ctx - computed: true, optional: false, required: false
  private _clientMetadataRequestUseConnectionCtx = new DataSnowflakeAccountsAccountsParametersClientMetadataRequestUseConnectionCtxList(this, "client_metadata_request_use_connection_ctx", false);
  public get clientMetadataRequestUseConnectionCtx() {
    return this._clientMetadataRequestUseConnectionCtx;
  }

  // client_metadata_use_session_database - computed: true, optional: false, required: false
  private _clientMetadataUseSessionDatabase = new DataSnowflakeAccountsAccountsParametersClientMetadataUseSessionDatabaseList(this, "client_metadata_use_session_database", false);
  public get clientMetadataUseSessionDatabase() {
    return this._clientMetadataUseSessionDatabase;
  }

  // client_prefetch_threads - computed: true, optional: false, required: false
  private _clientPrefetchThreads = new DataSnowflakeAccountsAccountsParametersClientPrefetchThreadsList(this, "client_prefetch_threads", false);
  public get clientPrefetchThreads() {
    return this._clientPrefetchThreads;
  }

  // client_result_chunk_size - computed: true, optional: false, required: false
  private _clientResultChunkSize = new DataSnowflakeAccountsAccountsParametersClientResultChunkSizeList(this, "client_result_chunk_size", false);
  public get clientResultChunkSize() {
    return this._clientResultChunkSize;
  }

  // client_result_column_case_insensitive - computed: true, optional: false, required: false
  private _clientResultColumnCaseInsensitive = new DataSnowflakeAccountsAccountsParametersClientResultColumnCaseInsensitiveList(this, "client_result_column_case_insensitive", false);
  public get clientResultColumnCaseInsensitive() {
    return this._clientResultColumnCaseInsensitive;
  }

  // client_session_keep_alive - computed: true, optional: false, required: false
  private _clientSessionKeepAlive = new DataSnowflakeAccountsAccountsParametersClientSessionKeepAliveList(this, "client_session_keep_alive", false);
  public get clientSessionKeepAlive() {
    return this._clientSessionKeepAlive;
  }

  // client_session_keep_alive_heartbeat_frequency - computed: true, optional: false, required: false
  private _clientSessionKeepAliveHeartbeatFrequency = new DataSnowflakeAccountsAccountsParametersClientSessionKeepAliveHeartbeatFrequencyList(this, "client_session_keep_alive_heartbeat_frequency", false);
  public get clientSessionKeepAliveHeartbeatFrequency() {
    return this._clientSessionKeepAliveHeartbeatFrequency;
  }

  // client_timestamp_type_mapping - computed: true, optional: false, required: false
  private _clientTimestampTypeMapping = new DataSnowflakeAccountsAccountsParametersClientTimestampTypeMappingList(this, "client_timestamp_type_mapping", false);
  public get clientTimestampTypeMapping() {
    return this._clientTimestampTypeMapping;
  }

  // cortex_code_cli_daily_est_credit_limit_per_user - computed: true, optional: false, required: false
  private _cortexCodeCliDailyEstCreditLimitPerUser = new DataSnowflakeAccountsAccountsParametersCortexCodeCliDailyEstCreditLimitPerUserList(this, "cortex_code_cli_daily_est_credit_limit_per_user", false);
  public get cortexCodeCliDailyEstCreditLimitPerUser() {
    return this._cortexCodeCliDailyEstCreditLimitPerUser;
  }

  // cortex_code_desktop_daily_est_credit_limit_per_user - computed: true, optional: false, required: false
  private _cortexCodeDesktopDailyEstCreditLimitPerUser = new DataSnowflakeAccountsAccountsParametersCortexCodeDesktopDailyEstCreditLimitPerUserList(this, "cortex_code_desktop_daily_est_credit_limit_per_user", false);
  public get cortexCodeDesktopDailyEstCreditLimitPerUser() {
    return this._cortexCodeDesktopDailyEstCreditLimitPerUser;
  }

  // cortex_code_snowsight_daily_est_credit_limit_per_user - computed: true, optional: false, required: false
  private _cortexCodeSnowsightDailyEstCreditLimitPerUser = new DataSnowflakeAccountsAccountsParametersCortexCodeSnowsightDailyEstCreditLimitPerUserList(this, "cortex_code_snowsight_daily_est_credit_limit_per_user", false);
  public get cortexCodeSnowsightDailyEstCreditLimitPerUser() {
    return this._cortexCodeSnowsightDailyEstCreditLimitPerUser;
  }

  // cortex_enabled_cross_region - computed: true, optional: false, required: false
  private _cortexEnabledCrossRegion = new DataSnowflakeAccountsAccountsParametersCortexEnabledCrossRegionList(this, "cortex_enabled_cross_region", false);
  public get cortexEnabledCrossRegion() {
    return this._cortexEnabledCrossRegion;
  }

  // cortex_models_allowlist - computed: true, optional: false, required: false
  private _cortexModelsAllowlist = new DataSnowflakeAccountsAccountsParametersCortexModelsAllowlistStructList(this, "cortex_models_allowlist", false);
  public get cortexModelsAllowlist() {
    return this._cortexModelsAllowlist;
  }

  // csv_timestamp_format - computed: true, optional: false, required: false
  private _csvTimestampFormat = new DataSnowflakeAccountsAccountsParametersCsvTimestampFormatList(this, "csv_timestamp_format", false);
  public get csvTimestampFormat() {
    return this._csvTimestampFormat;
  }

  // data_metric_schedule - computed: true, optional: false, required: false
  private _dataMetricSchedule = new DataSnowflakeAccountsAccountsParametersDataMetricScheduleList(this, "data_metric_schedule", false);
  public get dataMetricSchedule() {
    return this._dataMetricSchedule;
  }

  // data_retention_time_in_days - computed: true, optional: false, required: false
  private _dataRetentionTimeInDays = new DataSnowflakeAccountsAccountsParametersDataRetentionTimeInDaysList(this, "data_retention_time_in_days", false);
  public get dataRetentionTimeInDays() {
    return this._dataRetentionTimeInDays;
  }

  // date_input_format - computed: true, optional: false, required: false
  private _dateInputFormat = new DataSnowflakeAccountsAccountsParametersDateInputFormatList(this, "date_input_format", false);
  public get dateInputFormat() {
    return this._dateInputFormat;
  }

  // date_output_format - computed: true, optional: false, required: false
  private _dateOutputFormat = new DataSnowflakeAccountsAccountsParametersDateOutputFormatList(this, "date_output_format", false);
  public get dateOutputFormat() {
    return this._dateOutputFormat;
  }

  // default_dbt_version - computed: true, optional: false, required: false
  private _defaultDbtVersion = new DataSnowflakeAccountsAccountsParametersDefaultDbtVersionList(this, "default_dbt_version", false);
  public get defaultDbtVersion() {
    return this._defaultDbtVersion;
  }

  // default_ddl_collation - computed: true, optional: false, required: false
  private _defaultDdlCollation = new DataSnowflakeAccountsAccountsParametersDefaultDdlCollationList(this, "default_ddl_collation", false);
  public get defaultDdlCollation() {
    return this._defaultDdlCollation;
  }

  // default_notebook_compute_pool_cpu - computed: true, optional: false, required: false
  private _defaultNotebookComputePoolCpu = new DataSnowflakeAccountsAccountsParametersDefaultNotebookComputePoolCpuList(this, "default_notebook_compute_pool_cpu", false);
  public get defaultNotebookComputePoolCpu() {
    return this._defaultNotebookComputePoolCpu;
  }

  // default_notebook_compute_pool_gpu - computed: true, optional: false, required: false
  private _defaultNotebookComputePoolGpu = new DataSnowflakeAccountsAccountsParametersDefaultNotebookComputePoolGpuList(this, "default_notebook_compute_pool_gpu", false);
  public get defaultNotebookComputePoolGpu() {
    return this._defaultNotebookComputePoolGpu;
  }

  // default_null_ordering - computed: true, optional: false, required: false
  private _defaultNullOrdering = new DataSnowflakeAccountsAccountsParametersDefaultNullOrderingList(this, "default_null_ordering", false);
  public get defaultNullOrdering() {
    return this._defaultNullOrdering;
  }

  // default_streamlit_compute_pool - computed: true, optional: false, required: false
  private _defaultStreamlitComputePool = new DataSnowflakeAccountsAccountsParametersDefaultStreamlitComputePoolList(this, "default_streamlit_compute_pool", false);
  public get defaultStreamlitComputePool() {
    return this._defaultStreamlitComputePool;
  }

  // default_streamlit_notebook_warehouse - computed: true, optional: false, required: false
  private _defaultStreamlitNotebookWarehouse = new DataSnowflakeAccountsAccountsParametersDefaultStreamlitNotebookWarehouseList(this, "default_streamlit_notebook_warehouse", false);
  public get defaultStreamlitNotebookWarehouse() {
    return this._defaultStreamlitNotebookWarehouse;
  }

  // disable_ui_download_button - computed: true, optional: false, required: false
  private _disableUiDownloadButton = new DataSnowflakeAccountsAccountsParametersDisableUiDownloadButtonList(this, "disable_ui_download_button", false);
  public get disableUiDownloadButton() {
    return this._disableUiDownloadButton;
  }

  // disable_user_privilege_grants - computed: true, optional: false, required: false
  private _disableUserPrivilegeGrants = new DataSnowflakeAccountsAccountsParametersDisableUserPrivilegeGrantsList(this, "disable_user_privilege_grants", false);
  public get disableUserPrivilegeGrants() {
    return this._disableUserPrivilegeGrants;
  }

  // disallowed_spcs_workload_types - computed: true, optional: false, required: false
  private _disallowedSpcsWorkloadTypes = new DataSnowflakeAccountsAccountsParametersDisallowedSpcsWorkloadTypesList(this, "disallowed_spcs_workload_types", false);
  public get disallowedSpcsWorkloadTypes() {
    return this._disallowedSpcsWorkloadTypes;
  }

  // enable_automatic_sensitive_data_classification_log - computed: true, optional: false, required: false
  private _enableAutomaticSensitiveDataClassificationLog = new DataSnowflakeAccountsAccountsParametersEnableAutomaticSensitiveDataClassificationLogList(this, "enable_automatic_sensitive_data_classification_log", false);
  public get enableAutomaticSensitiveDataClassificationLog() {
    return this._enableAutomaticSensitiveDataClassificationLog;
  }

  // enable_budget_event_logging - computed: true, optional: false, required: false
  private _enableBudgetEventLogging = new DataSnowflakeAccountsAccountsParametersEnableBudgetEventLoggingList(this, "enable_budget_event_logging", false);
  public get enableBudgetEventLogging() {
    return this._enableBudgetEventLogging;
  }

  // enable_console_output - computed: true, optional: false, required: false
  private _enableConsoleOutput = new DataSnowflakeAccountsAccountsParametersEnableConsoleOutputList(this, "enable_console_output", false);
  public get enableConsoleOutput() {
    return this._enableConsoleOutput;
  }

  // enable_cortex_analyst - computed: true, optional: false, required: false
  private _enableCortexAnalyst = new DataSnowflakeAccountsAccountsParametersEnableCortexAnalystList(this, "enable_cortex_analyst", false);
  public get enableCortexAnalyst() {
    return this._enableCortexAnalyst;
  }

  // enable_data_compaction - computed: true, optional: false, required: false
  private _enableDataCompaction = new DataSnowflakeAccountsAccountsParametersEnableDataCompactionList(this, "enable_data_compaction", false);
  public get enableDataCompaction() {
    return this._enableDataCompaction;
  }

  // enable_egress_cost_optimizer - computed: true, optional: false, required: false
  private _enableEgressCostOptimizer = new DataSnowflakeAccountsAccountsParametersEnableEgressCostOptimizerList(this, "enable_egress_cost_optimizer", false);
  public get enableEgressCostOptimizer() {
    return this._enableEgressCostOptimizer;
  }

  // enable_get_ddl_use_data_type_alias - computed: true, optional: false, required: false
  private _enableGetDdlUseDataTypeAlias = new DataSnowflakeAccountsAccountsParametersEnableGetDdlUseDataTypeAliasList(this, "enable_get_ddl_use_data_type_alias", false);
  public get enableGetDdlUseDataTypeAlias() {
    return this._enableGetDdlUseDataTypeAlias;
  }

  // enable_iceberg_merge_on_read - computed: true, optional: false, required: false
  private _enableIcebergMergeOnRead = new DataSnowflakeAccountsAccountsParametersEnableIcebergMergeOnReadList(this, "enable_iceberg_merge_on_read", false);
  public get enableIcebergMergeOnRead() {
    return this._enableIcebergMergeOnRead;
  }

  // enable_identifier_first_login - computed: true, optional: false, required: false
  private _enableIdentifierFirstLogin = new DataSnowflakeAccountsAccountsParametersEnableIdentifierFirstLoginList(this, "enable_identifier_first_login", false);
  public get enableIdentifierFirstLogin() {
    return this._enableIdentifierFirstLogin;
  }

  // enable_internal_stages_privatelink - computed: true, optional: false, required: false
  private _enableInternalStagesPrivatelink = new DataSnowflakeAccountsAccountsParametersEnableInternalStagesPrivatelinkList(this, "enable_internal_stages_privatelink", false);
  public get enableInternalStagesPrivatelink() {
    return this._enableInternalStagesPrivatelink;
  }

  // enable_notebook_creation_in_personal_db - computed: true, optional: false, required: false
  private _enableNotebookCreationInPersonalDb = new DataSnowflakeAccountsAccountsParametersEnableNotebookCreationInPersonalDbList(this, "enable_notebook_creation_in_personal_db", false);
  public get enableNotebookCreationInPersonalDb() {
    return this._enableNotebookCreationInPersonalDb;
  }

  // enable_per_account_app_service_privatelink_url - computed: true, optional: false, required: false
  private _enablePerAccountAppServicePrivatelinkUrl = new DataSnowflakeAccountsAccountsParametersEnablePerAccountAppServicePrivatelinkUrlList(this, "enable_per_account_app_service_privatelink_url", false);
  public get enablePerAccountAppServicePrivatelinkUrl() {
    return this._enablePerAccountAppServicePrivatelinkUrl;
  }

  // enable_personal_database - computed: true, optional: false, required: false
  private _enablePersonalDatabase = new DataSnowflakeAccountsAccountsParametersEnablePersonalDatabaseList(this, "enable_personal_database", false);
  public get enablePersonalDatabase() {
    return this._enablePersonalDatabase;
  }

  // enable_spcs_block_storage_snowflake_full_encryption_enforcement - computed: true, optional: false, required: false
  private _enableSpcsBlockStorageSnowflakeFullEncryptionEnforcement = new DataSnowflakeAccountsAccountsParametersEnableSpcsBlockStorageSnowflakeFullEncryptionEnforcementList(this, "enable_spcs_block_storage_snowflake_full_encryption_enforcement", false);
  public get enableSpcsBlockStorageSnowflakeFullEncryptionEnforcement() {
    return this._enableSpcsBlockStorageSnowflakeFullEncryptionEnforcement;
  }

  // enable_tag_propagation_event_logging - computed: true, optional: false, required: false
  private _enableTagPropagationEventLogging = new DataSnowflakeAccountsAccountsParametersEnableTagPropagationEventLoggingList(this, "enable_tag_propagation_event_logging", false);
  public get enableTagPropagationEventLogging() {
    return this._enableTagPropagationEventLogging;
  }

  // enable_tri_secret_and_rekey_opt_out_for_image_repository - computed: true, optional: false, required: false
  private _enableTriSecretAndRekeyOptOutForImageRepository = new DataSnowflakeAccountsAccountsParametersEnableTriSecretAndRekeyOptOutForImageRepositoryList(this, "enable_tri_secret_and_rekey_opt_out_for_image_repository", false);
  public get enableTriSecretAndRekeyOptOutForImageRepository() {
    return this._enableTriSecretAndRekeyOptOutForImageRepository;
  }

  // enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage - computed: true, optional: false, required: false
  private _enableTriSecretAndRekeyOptOutForSpcsBlockStorage = new DataSnowflakeAccountsAccountsParametersEnableTriSecretAndRekeyOptOutForSpcsBlockStorageList(this, "enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage", false);
  public get enableTriSecretAndRekeyOptOutForSpcsBlockStorage() {
    return this._enableTriSecretAndRekeyOptOutForSpcsBlockStorage;
  }

  // enable_unhandled_exceptions_reporting - computed: true, optional: false, required: false
  private _enableUnhandledExceptionsReporting = new DataSnowflakeAccountsAccountsParametersEnableUnhandledExceptionsReportingList(this, "enable_unhandled_exceptions_reporting", false);
  public get enableUnhandledExceptionsReporting() {
    return this._enableUnhandledExceptionsReporting;
  }

  // enable_unload_physical_type_optimization - computed: true, optional: false, required: false
  private _enableUnloadPhysicalTypeOptimization = new DataSnowflakeAccountsAccountsParametersEnableUnloadPhysicalTypeOptimizationList(this, "enable_unload_physical_type_optimization", false);
  public get enableUnloadPhysicalTypeOptimization() {
    return this._enableUnloadPhysicalTypeOptimization;
  }

  // enable_unredacted_query_syntax_error - computed: true, optional: false, required: false
  private _enableUnredactedQuerySyntaxError = new DataSnowflakeAccountsAccountsParametersEnableUnredactedQuerySyntaxErrorList(this, "enable_unredacted_query_syntax_error", false);
  public get enableUnredactedQuerySyntaxError() {
    return this._enableUnredactedQuerySyntaxError;
  }

  // enable_unredacted_secure_object_error - computed: true, optional: false, required: false
  private _enableUnredactedSecureObjectError = new DataSnowflakeAccountsAccountsParametersEnableUnredactedSecureObjectErrorList(this, "enable_unredacted_secure_object_error", false);
  public get enableUnredactedSecureObjectError() {
    return this._enableUnredactedSecureObjectError;
  }

  // enforce_network_rules_for_internal_stages - computed: true, optional: false, required: false
  private _enforceNetworkRulesForInternalStages = new DataSnowflakeAccountsAccountsParametersEnforceNetworkRulesForInternalStagesList(this, "enforce_network_rules_for_internal_stages", false);
  public get enforceNetworkRulesForInternalStages() {
    return this._enforceNetworkRulesForInternalStages;
  }

  // error_on_nondeterministic_merge - computed: true, optional: false, required: false
  private _errorOnNondeterministicMerge = new DataSnowflakeAccountsAccountsParametersErrorOnNondeterministicMergeList(this, "error_on_nondeterministic_merge", false);
  public get errorOnNondeterministicMerge() {
    return this._errorOnNondeterministicMerge;
  }

  // error_on_nondeterministic_update - computed: true, optional: false, required: false
  private _errorOnNondeterministicUpdate = new DataSnowflakeAccountsAccountsParametersErrorOnNondeterministicUpdateList(this, "error_on_nondeterministic_update", false);
  public get errorOnNondeterministicUpdate() {
    return this._errorOnNondeterministicUpdate;
  }

  // event_table - computed: true, optional: false, required: false
  private _eventTable = new DataSnowflakeAccountsAccountsParametersEventTableList(this, "event_table", false);
  public get eventTable() {
    return this._eventTable;
  }

  // external_oauth_add_privileged_roles_to_blocked_list - computed: true, optional: false, required: false
  private _externalOauthAddPrivilegedRolesToBlockedList = new DataSnowflakeAccountsAccountsParametersExternalOauthAddPrivilegedRolesToBlockedListStructList(this, "external_oauth_add_privileged_roles_to_blocked_list", false);
  public get externalOauthAddPrivilegedRolesToBlockedList() {
    return this._externalOauthAddPrivilegedRolesToBlockedList;
  }

  // external_volume - computed: true, optional: false, required: false
  private _externalVolume = new DataSnowflakeAccountsAccountsParametersExternalVolumeList(this, "external_volume", false);
  public get externalVolume() {
    return this._externalVolume;
  }

  // geography_output_format - computed: true, optional: false, required: false
  private _geographyOutputFormat = new DataSnowflakeAccountsAccountsParametersGeographyOutputFormatList(this, "geography_output_format", false);
  public get geographyOutputFormat() {
    return this._geographyOutputFormat;
  }

  // geometry_output_format - computed: true, optional: false, required: false
  private _geometryOutputFormat = new DataSnowflakeAccountsAccountsParametersGeometryOutputFormatList(this, "geometry_output_format", false);
  public get geometryOutputFormat() {
    return this._geometryOutputFormat;
  }

  // hybrid_table_lock_timeout - computed: true, optional: false, required: false
  private _hybridTableLockTimeout = new DataSnowflakeAccountsAccountsParametersHybridTableLockTimeoutList(this, "hybrid_table_lock_timeout", false);
  public get hybridTableLockTimeout() {
    return this._hybridTableLockTimeout;
  }

  // iceberg_version_default - computed: true, optional: false, required: false
  private _icebergVersionDefault = new DataSnowflakeAccountsAccountsParametersIcebergVersionDefaultList(this, "iceberg_version_default", false);
  public get icebergVersionDefault() {
    return this._icebergVersionDefault;
  }

  // initial_replication_size_limit_in_tb - computed: true, optional: false, required: false
  private _initialReplicationSizeLimitInTb = new DataSnowflakeAccountsAccountsParametersInitialReplicationSizeLimitInTbList(this, "initial_replication_size_limit_in_tb", false);
  public get initialReplicationSizeLimitInTb() {
    return this._initialReplicationSizeLimitInTb;
  }

  // jdbc_treat_decimal_as_int - computed: true, optional: false, required: false
  private _jdbcTreatDecimalAsInt = new DataSnowflakeAccountsAccountsParametersJdbcTreatDecimalAsIntList(this, "jdbc_treat_decimal_as_int", false);
  public get jdbcTreatDecimalAsInt() {
    return this._jdbcTreatDecimalAsInt;
  }

  // jdbc_treat_timestamp_ntz_as_utc - computed: true, optional: false, required: false
  private _jdbcTreatTimestampNtzAsUtc = new DataSnowflakeAccountsAccountsParametersJdbcTreatTimestampNtzAsUtcList(this, "jdbc_treat_timestamp_ntz_as_utc", false);
  public get jdbcTreatTimestampNtzAsUtc() {
    return this._jdbcTreatTimestampNtzAsUtc;
  }

  // jdbc_use_session_timezone - computed: true, optional: false, required: false
  private _jdbcUseSessionTimezone = new DataSnowflakeAccountsAccountsParametersJdbcUseSessionTimezoneList(this, "jdbc_use_session_timezone", false);
  public get jdbcUseSessionTimezone() {
    return this._jdbcUseSessionTimezone;
  }

  // js_treat_integer_as_bigint - computed: true, optional: false, required: false
  private _jsTreatIntegerAsBigint = new DataSnowflakeAccountsAccountsParametersJsTreatIntegerAsBigintList(this, "js_treat_integer_as_bigint", false);
  public get jsTreatIntegerAsBigint() {
    return this._jsTreatIntegerAsBigint;
  }

  // json_indent - computed: true, optional: false, required: false
  private _jsonIndent = new DataSnowflakeAccountsAccountsParametersJsonIndentList(this, "json_indent", false);
  public get jsonIndent() {
    return this._jsonIndent;
  }

  // listing_auto_fulfillment_replication_refresh_schedule - computed: true, optional: false, required: false
  private _listingAutoFulfillmentReplicationRefreshSchedule = new DataSnowflakeAccountsAccountsParametersListingAutoFulfillmentReplicationRefreshScheduleList(this, "listing_auto_fulfillment_replication_refresh_schedule", false);
  public get listingAutoFulfillmentReplicationRefreshSchedule() {
    return this._listingAutoFulfillmentReplicationRefreshSchedule;
  }

  // lock_timeout - computed: true, optional: false, required: false
  private _lockTimeout = new DataSnowflakeAccountsAccountsParametersLockTimeoutList(this, "lock_timeout", false);
  public get lockTimeout() {
    return this._lockTimeout;
  }

  // log_event_level - computed: true, optional: false, required: false
  private _logEventLevel = new DataSnowflakeAccountsAccountsParametersLogEventLevelList(this, "log_event_level", false);
  public get logEventLevel() {
    return this._logEventLevel;
  }

  // log_level - computed: true, optional: false, required: false
  private _logLevel = new DataSnowflakeAccountsAccountsParametersLogLevelList(this, "log_level", false);
  public get logLevel() {
    return this._logLevel;
  }

  // max_concurrency_level - computed: true, optional: false, required: false
  private _maxConcurrencyLevel = new DataSnowflakeAccountsAccountsParametersMaxConcurrencyLevelList(this, "max_concurrency_level", false);
  public get maxConcurrencyLevel() {
    return this._maxConcurrencyLevel;
  }

  // max_data_extension_time_in_days - computed: true, optional: false, required: false
  private _maxDataExtensionTimeInDays = new DataSnowflakeAccountsAccountsParametersMaxDataExtensionTimeInDaysList(this, "max_data_extension_time_in_days", false);
  public get maxDataExtensionTimeInDays() {
    return this._maxDataExtensionTimeInDays;
  }

  // metric_level - computed: true, optional: false, required: false
  private _metricLevel = new DataSnowflakeAccountsAccountsParametersMetricLevelList(this, "metric_level", false);
  public get metricLevel() {
    return this._metricLevel;
  }

  // min_data_retention_time_in_days - computed: true, optional: false, required: false
  private _minDataRetentionTimeInDays = new DataSnowflakeAccountsAccountsParametersMinDataRetentionTimeInDaysList(this, "min_data_retention_time_in_days", false);
  public get minDataRetentionTimeInDays() {
    return this._minDataRetentionTimeInDays;
  }

  // multi_statement_count - computed: true, optional: false, required: false
  private _multiStatementCount = new DataSnowflakeAccountsAccountsParametersMultiStatementCountList(this, "multi_statement_count", false);
  public get multiStatementCount() {
    return this._multiStatementCount;
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new DataSnowflakeAccountsAccountsParametersNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // noorder_sequence_as_default - computed: true, optional: false, required: false
  private _noorderSequenceAsDefault = new DataSnowflakeAccountsAccountsParametersNoorderSequenceAsDefaultList(this, "noorder_sequence_as_default", false);
  public get noorderSequenceAsDefault() {
    return this._noorderSequenceAsDefault;
  }

  // oauth_add_privileged_roles_to_blocked_list - computed: true, optional: false, required: false
  private _oauthAddPrivilegedRolesToBlockedList = new DataSnowflakeAccountsAccountsParametersOauthAddPrivilegedRolesToBlockedListStructList(this, "oauth_add_privileged_roles_to_blocked_list", false);
  public get oauthAddPrivilegedRolesToBlockedList() {
    return this._oauthAddPrivilegedRolesToBlockedList;
  }

  // odbc_treat_decimal_as_int - computed: true, optional: false, required: false
  private _odbcTreatDecimalAsInt = new DataSnowflakeAccountsAccountsParametersOdbcTreatDecimalAsIntList(this, "odbc_treat_decimal_as_int", false);
  public get odbcTreatDecimalAsInt() {
    return this._odbcTreatDecimalAsInt;
  }

  // periodic_data_rekeying - computed: true, optional: false, required: false
  private _periodicDataRekeying = new DataSnowflakeAccountsAccountsParametersPeriodicDataRekeyingList(this, "periodic_data_rekeying", false);
  public get periodicDataRekeying() {
    return this._periodicDataRekeying;
  }

  // pipe_execution_paused - computed: true, optional: false, required: false
  private _pipeExecutionPaused = new DataSnowflakeAccountsAccountsParametersPipeExecutionPausedList(this, "pipe_execution_paused", false);
  public get pipeExecutionPaused() {
    return this._pipeExecutionPaused;
  }

  // prevent_load_from_inline_url - computed: true, optional: false, required: false
  private _preventLoadFromInlineUrl = new DataSnowflakeAccountsAccountsParametersPreventLoadFromInlineUrlList(this, "prevent_load_from_inline_url", false);
  public get preventLoadFromInlineUrl() {
    return this._preventLoadFromInlineUrl;
  }

  // prevent_unload_to_inline_url - computed: true, optional: false, required: false
  private _preventUnloadToInlineUrl = new DataSnowflakeAccountsAccountsParametersPreventUnloadToInlineUrlList(this, "prevent_unload_to_inline_url", false);
  public get preventUnloadToInlineUrl() {
    return this._preventUnloadToInlineUrl;
  }

  // prevent_unload_to_internal_stages - computed: true, optional: false, required: false
  private _preventUnloadToInternalStages = new DataSnowflakeAccountsAccountsParametersPreventUnloadToInternalStagesList(this, "prevent_unload_to_internal_stages", false);
  public get preventUnloadToInternalStages() {
    return this._preventUnloadToInternalStages;
  }

  // python_profiler_modules - computed: true, optional: false, required: false
  private _pythonProfilerModules = new DataSnowflakeAccountsAccountsParametersPythonProfilerModulesList(this, "python_profiler_modules", false);
  public get pythonProfilerModules() {
    return this._pythonProfilerModules;
  }

  // python_profiler_target_stage - computed: true, optional: false, required: false
  private _pythonProfilerTargetStage = new DataSnowflakeAccountsAccountsParametersPythonProfilerTargetStageList(this, "python_profiler_target_stage", false);
  public get pythonProfilerTargetStage() {
    return this._pythonProfilerTargetStage;
  }

  // query_tag - computed: true, optional: false, required: false
  private _queryTag = new DataSnowflakeAccountsAccountsParametersQueryTagList(this, "query_tag", false);
  public get queryTag() {
    return this._queryTag;
  }

  // quoted_identifiers_ignore_case - computed: true, optional: false, required: false
  private _quotedIdentifiersIgnoreCase = new DataSnowflakeAccountsAccountsParametersQuotedIdentifiersIgnoreCaseList(this, "quoted_identifiers_ignore_case", false);
  public get quotedIdentifiersIgnoreCase() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // read_consistency_mode - computed: true, optional: false, required: false
  private _readConsistencyMode = new DataSnowflakeAccountsAccountsParametersReadConsistencyModeList(this, "read_consistency_mode", false);
  public get readConsistencyMode() {
    return this._readConsistencyMode;
  }

  // replace_invalid_characters - computed: true, optional: false, required: false
  private _replaceInvalidCharacters = new DataSnowflakeAccountsAccountsParametersReplaceInvalidCharactersList(this, "replace_invalid_characters", false);
  public get replaceInvalidCharacters() {
    return this._replaceInvalidCharacters;
  }

  // require_storage_integration_for_stage_creation - computed: true, optional: false, required: false
  private _requireStorageIntegrationForStageCreation = new DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageCreationList(this, "require_storage_integration_for_stage_creation", false);
  public get requireStorageIntegrationForStageCreation() {
    return this._requireStorageIntegrationForStageCreation;
  }

  // require_storage_integration_for_stage_operation - computed: true, optional: false, required: false
  private _requireStorageIntegrationForStageOperation = new DataSnowflakeAccountsAccountsParametersRequireStorageIntegrationForStageOperationList(this, "require_storage_integration_for_stage_operation", false);
  public get requireStorageIntegrationForStageOperation() {
    return this._requireStorageIntegrationForStageOperation;
  }

  // row_timestamp_default - computed: true, optional: false, required: false
  private _rowTimestampDefault = new DataSnowflakeAccountsAccountsParametersRowTimestampDefaultList(this, "row_timestamp_default", false);
  public get rowTimestampDefault() {
    return this._rowTimestampDefault;
  }

  // rows_per_resultset - computed: true, optional: false, required: false
  private _rowsPerResultset = new DataSnowflakeAccountsAccountsParametersRowsPerResultsetList(this, "rows_per_resultset", false);
  public get rowsPerResultset() {
    return this._rowsPerResultset;
  }

  // s3_stage_vpce_dns_name - computed: true, optional: false, required: false
  private _s3StageVpceDnsName = new DataSnowflakeAccountsAccountsParametersS3StageVpceDnsNameList(this, "s3_stage_vpce_dns_name", false);
  public get s3StageVpceDnsName() {
    return this._s3StageVpceDnsName;
  }

  // search_path - computed: true, optional: false, required: false
  private _searchPath = new DataSnowflakeAccountsAccountsParametersSearchPathList(this, "search_path", false);
  public get searchPath() {
    return this._searchPath;
  }

  // serverless_task_max_statement_size - computed: true, optional: false, required: false
  private _serverlessTaskMaxStatementSize = new DataSnowflakeAccountsAccountsParametersServerlessTaskMaxStatementSizeList(this, "serverless_task_max_statement_size", false);
  public get serverlessTaskMaxStatementSize() {
    return this._serverlessTaskMaxStatementSize;
  }

  // serverless_task_min_statement_size - computed: true, optional: false, required: false
  private _serverlessTaskMinStatementSize = new DataSnowflakeAccountsAccountsParametersServerlessTaskMinStatementSizeList(this, "serverless_task_min_statement_size", false);
  public get serverlessTaskMinStatementSize() {
    return this._serverlessTaskMinStatementSize;
  }

  // share_restrictions - computed: true, optional: false, required: false
  private _shareRestrictions = new DataSnowflakeAccountsAccountsParametersShareRestrictionsList(this, "share_restrictions", false);
  public get shareRestrictions() {
    return this._shareRestrictions;
  }

  // simulated_data_sharing_consumer - computed: true, optional: false, required: false
  private _simulatedDataSharingConsumer = new DataSnowflakeAccountsAccountsParametersSimulatedDataSharingConsumerList(this, "simulated_data_sharing_consumer", false);
  public get simulatedDataSharingConsumer() {
    return this._simulatedDataSharingConsumer;
  }

  // sql_trace_query_text - computed: true, optional: false, required: false
  private _sqlTraceQueryText = new DataSnowflakeAccountsAccountsParametersSqlTraceQueryTextList(this, "sql_trace_query_text", false);
  public get sqlTraceQueryText() {
    return this._sqlTraceQueryText;
  }

  // sso_login_page - computed: true, optional: false, required: false
  private _ssoLoginPage = new DataSnowflakeAccountsAccountsParametersSsoLoginPageList(this, "sso_login_page", false);
  public get ssoLoginPage() {
    return this._ssoLoginPage;
  }

  // statement_queued_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementQueuedTimeoutInSeconds = new DataSnowflakeAccountsAccountsParametersStatementQueuedTimeoutInSecondsList(this, "statement_queued_timeout_in_seconds", false);
  public get statementQueuedTimeoutInSeconds() {
    return this._statementQueuedTimeoutInSeconds;
  }

  // statement_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementTimeoutInSeconds = new DataSnowflakeAccountsAccountsParametersStatementTimeoutInSecondsList(this, "statement_timeout_in_seconds", false);
  public get statementTimeoutInSeconds() {
    return this._statementTimeoutInSeconds;
  }

  // storage_serialization_policy - computed: true, optional: false, required: false
  private _storageSerializationPolicy = new DataSnowflakeAccountsAccountsParametersStorageSerializationPolicyList(this, "storage_serialization_policy", false);
  public get storageSerializationPolicy() {
    return this._storageSerializationPolicy;
  }

  // strict_json_output - computed: true, optional: false, required: false
  private _strictJsonOutput = new DataSnowflakeAccountsAccountsParametersStrictJsonOutputList(this, "strict_json_output", false);
  public get strictJsonOutput() {
    return this._strictJsonOutput;
  }

  // suspend_task_after_num_failures - computed: true, optional: false, required: false
  private _suspendTaskAfterNumFailures = new DataSnowflakeAccountsAccountsParametersSuspendTaskAfterNumFailuresList(this, "suspend_task_after_num_failures", false);
  public get suspendTaskAfterNumFailures() {
    return this._suspendTaskAfterNumFailures;
  }

  // task_auto_retry_attempts - computed: true, optional: false, required: false
  private _taskAutoRetryAttempts = new DataSnowflakeAccountsAccountsParametersTaskAutoRetryAttemptsList(this, "task_auto_retry_attempts", false);
  public get taskAutoRetryAttempts() {
    return this._taskAutoRetryAttempts;
  }

  // time_input_format - computed: true, optional: false, required: false
  private _timeInputFormat = new DataSnowflakeAccountsAccountsParametersTimeInputFormatList(this, "time_input_format", false);
  public get timeInputFormat() {
    return this._timeInputFormat;
  }

  // time_output_format - computed: true, optional: false, required: false
  private _timeOutputFormat = new DataSnowflakeAccountsAccountsParametersTimeOutputFormatList(this, "time_output_format", false);
  public get timeOutputFormat() {
    return this._timeOutputFormat;
  }

  // timestamp_day_is_always_24h - computed: true, optional: false, required: false
  private _timestampDayIsAlways24H = new DataSnowflakeAccountsAccountsParametersTimestampDayIsAlways24HList(this, "timestamp_day_is_always_24h", false);
  public get timestampDayIsAlways24H() {
    return this._timestampDayIsAlways24H;
  }

  // timestamp_input_format - computed: true, optional: false, required: false
  private _timestampInputFormat = new DataSnowflakeAccountsAccountsParametersTimestampInputFormatList(this, "timestamp_input_format", false);
  public get timestampInputFormat() {
    return this._timestampInputFormat;
  }

  // timestamp_ltz_output_format - computed: true, optional: false, required: false
  private _timestampLtzOutputFormat = new DataSnowflakeAccountsAccountsParametersTimestampLtzOutputFormatList(this, "timestamp_ltz_output_format", false);
  public get timestampLtzOutputFormat() {
    return this._timestampLtzOutputFormat;
  }

  // timestamp_ntz_output_format - computed: true, optional: false, required: false
  private _timestampNtzOutputFormat = new DataSnowflakeAccountsAccountsParametersTimestampNtzOutputFormatList(this, "timestamp_ntz_output_format", false);
  public get timestampNtzOutputFormat() {
    return this._timestampNtzOutputFormat;
  }

  // timestamp_output_format - computed: true, optional: false, required: false
  private _timestampOutputFormat = new DataSnowflakeAccountsAccountsParametersTimestampOutputFormatList(this, "timestamp_output_format", false);
  public get timestampOutputFormat() {
    return this._timestampOutputFormat;
  }

  // timestamp_type_mapping - computed: true, optional: false, required: false
  private _timestampTypeMapping = new DataSnowflakeAccountsAccountsParametersTimestampTypeMappingList(this, "timestamp_type_mapping", false);
  public get timestampTypeMapping() {
    return this._timestampTypeMapping;
  }

  // timestamp_tz_output_format - computed: true, optional: false, required: false
  private _timestampTzOutputFormat = new DataSnowflakeAccountsAccountsParametersTimestampTzOutputFormatList(this, "timestamp_tz_output_format", false);
  public get timestampTzOutputFormat() {
    return this._timestampTzOutputFormat;
  }

  // timezone - computed: true, optional: false, required: false
  private _timezone = new DataSnowflakeAccountsAccountsParametersTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }

  // trace_level - computed: true, optional: false, required: false
  private _traceLevel = new DataSnowflakeAccountsAccountsParametersTraceLevelList(this, "trace_level", false);
  public get traceLevel() {
    return this._traceLevel;
  }

  // transaction_abort_on_error - computed: true, optional: false, required: false
  private _transactionAbortOnError = new DataSnowflakeAccountsAccountsParametersTransactionAbortOnErrorList(this, "transaction_abort_on_error", false);
  public get transactionAbortOnError() {
    return this._transactionAbortOnError;
  }

  // transaction_default_isolation_level - computed: true, optional: false, required: false
  private _transactionDefaultIsolationLevel = new DataSnowflakeAccountsAccountsParametersTransactionDefaultIsolationLevelList(this, "transaction_default_isolation_level", false);
  public get transactionDefaultIsolationLevel() {
    return this._transactionDefaultIsolationLevel;
  }

  // two_digit_century_start - computed: true, optional: false, required: false
  private _twoDigitCenturyStart = new DataSnowflakeAccountsAccountsParametersTwoDigitCenturyStartList(this, "two_digit_century_start", false);
  public get twoDigitCenturyStart() {
    return this._twoDigitCenturyStart;
  }

  // unsupported_ddl_action - computed: true, optional: false, required: false
  private _unsupportedDdlAction = new DataSnowflakeAccountsAccountsParametersUnsupportedDdlActionList(this, "unsupported_ddl_action", false);
  public get unsupportedDdlAction() {
    return this._unsupportedDdlAction;
  }

  // use_cached_result - computed: true, optional: false, required: false
  private _useCachedResult = new DataSnowflakeAccountsAccountsParametersUseCachedResultList(this, "use_cached_result", false);
  public get useCachedResult() {
    return this._useCachedResult;
  }

  // use_workspaces_for_sql - computed: true, optional: false, required: false
  private _useWorkspacesForSql = new DataSnowflakeAccountsAccountsParametersUseWorkspacesForSqlList(this, "use_workspaces_for_sql", false);
  public get useWorkspacesForSql() {
    return this._useWorkspacesForSql;
  }

  // user_task_managed_initial_warehouse_size - computed: true, optional: false, required: false
  private _userTaskManagedInitialWarehouseSize = new DataSnowflakeAccountsAccountsParametersUserTaskManagedInitialWarehouseSizeList(this, "user_task_managed_initial_warehouse_size", false);
  public get userTaskManagedInitialWarehouseSize() {
    return this._userTaskManagedInitialWarehouseSize;
  }

  // user_task_minimum_trigger_interval_in_seconds - computed: true, optional: false, required: false
  private _userTaskMinimumTriggerIntervalInSeconds = new DataSnowflakeAccountsAccountsParametersUserTaskMinimumTriggerIntervalInSecondsList(this, "user_task_minimum_trigger_interval_in_seconds", false);
  public get userTaskMinimumTriggerIntervalInSeconds() {
    return this._userTaskMinimumTriggerIntervalInSeconds;
  }

  // user_task_timeout_ms - computed: true, optional: false, required: false
  private _userTaskTimeoutMs = new DataSnowflakeAccountsAccountsParametersUserTaskTimeoutMsList(this, "user_task_timeout_ms", false);
  public get userTaskTimeoutMs() {
    return this._userTaskTimeoutMs;
  }

  // week_of_year_policy - computed: true, optional: false, required: false
  private _weekOfYearPolicy = new DataSnowflakeAccountsAccountsParametersWeekOfYearPolicyList(this, "week_of_year_policy", false);
  public get weekOfYearPolicy() {
    return this._weekOfYearPolicy;
  }

  // week_start - computed: true, optional: false, required: false
  private _weekStart = new DataSnowflakeAccountsAccountsParametersWeekStartList(this, "week_start", false);
  public get weekStart() {
    return this._weekStart;
  }
}

export class DataSnowflakeAccountsAccountsParametersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsParametersOutputReference {
    return new DataSnowflakeAccountsAccountsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccountsShowOutput {
}

export function dataSnowflakeAccountsAccountsShowOutputToTerraform(struct?: DataSnowflakeAccountsAccountsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsShowOutputToHclTerraform(struct?: DataSnowflakeAccountsAccountsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsShowOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccountsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_locator - computed: true, optional: false, required: false
  public get accountLocator() {
    return this.getStringAttribute('account_locator');
  }

  // account_locator_url - computed: true, optional: false, required: false
  public get accountLocatorUrl() {
    return this.getStringAttribute('account_locator_url');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_old_url_last_used - computed: true, optional: false, required: false
  public get accountOldUrlLastUsed() {
    return this.getStringAttribute('account_old_url_last_used');
  }

  // account_old_url_saved_on - computed: true, optional: false, required: false
  public get accountOldUrlSavedOn() {
    return this.getStringAttribute('account_old_url_saved_on');
  }

  // account_url - computed: true, optional: false, required: false
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // consumption_billing_entity_name - computed: true, optional: false, required: false
  public get consumptionBillingEntityName() {
    return this.getStringAttribute('consumption_billing_entity_name');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dropped_on - computed: true, optional: false, required: false
  public get droppedOn() {
    return this.getStringAttribute('dropped_on');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // is_events_account - computed: true, optional: false, required: false
  public get isEventsAccount() {
    return this.getBooleanAttribute('is_events_account');
  }

  // is_org_admin - computed: true, optional: false, required: false
  public get isOrgAdmin() {
    return this.getBooleanAttribute('is_org_admin');
  }

  // is_organization_account - computed: true, optional: false, required: false
  public get isOrganizationAccount() {
    return this.getBooleanAttribute('is_organization_account');
  }

  // managed_accounts - computed: true, optional: false, required: false
  public get managedAccounts() {
    return this.getNumberAttribute('managed_accounts');
  }

  // marketplace_consumer_billing_entity_name - computed: true, optional: false, required: false
  public get marketplaceConsumerBillingEntityName() {
    return this.getStringAttribute('marketplace_consumer_billing_entity_name');
  }

  // marketplace_provider_billing_entity_name - computed: true, optional: false, required: false
  public get marketplaceProviderBillingEntityName() {
    return this.getStringAttribute('marketplace_provider_billing_entity_name');
  }

  // moved_on - computed: true, optional: false, required: false
  public get movedOn() {
    return this.getStringAttribute('moved_on');
  }

  // moved_to_organization - computed: true, optional: false, required: false
  public get movedToOrganization() {
    return this.getStringAttribute('moved_to_organization');
  }

  // old_account_url - computed: true, optional: false, required: false
  public get oldAccountUrl() {
    return this.getStringAttribute('old_account_url');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // organization_old_url - computed: true, optional: false, required: false
  public get organizationOldUrl() {
    return this.getStringAttribute('organization_old_url');
  }

  // organization_old_url_last_used - computed: true, optional: false, required: false
  public get organizationOldUrlLastUsed() {
    return this.getStringAttribute('organization_old_url_last_used');
  }

  // organization_old_url_saved_on - computed: true, optional: false, required: false
  public get organizationOldUrlSavedOn() {
    return this.getStringAttribute('organization_old_url_saved_on');
  }

  // organization_url_expiration_on - computed: true, optional: false, required: false
  public get organizationUrlExpirationOn() {
    return this.getStringAttribute('organization_url_expiration_on');
  }

  // region_group - computed: true, optional: false, required: false
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }

  // restored_on - computed: true, optional: false, required: false
  public get restoredOn() {
    return this.getStringAttribute('restored_on');
  }

  // scheduled_deletion_time - computed: true, optional: false, required: false
  public get scheduledDeletionTime() {
    return this.getStringAttribute('scheduled_deletion_time');
  }

  // snowflake_region - computed: true, optional: false, required: false
  public get snowflakeRegion() {
    return this.getStringAttribute('snowflake_region');
  }
}

export class DataSnowflakeAccountsAccountsShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsShowOutputOutputReference {
    return new DataSnowflakeAccountsAccountsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccounts {
}

export function dataSnowflakeAccountsAccountsToTerraform(struct?: DataSnowflakeAccountsAccounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsToHclTerraform(struct?: DataSnowflakeAccountsAccounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeAccountsAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataSnowflakeAccountsAccountsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeAccountsAccountsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeAccountsAccountsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataSnowflakeAccountsAccountsOutputReference {
    return new DataSnowflakeAccountsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
