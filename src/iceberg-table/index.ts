/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IcebergTableConfig extends cdktn.TerraformMetaArguments {
  /**
  * The path to a directory where Snowflake can write data and metadata files for the Iceberg table. Specify a relative path from the table's `EXTERNAL_VOLUME` location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#base_location IcebergTable#base_location}
  */
  readonly baseLocation?: string;
  /**
  * Specifies the identifier for the catalog integration to use for the Iceberg table. If not specified, the account-level default is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#catalog IcebergTable#catalog}
  */
  readonly catalog?: string;
  /**
  * Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#catalog_sync IcebergTable#catalog_sync}
  */
  readonly catalogSync?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table. Cannot be changed after creation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#change_tracking IcebergTable#change_tracking}
  */
  readonly changeTracking?: string;
  /**
  * A list of one or more table columns/expressions to be used as clustering key(s) for the table. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#cluster_by IcebergTable#cluster_by}
  */
  readonly clusterBy?: string[];
  /**
  * Specifies a comment for the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data. For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#data_retention_time_in_days IcebergTable#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * The database in which to create the Iceberg table. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#database IcebergTable#database}
  */
  readonly database: string;
  /**
  * Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable_data_compaction IcebergTable#enable_data_compaction}
  */
  readonly enableDataCompaction?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable_iceberg_merge_on_read IcebergTable#enable_iceberg_merge_on_read}
  */
  readonly enableIcebergMergeOnRead?: boolean | cdktn.IResolvable;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#error_logging IcebergTable#error_logging}
  */
  readonly errorLogging?: string;
  /**
  * Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. If not specified, the account-level default is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#external_volume IcebergTable#external_volume}
  */
  readonly externalVolume?: string;
  /**
  * Specifies the Iceberg table format version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#iceberg_version IcebergTable#iceberg_version}
  */
  readonly icebergVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#id IcebergTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#max_data_extension_time_in_days IcebergTable#max_data_extension_time_in_days}
  */
  readonly maxDataExtensionTimeInDays?: number;
  /**
  * Specifies the identifier for the Iceberg table; must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}
  */
  readonly name: string;
  /**
  * Specifies the storage layout for the Iceberg table's Parquet files. Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#path_layout IcebergTable#path_layout}
  */
  readonly pathLayout?: string;
  /**
  * The schema in which to create the Iceberg table. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#schema IcebergTable#schema}
  */
  readonly schema: string;
  /**
  * Specifies the storage serialization policy for the Iceberg table. Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#storage_serialization_policy IcebergTable#storage_serialization_policy}
  */
  readonly storageSerializationPolicy?: string;
  /**
  * Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#target_file_size IcebergTable#target_file_size}
  */
  readonly targetFileSize?: string;
  /**
  * aggregation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#aggregation_policy IcebergTable#aggregation_policy}
  */
  readonly aggregationPolicy?: IcebergTableAggregationPolicy;
  /**
  * check_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#check_constraint IcebergTable#check_constraint}
  */
  readonly checkConstraint?: IcebergTableCheckConstraint[] | cdktn.IResolvable;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}
  */
  readonly column: IcebergTableColumn[] | cdktn.IResolvable;
  /**
  * foreign_key_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#foreign_key_constraint IcebergTable#foreign_key_constraint}
  */
  readonly foreignKeyConstraint?: IcebergTableForeignKeyConstraint[] | cdktn.IResolvable;
  /**
  * partition_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#partition_by IcebergTable#partition_by}
  */
  readonly partitionBy?: IcebergTablePartitionBy[] | cdktn.IResolvable;
  /**
  * primary_key_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#primary_key_constraint IcebergTable#primary_key_constraint}
  */
  readonly primaryKeyConstraint?: IcebergTablePrimaryKeyConstraint;
  /**
  * row_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#row_access_policy IcebergTable#row_access_policy}
  */
  readonly rowAccessPolicy?: IcebergTableRowAccessPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#timeouts IcebergTable#timeouts}
  */
  readonly timeouts?: IcebergTableTimeouts;
  /**
  * unique_constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#unique_constraint IcebergTable#unique_constraint}
  */
  readonly uniqueConstraint?: IcebergTableUniqueConstraint[] | cdktn.IResolvable;
}
export interface IcebergTableDescribeOutput {
}

export function icebergTableDescribeOutputToTerraform(struct?: IcebergTableDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableDescribeOutputToHclTerraform(struct?: IcebergTableDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getStringAttribute('check');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // is_nullable - computed: true, optional: false, required: false
  public get isNullable() {
    return this.getBooleanAttribute('is_nullable');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_mapping - computed: true, optional: false, required: false
  public get nameMapping() {
    return this.getStringAttribute('name_mapping');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // privacy_domain - computed: true, optional: false, required: false
  public get privacyDomain() {
    return this.getStringAttribute('privacy_domain');
  }

  // source_iceberg_type - computed: true, optional: false, required: false
  public get sourceIcebergType() {
    return this.getStringAttribute('source_iceberg_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_key - computed: true, optional: false, required: false
  public get uniqueKey() {
    return this.getBooleanAttribute('unique_key');
  }

  // write_default - computed: true, optional: false, required: false
  public get writeDefault() {
    return this.getStringAttribute('write_default');
  }
}

export class IcebergTableDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableDescribeOutputOutputReference {
    return new IcebergTableDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersCatalog {
}

export function icebergTableParametersCatalogToTerraform(struct?: IcebergTableParametersCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersCatalogToHclTerraform(struct?: IcebergTableParametersCatalog): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersCatalogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersCatalog | undefined) {
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

export class IcebergTableParametersCatalogList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersCatalogOutputReference {
    return new IcebergTableParametersCatalogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersCatalogSync {
}

export function icebergTableParametersCatalogSyncToTerraform(struct?: IcebergTableParametersCatalogSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersCatalogSyncToHclTerraform(struct?: IcebergTableParametersCatalogSync): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersCatalogSyncOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersCatalogSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersCatalogSync | undefined) {
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

export class IcebergTableParametersCatalogSyncList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersCatalogSyncOutputReference {
    return new IcebergTableParametersCatalogSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersDataRetentionTimeInDays {
}

export function icebergTableParametersDataRetentionTimeInDaysToTerraform(struct?: IcebergTableParametersDataRetentionTimeInDays): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersDataRetentionTimeInDaysToHclTerraform(struct?: IcebergTableParametersDataRetentionTimeInDays): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersDataRetentionTimeInDaysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersDataRetentionTimeInDays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersDataRetentionTimeInDays | undefined) {
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

export class IcebergTableParametersDataRetentionTimeInDaysList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersDataRetentionTimeInDaysOutputReference {
    return new IcebergTableParametersDataRetentionTimeInDaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersEnableDataCompaction {
}

export function icebergTableParametersEnableDataCompactionToTerraform(struct?: IcebergTableParametersEnableDataCompaction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersEnableDataCompactionToHclTerraform(struct?: IcebergTableParametersEnableDataCompaction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersEnableDataCompactionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersEnableDataCompaction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersEnableDataCompaction | undefined) {
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

export class IcebergTableParametersEnableDataCompactionList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersEnableDataCompactionOutputReference {
    return new IcebergTableParametersEnableDataCompactionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersEnableIcebergMergeOnRead {
}

export function icebergTableParametersEnableIcebergMergeOnReadToTerraform(struct?: IcebergTableParametersEnableIcebergMergeOnRead): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersEnableIcebergMergeOnReadToHclTerraform(struct?: IcebergTableParametersEnableIcebergMergeOnRead): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersEnableIcebergMergeOnReadOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersEnableIcebergMergeOnRead | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersEnableIcebergMergeOnRead | undefined) {
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

export class IcebergTableParametersEnableIcebergMergeOnReadList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersEnableIcebergMergeOnReadOutputReference {
    return new IcebergTableParametersEnableIcebergMergeOnReadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersExternalVolume {
}

export function icebergTableParametersExternalVolumeToTerraform(struct?: IcebergTableParametersExternalVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersExternalVolumeToHclTerraform(struct?: IcebergTableParametersExternalVolume): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersExternalVolumeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersExternalVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersExternalVolume | undefined) {
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

export class IcebergTableParametersExternalVolumeList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersExternalVolumeOutputReference {
    return new IcebergTableParametersExternalVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersMaxDataExtensionTimeInDays {
}

export function icebergTableParametersMaxDataExtensionTimeInDaysToTerraform(struct?: IcebergTableParametersMaxDataExtensionTimeInDays): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersMaxDataExtensionTimeInDaysToHclTerraform(struct?: IcebergTableParametersMaxDataExtensionTimeInDays): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersMaxDataExtensionTimeInDays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersMaxDataExtensionTimeInDays | undefined) {
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

export class IcebergTableParametersMaxDataExtensionTimeInDaysList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference {
    return new IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersStorageSerializationPolicy {
}

export function icebergTableParametersStorageSerializationPolicyToTerraform(struct?: IcebergTableParametersStorageSerializationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersStorageSerializationPolicyToHclTerraform(struct?: IcebergTableParametersStorageSerializationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersStorageSerializationPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersStorageSerializationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersStorageSerializationPolicy | undefined) {
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

export class IcebergTableParametersStorageSerializationPolicyList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersStorageSerializationPolicyOutputReference {
    return new IcebergTableParametersStorageSerializationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParametersTargetFileSize {
}

export function icebergTableParametersTargetFileSizeToTerraform(struct?: IcebergTableParametersTargetFileSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersTargetFileSizeToHclTerraform(struct?: IcebergTableParametersTargetFileSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersTargetFileSizeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParametersTargetFileSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParametersTargetFileSize | undefined) {
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

export class IcebergTableParametersTargetFileSizeList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersTargetFileSizeOutputReference {
    return new IcebergTableParametersTargetFileSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableParameters {
}

export function icebergTableParametersToTerraform(struct?: IcebergTableParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableParametersToHclTerraform(struct?: IcebergTableParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  private _catalog = new IcebergTableParametersCatalogList(this, "catalog", false);
  public get catalog() {
    return this._catalog;
  }

  // catalog_sync - computed: true, optional: false, required: false
  private _catalogSync = new IcebergTableParametersCatalogSyncList(this, "catalog_sync", false);
  public get catalogSync() {
    return this._catalogSync;
  }

  // data_retention_time_in_days - computed: true, optional: false, required: false
  private _dataRetentionTimeInDays = new IcebergTableParametersDataRetentionTimeInDaysList(this, "data_retention_time_in_days", false);
  public get dataRetentionTimeInDays() {
    return this._dataRetentionTimeInDays;
  }

  // enable_data_compaction - computed: true, optional: false, required: false
  private _enableDataCompaction = new IcebergTableParametersEnableDataCompactionList(this, "enable_data_compaction", false);
  public get enableDataCompaction() {
    return this._enableDataCompaction;
  }

  // enable_iceberg_merge_on_read - computed: true, optional: false, required: false
  private _enableIcebergMergeOnRead = new IcebergTableParametersEnableIcebergMergeOnReadList(this, "enable_iceberg_merge_on_read", false);
  public get enableIcebergMergeOnRead() {
    return this._enableIcebergMergeOnRead;
  }

  // external_volume - computed: true, optional: false, required: false
  private _externalVolume = new IcebergTableParametersExternalVolumeList(this, "external_volume", false);
  public get externalVolume() {
    return this._externalVolume;
  }

  // max_data_extension_time_in_days - computed: true, optional: false, required: false
  private _maxDataExtensionTimeInDays = new IcebergTableParametersMaxDataExtensionTimeInDaysList(this, "max_data_extension_time_in_days", false);
  public get maxDataExtensionTimeInDays() {
    return this._maxDataExtensionTimeInDays;
  }

  // storage_serialization_policy - computed: true, optional: false, required: false
  private _storageSerializationPolicy = new IcebergTableParametersStorageSerializationPolicyList(this, "storage_serialization_policy", false);
  public get storageSerializationPolicy() {
    return this._storageSerializationPolicy;
  }

  // target_file_size - computed: true, optional: false, required: false
  private _targetFileSize = new IcebergTableParametersTargetFileSizeList(this, "target_file_size", false);
  public get targetFileSize() {
    return this._targetFileSize;
  }
}

export class IcebergTableParametersList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableParametersOutputReference {
    return new IcebergTableParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableShowOutputAutoRefreshStatus {
}

export function icebergTableShowOutputAutoRefreshStatusToTerraform(struct?: IcebergTableShowOutputAutoRefreshStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableShowOutputAutoRefreshStatusToHclTerraform(struct?: IcebergTableShowOutputAutoRefreshStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableShowOutputAutoRefreshStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableShowOutputAutoRefreshStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableShowOutputAutoRefreshStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_snapshot_id - computed: true, optional: false, required: false
  public get currentSnapshotId() {
    return this.getNumberAttribute('current_snapshot_id');
  }

  // execution_state - computed: true, optional: false, required: false
  public get executionState() {
    return this.getStringAttribute('execution_state');
  }

  // last_snapshot_time - computed: true, optional: false, required: false
  public get lastSnapshotTime() {
    return this.getStringAttribute('last_snapshot_time');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // pending_snapshot_count - computed: true, optional: false, required: false
  public get pendingSnapshotCount() {
    return this.getNumberAttribute('pending_snapshot_count');
  }
}

export class IcebergTableShowOutputAutoRefreshStatusList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableShowOutputAutoRefreshStatusOutputReference {
    return new IcebergTableShowOutputAutoRefreshStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableShowOutputPartitionSpecsFields {
}

export function icebergTableShowOutputPartitionSpecsFieldsToTerraform(struct?: IcebergTableShowOutputPartitionSpecsFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableShowOutputPartitionSpecsFieldsToHclTerraform(struct?: IcebergTableShowOutputPartitionSpecsFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableShowOutputPartitionSpecsFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableShowOutputPartitionSpecsFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableShowOutputPartitionSpecsFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getNumberAttribute('field_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // transform - computed: true, optional: false, required: false
  public get transform() {
    return this.getStringAttribute('transform');
  }
}

export class IcebergTableShowOutputPartitionSpecsFieldsList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableShowOutputPartitionSpecsFieldsOutputReference {
    return new IcebergTableShowOutputPartitionSpecsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableShowOutputPartitionSpecs {
}

export function icebergTableShowOutputPartitionSpecsToTerraform(struct?: IcebergTableShowOutputPartitionSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableShowOutputPartitionSpecsToHclTerraform(struct?: IcebergTableShowOutputPartitionSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableShowOutputPartitionSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableShowOutputPartitionSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableShowOutputPartitionSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new IcebergTableShowOutputPartitionSpecsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // spec_id - computed: true, optional: false, required: false
  public get specId() {
    return this.getNumberAttribute('spec_id');
  }
}

export class IcebergTableShowOutputPartitionSpecsList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableShowOutputPartitionSpecsOutputReference {
    return new IcebergTableShowOutputPartitionSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableShowOutput {
}

export function icebergTableShowOutputToTerraform(struct?: IcebergTableShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function icebergTableShowOutputToHclTerraform(struct?: IcebergTableShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IcebergTableShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IcebergTableShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_refresh_status - computed: true, optional: false, required: false
  private _autoRefreshStatus = new IcebergTableShowOutputAutoRefreshStatusList(this, "auto_refresh_status", false);
  public get autoRefreshStatus() {
    return this._autoRefreshStatus;
  }

  // base_location - computed: true, optional: false, required: false
  public get baseLocation() {
    return this.getStringAttribute('base_location');
  }

  // can_write_metadata - computed: true, optional: false, required: false
  public get canWriteMetadata() {
    return this.getBooleanAttribute('can_write_metadata');
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // catalog_namespace - computed: true, optional: false, required: false
  public get catalogNamespace() {
    return this.getStringAttribute('catalog_namespace');
  }

  // catalog_sync_name - computed: true, optional: false, required: false
  public get catalogSyncName() {
    return this.getStringAttribute('catalog_sync_name');
  }

  // catalog_table_name - computed: true, optional: false, required: false
  public get catalogTableName() {
    return this.getStringAttribute('catalog_table_name');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // current_partition_spec_id - computed: true, optional: false, required: false
  public get currentPartitionSpecId() {
    return this.getNumberAttribute('current_partition_spec_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // external_volume_name - computed: true, optional: false, required: false
  public get externalVolumeName() {
    return this.getStringAttribute('external_volume_name');
  }

  // iceberg_table_format_version - computed: true, optional: false, required: false
  public get icebergTableFormatVersion() {
    return this.getNumberAttribute('iceberg_table_format_version');
  }

  // iceberg_table_type - computed: true, optional: false, required: false
  public get icebergTableType() {
    return this.getStringAttribute('iceberg_table_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_mapping - computed: true, optional: false, required: false
  public get nameMapping() {
    return this.getStringAttribute('name_mapping');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // partition_specs - computed: true, optional: false, required: false
  private _partitionSpecs = new IcebergTableShowOutputPartitionSpecsList(this, "partition_specs", false);
  public get partitionSpecs() {
    return this._partitionSpecs;
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class IcebergTableShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): IcebergTableShowOutputOutputReference {
    return new IcebergTableShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableAggregationPolicy {
  /**
  * Defines which columns uniquely identify an entity within the Iceberg table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#entity_key IcebergTable#entity_key}
  */
  readonly entityKey?: string[];
  /**
  * Aggregation policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}
  */
  readonly policyName: string;
}

export function icebergTableAggregationPolicyToTerraform(struct?: IcebergTableAggregationPolicyOutputReference | IcebergTableAggregationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_key: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entityKey),
    policy_name: cdktn.stringToTerraform(struct!.policyName),
  }
}


export function icebergTableAggregationPolicyToHclTerraform(struct?: IcebergTableAggregationPolicyOutputReference | IcebergTableAggregationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_key: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entityKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_name: {
      value: cdktn.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableAggregationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTableAggregationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableAggregationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityKey = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityKey = value.entityKey;
      this._policyName = value.policyName;
    }
  }

  // entity_key - computed: false, optional: true, required: false
  private _entityKey?: string[]; 
  public get entityKey() {
    return cdktn.Fn.tolist(this.getListAttribute('entity_key'));
  }
  public set entityKey(value: string[]) {
    this._entityKey = value;
  }
  public resetEntityKey() {
    this._entityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityKeyInput() {
    return this._entityKey;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface IcebergTableCheckConstraint {
  /**
  * The CHECK constraint expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#expression IcebergTable#expression}
  */
  readonly expression: string;
  /**
  * Name of the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}
  */
  readonly name?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether existing data is validated against the constraint (`true`, `ENABLE VALIDATE`) or not (`false`, `ENABLE NOVALIDATE`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}
  */
  readonly validate?: string;
}

export function icebergTableCheckConstraintToTerraform(struct?: IcebergTableCheckConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
    name: cdktn.stringToTerraform(struct!.name),
    validate: cdktn.stringToTerraform(struct!.validate),
  }
}


export function icebergTableCheckConstraintToHclTerraform(struct?: IcebergTableCheckConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate: {
      value: cdktn.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableCheckConstraintOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IcebergTableCheckConstraint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableCheckConstraint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._name = undefined;
      this._validate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._name = value.name;
      this._validate = value.validate;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}

export class IcebergTableCheckConstraintList extends cdktn.ComplexList {
  public internalValue? : IcebergTableCheckConstraint[] | cdktn.IResolvable

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
  public get(index: number): IcebergTableCheckConstraintOutputReference {
    return new IcebergTableCheckConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableColumnDefault {
  /**
  * The default expression value for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#expression IcebergTable#expression}
  */
  readonly expression: string;
}

export function icebergTableColumnDefaultToTerraform(struct?: IcebergTableColumnDefaultOutputReference | IcebergTableColumnDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function icebergTableColumnDefaultToHclTerraform(struct?: IcebergTableColumnDefaultOutputReference | IcebergTableColumnDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableColumnDefaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTableColumnDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableColumnDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface IcebergTableColumnMaskingPolicy {
  /**
  * Masking policy name. For more information about this resource, see [docs](./masking_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}
  */
  readonly policyName: string;
  /**
  * Specifies the arguments to pass into the conditional masking policy SQL expression, in order. The first column in the list specifies the column for the policy conditions to mask or tokenize the data and must match the column to which the masking policy is set. The additional columns specify the columns to evaluate to determine whether to mask or tokenize the data in each row of the query result when a query is made on the first column. If the USING clause is omitted, Snowflake treats the conditional masking policy as a normal masking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#using IcebergTable#using}
  */
  readonly using?: string[];
}

export function icebergTableColumnMaskingPolicyToTerraform(struct?: IcebergTableColumnMaskingPolicyOutputReference | IcebergTableColumnMaskingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_name: cdktn.stringToTerraform(struct!.policyName),
    using: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.using),
  }
}


export function icebergTableColumnMaskingPolicyToHclTerraform(struct?: IcebergTableColumnMaskingPolicyOutputReference | IcebergTableColumnMaskingPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_name: {
      value: cdktn.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.using),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableColumnMaskingPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTableColumnMaskingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._using !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableColumnMaskingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
      this._using = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
      this._using = value.using;
    }
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // using - computed: false, optional: true, required: false
  private _using?: string[]; 
  public get using() {
    return this.getListAttribute('using');
  }
  public set using(value: string[]) {
    this._using = value;
  }
  public resetUsing() {
    this._using = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using;
  }
}
export interface IcebergTableColumnProjectionPolicy {
  /**
  * Projection policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}
  */
  readonly policyName: string;
}

export function icebergTableColumnProjectionPolicyToTerraform(struct?: IcebergTableColumnProjectionPolicyOutputReference | IcebergTableColumnProjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    policy_name: cdktn.stringToTerraform(struct!.policyName),
  }
}


export function icebergTableColumnProjectionPolicyToHclTerraform(struct?: IcebergTableColumnProjectionPolicyOutputReference | IcebergTableColumnProjectionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    policy_name: {
      value: cdktn.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableColumnProjectionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTableColumnProjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableColumnProjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
    }
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface IcebergTableColumn {
  /**
  * Column comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}
  */
  readonly comment?: string;
  /**
  * Column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}
  */
  readonly name: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to restrict the column to NOT NULL values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#not_null IcebergTable#not_null}
  */
  readonly notNull?: string;
  /**
  * Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#type IcebergTable#type}
  */
  readonly type: string;
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#default IcebergTable#default}
  */
  readonly default?: IcebergTableColumnDefault;
  /**
  * masking_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#masking_policy IcebergTable#masking_policy}
  */
  readonly maskingPolicy?: IcebergTableColumnMaskingPolicy;
  /**
  * projection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#projection_policy IcebergTable#projection_policy}
  */
  readonly projectionPolicy?: IcebergTableColumnProjectionPolicy;
}

export function icebergTableColumnToTerraform(struct?: IcebergTableColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    name: cdktn.stringToTerraform(struct!.name),
    not_null: cdktn.stringToTerraform(struct!.notNull),
    type: cdktn.stringToTerraform(struct!.type),
    default: icebergTableColumnDefaultToTerraform(struct!.default),
    masking_policy: icebergTableColumnMaskingPolicyToTerraform(struct!.maskingPolicy),
    projection_policy: icebergTableColumnProjectionPolicyToTerraform(struct!.projectionPolicy),
  }
}


export function icebergTableColumnToHclTerraform(struct?: IcebergTableColumn | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_null: {
      value: cdktn.stringToHclTerraform(struct!.notNull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: icebergTableColumnDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergTableColumnDefaultList",
    },
    masking_policy: {
      value: icebergTableColumnMaskingPolicyToHclTerraform(struct!.maskingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergTableColumnMaskingPolicyList",
    },
    projection_policy: {
      value: icebergTableColumnProjectionPolicyToHclTerraform(struct!.projectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergTableColumnProjectionPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableColumnOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IcebergTableColumn | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.notNull = this._notNull;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._maskingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingPolicy = this._maskingPolicy?.internalValue;
    }
    if (this._projectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionPolicy = this._projectionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableColumn | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._notNull = undefined;
      this._type = undefined;
      this._default.internalValue = undefined;
      this._maskingPolicy.internalValue = undefined;
      this._projectionPolicy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._notNull = value.notNull;
      this._type = value.type;
      this._default.internalValue = value.default;
      this._maskingPolicy.internalValue = value.maskingPolicy;
      this._projectionPolicy.internalValue = value.projectionPolicy;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // not_null - computed: false, optional: true, required: false
  private _notNull?: string; 
  public get notNull() {
    return this.getStringAttribute('not_null');
  }
  public set notNull(value: string) {
    this._notNull = value;
  }
  public resetNotNull() {
    this._notNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullInput() {
    return this._notNull;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // default - computed: false, optional: true, required: false
  private _default = new IcebergTableColumnDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: IcebergTableColumnDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // masking_policy - computed: false, optional: true, required: false
  private _maskingPolicy = new IcebergTableColumnMaskingPolicyOutputReference(this, "masking_policy");
  public get maskingPolicy() {
    return this._maskingPolicy;
  }
  public putMaskingPolicy(value: IcebergTableColumnMaskingPolicy) {
    this._maskingPolicy.internalValue = value;
  }
  public resetMaskingPolicy() {
    this._maskingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyInput() {
    return this._maskingPolicy.internalValue;
  }

  // projection_policy - computed: false, optional: true, required: false
  private _projectionPolicy = new IcebergTableColumnProjectionPolicyOutputReference(this, "projection_policy");
  public get projectionPolicy() {
    return this._projectionPolicy;
  }
  public putProjectionPolicy(value: IcebergTableColumnProjectionPolicy) {
    this._projectionPolicy.internalValue = value;
  }
  public resetProjectionPolicy() {
    this._projectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionPolicyInput() {
    return this._projectionPolicy.internalValue;
  }
}

export class IcebergTableColumnList extends cdktn.ComplexList {
  public internalValue? : IcebergTableColumn[] | cdktn.IResolvable

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
  public get(index: number): IcebergTableColumnOutputReference {
    return new IcebergTableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTableForeignKeyConstraint {
  /**
  * The local column(s) the foreign key is defined on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}
  */
  readonly column: string[];
  /**
  * Constraint comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}
  */
  readonly comment?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}
  */
  readonly deferrable?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable IcebergTable#enable}
  */
  readonly enable?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}
  */
  readonly enforced?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}
  */
  readonly initiallyDeferred?: string;
  /**
  * The match type for the foreign key. Valid values are: [FULL SIMPLE PARTIAL].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#match IcebergTable#match}
  */
  readonly match?: string;
  /**
  * Name of the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}
  */
  readonly name?: string;
  /**
  * Specifies the action to perform when the referenced primary/unique key is deleted. Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#on_delete IcebergTable#on_delete}
  */
  readonly onDelete?: string;
  /**
  * Specifies the action to perform when the referenced primary/unique key is updated. Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#on_update IcebergTable#on_update}
  */
  readonly onUpdate?: string;
  /**
  * The column(s) in the referenced table that the foreign key references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#ref_column IcebergTable#ref_column}
  */
  readonly refColumn?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#rely IcebergTable#rely}
  */
  readonly rely?: string;
  /**
  * The table that the foreign key references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#table_name IcebergTable#table_name}
  */
  readonly tableName: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}
  */
  readonly validate?: string;
}

export function icebergTableForeignKeyConstraintToTerraform(struct?: IcebergTableForeignKeyConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.column),
    comment: cdktn.stringToTerraform(struct!.comment),
    deferrable: cdktn.stringToTerraform(struct!.deferrable),
    enable: cdktn.stringToTerraform(struct!.enable),
    enforced: cdktn.stringToTerraform(struct!.enforced),
    initially_deferred: cdktn.stringToTerraform(struct!.initiallyDeferred),
    match: cdktn.stringToTerraform(struct!.match),
    name: cdktn.stringToTerraform(struct!.name),
    on_delete: cdktn.stringToTerraform(struct!.onDelete),
    on_update: cdktn.stringToTerraform(struct!.onUpdate),
    ref_column: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.refColumn),
    rely: cdktn.stringToTerraform(struct!.rely),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    validate: cdktn.stringToTerraform(struct!.validate),
  }
}


export function icebergTableForeignKeyConstraintToHclTerraform(struct?: IcebergTableForeignKeyConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.column),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deferrable: {
      value: cdktn.stringToHclTerraform(struct!.deferrable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktn.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced: {
      value: cdktn.stringToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initially_deferred: {
      value: cdktn.stringToHclTerraform(struct!.initiallyDeferred),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktn.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_delete: {
      value: cdktn.stringToHclTerraform(struct!.onDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_update: {
      value: cdktn.stringToHclTerraform(struct!.onUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_column: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.refColumn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rely: {
      value: cdktn.stringToHclTerraform(struct!.rely),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate: {
      value: cdktn.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableForeignKeyConstraintOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IcebergTableForeignKeyConstraint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._deferrable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deferrable = this._deferrable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._initiallyDeferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiallyDeferred = this._initiallyDeferred;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDelete = this._onDelete;
    }
    if (this._onUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUpdate = this._onUpdate;
    }
    if (this._refColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.refColumn = this._refColumn;
    }
    if (this._rely !== undefined) {
      hasAnyValues = true;
      internalValueResult.rely = this._rely;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableForeignKeyConstraint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._comment = undefined;
      this._deferrable = undefined;
      this._enable = undefined;
      this._enforced = undefined;
      this._initiallyDeferred = undefined;
      this._match = undefined;
      this._name = undefined;
      this._onDelete = undefined;
      this._onUpdate = undefined;
      this._refColumn = undefined;
      this._rely = undefined;
      this._tableName = undefined;
      this._validate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._comment = value.comment;
      this._deferrable = value.deferrable;
      this._enable = value.enable;
      this._enforced = value.enforced;
      this._initiallyDeferred = value.initiallyDeferred;
      this._match = value.match;
      this._name = value.name;
      this._onDelete = value.onDelete;
      this._onUpdate = value.onUpdate;
      this._refColumn = value.refColumn;
      this._rely = value.rely;
      this._tableName = value.tableName;
      this._validate = value.validate;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string[]; 
  public get column() {
    return this.getListAttribute('column');
  }
  public set column(value: string[]) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // deferrable - computed: false, optional: true, required: false
  private _deferrable?: string; 
  public get deferrable() {
    return this.getStringAttribute('deferrable');
  }
  public set deferrable(value: string) {
    this._deferrable = value;
  }
  public resetDeferrable() {
    this._deferrable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferrableInput() {
    return this._deferrable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enforced - computed: false, optional: true, required: false
  private _enforced?: string; 
  public get enforced() {
    return this.getStringAttribute('enforced');
  }
  public set enforced(value: string) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // initially_deferred - computed: false, optional: true, required: false
  private _initiallyDeferred?: string; 
  public get initiallyDeferred() {
    return this.getStringAttribute('initially_deferred');
  }
  public set initiallyDeferred(value: string) {
    this._initiallyDeferred = value;
  }
  public resetInitiallyDeferred() {
    this._initiallyDeferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiallyDeferredInput() {
    return this._initiallyDeferred;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_delete - computed: false, optional: true, required: false
  private _onDelete?: string; 
  public get onDelete() {
    return this.getStringAttribute('on_delete');
  }
  public set onDelete(value: string) {
    this._onDelete = value;
  }
  public resetOnDelete() {
    this._onDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDeleteInput() {
    return this._onDelete;
  }

  // on_update - computed: false, optional: true, required: false
  private _onUpdate?: string; 
  public get onUpdate() {
    return this.getStringAttribute('on_update');
  }
  public set onUpdate(value: string) {
    this._onUpdate = value;
  }
  public resetOnUpdate() {
    this._onUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpdateInput() {
    return this._onUpdate;
  }

  // ref_column - computed: false, optional: true, required: false
  private _refColumn?: string[]; 
  public get refColumn() {
    return this.getListAttribute('ref_column');
  }
  public set refColumn(value: string[]) {
    this._refColumn = value;
  }
  public resetRefColumn() {
    this._refColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refColumnInput() {
    return this._refColumn;
  }

  // rely - computed: false, optional: true, required: false
  private _rely?: string; 
  public get rely() {
    return this.getStringAttribute('rely');
  }
  public set rely(value: string) {
    this._rely = value;
  }
  public resetRely() {
    this._rely = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyInput() {
    return this._rely;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}

export class IcebergTableForeignKeyConstraintList extends cdktn.ComplexList {
  public internalValue? : IcebergTableForeignKeyConstraint[] | cdktn.IResolvable

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
  public get(index: number): IcebergTableForeignKeyConstraintOutputReference {
    return new IcebergTableForeignKeyConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTablePartitionByBucket {
  /**
  * Name of the column to bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}
  */
  readonly column: string;
  /**
  * Number of buckets to hash the column values into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#num_buckets IcebergTable#num_buckets}
  */
  readonly numBuckets: number;
}

export function icebergTablePartitionByBucketToTerraform(struct?: IcebergTablePartitionByBucketOutputReference | IcebergTablePartitionByBucket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    num_buckets: cdktn.numberToTerraform(struct!.numBuckets),
  }
}


export function icebergTablePartitionByBucketToHclTerraform(struct?: IcebergTablePartitionByBucketOutputReference | IcebergTablePartitionByBucket): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_buckets: {
      value: cdktn.numberToHclTerraform(struct!.numBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTablePartitionByBucketOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTablePartitionByBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._numBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBuckets = this._numBuckets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTablePartitionByBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._numBuckets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._numBuckets = value.numBuckets;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // num_buckets - computed: false, optional: false, required: true
  private _numBuckets?: number; 
  public get numBuckets() {
    return this.getNumberAttribute('num_buckets');
  }
  public set numBuckets(value: number) {
    this._numBuckets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numBucketsInput() {
    return this._numBuckets;
  }
}
export interface IcebergTablePartitionByTruncate {
  /**
  * Name of the column to truncate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}
  */
  readonly column: string;
  /**
  * Width to truncate the column value to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#width IcebergTable#width}
  */
  readonly width: number;
}

export function icebergTablePartitionByTruncateToTerraform(struct?: IcebergTablePartitionByTruncateOutputReference | IcebergTablePartitionByTruncate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    width: cdktn.numberToTerraform(struct!.width),
  }
}


export function icebergTablePartitionByTruncateToHclTerraform(struct?: IcebergTablePartitionByTruncateOutputReference | IcebergTablePartitionByTruncate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTablePartitionByTruncateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTablePartitionByTruncate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTablePartitionByTruncate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._width = value.width;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface IcebergTablePartitionBy {
  /**
  * Partitions the table by the day component of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#day IcebergTable#day}
  */
  readonly day?: string;
  /**
  * Partitions the table by the hour component of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#hour IcebergTable#hour}
  */
  readonly hour?: string;
  /**
  * Name of the column to use as-is for partitioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#identity IcebergTable#identity}
  */
  readonly identity?: string;
  /**
  * Partitions the table by the month component of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#month IcebergTable#month}
  */
  readonly month?: string;
  /**
  * Partitions the table by the year component of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#year IcebergTable#year}
  */
  readonly year?: string;
  /**
  * bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#bucket IcebergTable#bucket}
  */
  readonly bucket?: IcebergTablePartitionByBucket;
  /**
  * truncate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#truncate IcebergTable#truncate}
  */
  readonly truncate?: IcebergTablePartitionByTruncate;
}

export function icebergTablePartitionByToTerraform(struct?: IcebergTablePartitionBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day: cdktn.stringToTerraform(struct!.day),
    hour: cdktn.stringToTerraform(struct!.hour),
    identity: cdktn.stringToTerraform(struct!.identity),
    month: cdktn.stringToTerraform(struct!.month),
    year: cdktn.stringToTerraform(struct!.year),
    bucket: icebergTablePartitionByBucketToTerraform(struct!.bucket),
    truncate: icebergTablePartitionByTruncateToTerraform(struct!.truncate),
  }
}


export function icebergTablePartitionByToHclTerraform(struct?: IcebergTablePartitionBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day: {
      value: cdktn.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktn.stringToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktn.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    month: {
      value: cdktn.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    year: {
      value: cdktn.stringToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: icebergTablePartitionByBucketToHclTerraform(struct!.bucket),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergTablePartitionByBucketList",
    },
    truncate: {
      value: icebergTablePartitionByTruncateToHclTerraform(struct!.truncate),
      isBlock: true,
      type: "list",
      storageClassType: "IcebergTablePartitionByTruncateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTablePartitionByOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IcebergTablePartitionBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    if (this._bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket?.internalValue;
    }
    if (this._truncate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncate = this._truncate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTablePartitionBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
      this._identity = undefined;
      this._month = undefined;
      this._year = undefined;
      this._bucket.internalValue = undefined;
      this._truncate.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
      this._identity = value.identity;
      this._month = value.month;
      this._year = value.year;
      this._bucket.internalValue = value.bucket;
      this._truncate.internalValue = value.truncate;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // month - computed: false, optional: true, required: false
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: string; 
  public get year() {
    return this.getStringAttribute('year');
  }
  public set year(value: string) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket = new IcebergTablePartitionByBucketOutputReference(this, "bucket");
  public get bucket() {
    return this._bucket;
  }
  public putBucket(value: IcebergTablePartitionByBucket) {
    this._bucket.internalValue = value;
  }
  public resetBucket() {
    this._bucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket.internalValue;
  }

  // truncate - computed: false, optional: true, required: false
  private _truncate = new IcebergTablePartitionByTruncateOutputReference(this, "truncate");
  public get truncate() {
    return this._truncate;
  }
  public putTruncate(value: IcebergTablePartitionByTruncate) {
    this._truncate.internalValue = value;
  }
  public resetTruncate() {
    this._truncate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncateInput() {
    return this._truncate.internalValue;
  }
}

export class IcebergTablePartitionByList extends cdktn.ComplexList {
  public internalValue? : IcebergTablePartitionBy[] | cdktn.IResolvable

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
  public get(index: number): IcebergTablePartitionByOutputReference {
    return new IcebergTablePartitionByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcebergTablePrimaryKeyConstraint {
  /**
  * The column(s) the constraint applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}
  */
  readonly column: string[];
  /**
  * Constraint comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}
  */
  readonly comment?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}
  */
  readonly deferrable?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable IcebergTable#enable}
  */
  readonly enable?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}
  */
  readonly enforced?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}
  */
  readonly initiallyDeferred?: string;
  /**
  * Name of the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}
  */
  readonly name?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#rely IcebergTable#rely}
  */
  readonly rely?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}
  */
  readonly validate?: string;
}

export function icebergTablePrimaryKeyConstraintToTerraform(struct?: IcebergTablePrimaryKeyConstraintOutputReference | IcebergTablePrimaryKeyConstraint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.column),
    comment: cdktn.stringToTerraform(struct!.comment),
    deferrable: cdktn.stringToTerraform(struct!.deferrable),
    enable: cdktn.stringToTerraform(struct!.enable),
    enforced: cdktn.stringToTerraform(struct!.enforced),
    initially_deferred: cdktn.stringToTerraform(struct!.initiallyDeferred),
    name: cdktn.stringToTerraform(struct!.name),
    rely: cdktn.stringToTerraform(struct!.rely),
    validate: cdktn.stringToTerraform(struct!.validate),
  }
}


export function icebergTablePrimaryKeyConstraintToHclTerraform(struct?: IcebergTablePrimaryKeyConstraintOutputReference | IcebergTablePrimaryKeyConstraint): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.column),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deferrable: {
      value: cdktn.stringToHclTerraform(struct!.deferrable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktn.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced: {
      value: cdktn.stringToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initially_deferred: {
      value: cdktn.stringToHclTerraform(struct!.initiallyDeferred),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rely: {
      value: cdktn.stringToHclTerraform(struct!.rely),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate: {
      value: cdktn.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTablePrimaryKeyConstraintOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTablePrimaryKeyConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._deferrable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deferrable = this._deferrable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._initiallyDeferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiallyDeferred = this._initiallyDeferred;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rely !== undefined) {
      hasAnyValues = true;
      internalValueResult.rely = this._rely;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTablePrimaryKeyConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._comment = undefined;
      this._deferrable = undefined;
      this._enable = undefined;
      this._enforced = undefined;
      this._initiallyDeferred = undefined;
      this._name = undefined;
      this._rely = undefined;
      this._validate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._comment = value.comment;
      this._deferrable = value.deferrable;
      this._enable = value.enable;
      this._enforced = value.enforced;
      this._initiallyDeferred = value.initiallyDeferred;
      this._name = value.name;
      this._rely = value.rely;
      this._validate = value.validate;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string[]; 
  public get column() {
    return this.getListAttribute('column');
  }
  public set column(value: string[]) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // deferrable - computed: false, optional: true, required: false
  private _deferrable?: string; 
  public get deferrable() {
    return this.getStringAttribute('deferrable');
  }
  public set deferrable(value: string) {
    this._deferrable = value;
  }
  public resetDeferrable() {
    this._deferrable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferrableInput() {
    return this._deferrable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enforced - computed: false, optional: true, required: false
  private _enforced?: string; 
  public get enforced() {
    return this.getStringAttribute('enforced');
  }
  public set enforced(value: string) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // initially_deferred - computed: false, optional: true, required: false
  private _initiallyDeferred?: string; 
  public get initiallyDeferred() {
    return this.getStringAttribute('initially_deferred');
  }
  public set initiallyDeferred(value: string) {
    this._initiallyDeferred = value;
  }
  public resetInitiallyDeferred() {
    this._initiallyDeferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiallyDeferredInput() {
    return this._initiallyDeferred;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rely - computed: false, optional: true, required: false
  private _rely?: string; 
  public get rely() {
    return this.getStringAttribute('rely');
  }
  public set rely(value: string) {
    this._rely = value;
  }
  public resetRely() {
    this._rely = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyInput() {
    return this._rely;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}
export interface IcebergTableRowAccessPolicy {
  /**
  * Defines which columns are affected by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#on IcebergTable#on}
  */
  readonly on: string[];
  /**
  * Row access policy name. For more information about this resource, see [docs](./row_access_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}
  */
  readonly policyName: string;
}

export function icebergTableRowAccessPolicyToTerraform(struct?: IcebergTableRowAccessPolicyOutputReference | IcebergTableRowAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    on: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.on),
    policy_name: cdktn.stringToTerraform(struct!.policyName),
  }
}


export function icebergTableRowAccessPolicyToHclTerraform(struct?: IcebergTableRowAccessPolicyOutputReference | IcebergTableRowAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    on: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.on),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_name: {
      value: cdktn.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableRowAccessPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IcebergTableRowAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._on !== undefined) {
      hasAnyValues = true;
      internalValueResult.on = this._on;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableRowAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._on = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._on = value.on;
      this._policyName = value.policyName;
    }
  }

  // on - computed: false, optional: false, required: true
  private _on?: string[]; 
  public get on() {
    return cdktn.Fn.tolist(this.getListAttribute('on'));
  }
  public set on(value: string[]) {
    this._on = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface IcebergTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#create IcebergTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#delete IcebergTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#read IcebergTable#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#update IcebergTable#update}
  */
  readonly update?: string;
}

export function icebergTableTimeoutsToTerraform(struct?: IcebergTableTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function icebergTableTimeoutsToHclTerraform(struct?: IcebergTableTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IcebergTableTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface IcebergTableUniqueConstraint {
  /**
  * The column(s) the constraint applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#column IcebergTable#column}
  */
  readonly column: string[];
  /**
  * Constraint comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#comment IcebergTable#comment}
  */
  readonly comment?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}
  */
  readonly deferrable?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enable IcebergTable#enable}
  */
  readonly enable?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}
  */
  readonly enforced?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}
  */
  readonly initiallyDeferred?: string;
  /**
  * Name of the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#name IcebergTable#name}
  */
  readonly name?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#rely IcebergTable#rely}
  */
  readonly rely?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#validate IcebergTable#validate}
  */
  readonly validate?: string;
}

export function icebergTableUniqueConstraintToTerraform(struct?: IcebergTableUniqueConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.column),
    comment: cdktn.stringToTerraform(struct!.comment),
    deferrable: cdktn.stringToTerraform(struct!.deferrable),
    enable: cdktn.stringToTerraform(struct!.enable),
    enforced: cdktn.stringToTerraform(struct!.enforced),
    initially_deferred: cdktn.stringToTerraform(struct!.initiallyDeferred),
    name: cdktn.stringToTerraform(struct!.name),
    rely: cdktn.stringToTerraform(struct!.rely),
    validate: cdktn.stringToTerraform(struct!.validate),
  }
}


export function icebergTableUniqueConstraintToHclTerraform(struct?: IcebergTableUniqueConstraint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.column),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deferrable: {
      value: cdktn.stringToHclTerraform(struct!.deferrable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktn.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced: {
      value: cdktn.stringToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initially_deferred: {
      value: cdktn.stringToHclTerraform(struct!.initiallyDeferred),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rely: {
      value: cdktn.stringToHclTerraform(struct!.rely),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate: {
      value: cdktn.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcebergTableUniqueConstraintOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IcebergTableUniqueConstraint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._deferrable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deferrable = this._deferrable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._initiallyDeferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiallyDeferred = this._initiallyDeferred;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rely !== undefined) {
      hasAnyValues = true;
      internalValueResult.rely = this._rely;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcebergTableUniqueConstraint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._comment = undefined;
      this._deferrable = undefined;
      this._enable = undefined;
      this._enforced = undefined;
      this._initiallyDeferred = undefined;
      this._name = undefined;
      this._rely = undefined;
      this._validate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._comment = value.comment;
      this._deferrable = value.deferrable;
      this._enable = value.enable;
      this._enforced = value.enforced;
      this._initiallyDeferred = value.initiallyDeferred;
      this._name = value.name;
      this._rely = value.rely;
      this._validate = value.validate;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string[]; 
  public get column() {
    return this.getListAttribute('column');
  }
  public set column(value: string[]) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // deferrable - computed: false, optional: true, required: false
  private _deferrable?: string; 
  public get deferrable() {
    return this.getStringAttribute('deferrable');
  }
  public set deferrable(value: string) {
    this._deferrable = value;
  }
  public resetDeferrable() {
    this._deferrable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferrableInput() {
    return this._deferrable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enforced - computed: false, optional: true, required: false
  private _enforced?: string; 
  public get enforced() {
    return this.getStringAttribute('enforced');
  }
  public set enforced(value: string) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // initially_deferred - computed: false, optional: true, required: false
  private _initiallyDeferred?: string; 
  public get initiallyDeferred() {
    return this.getStringAttribute('initially_deferred');
  }
  public set initiallyDeferred(value: string) {
    this._initiallyDeferred = value;
  }
  public resetInitiallyDeferred() {
    this._initiallyDeferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiallyDeferredInput() {
    return this._initiallyDeferred;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rely - computed: false, optional: true, required: false
  private _rely?: string; 
  public get rely() {
    return this.getStringAttribute('rely');
  }
  public set rely(value: string) {
    this._rely = value;
  }
  public resetRely() {
    this._rely = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyInput() {
    return this._rely;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}

export class IcebergTableUniqueConstraintList extends cdktn.ComplexList {
  public internalValue? : IcebergTableUniqueConstraint[] | cdktn.IResolvable

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
  public get(index: number): IcebergTableUniqueConstraintOutputReference {
    return new IcebergTableUniqueConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table snowflake_iceberg_table}
*/
export class IcebergTable extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_iceberg_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IcebergTable resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IcebergTable to import
  * @param importFromId The id of the existing IcebergTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IcebergTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_iceberg_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table snowflake_iceberg_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcebergTableConfig
  */
  public constructor(scope: Construct, id: string, config: IcebergTableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_iceberg_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.19.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseLocation = config.baseLocation;
    this._catalog = config.catalog;
    this._catalogSync = config.catalogSync;
    this._changeTracking = config.changeTracking;
    this._clusterBy = config.clusterBy;
    this._comment = config.comment;
    this._dataRetentionTimeInDays = config.dataRetentionTimeInDays;
    this._database = config.database;
    this._enableDataCompaction = config.enableDataCompaction;
    this._enableIcebergMergeOnRead = config.enableIcebergMergeOnRead;
    this._errorLogging = config.errorLogging;
    this._externalVolume = config.externalVolume;
    this._icebergVersion = config.icebergVersion;
    this._id = config.id;
    this._maxDataExtensionTimeInDays = config.maxDataExtensionTimeInDays;
    this._name = config.name;
    this._pathLayout = config.pathLayout;
    this._schema = config.schema;
    this._storageSerializationPolicy = config.storageSerializationPolicy;
    this._targetFileSize = config.targetFileSize;
    this._aggregationPolicy.internalValue = config.aggregationPolicy;
    this._checkConstraint.internalValue = config.checkConstraint;
    this._column.internalValue = config.column;
    this._foreignKeyConstraint.internalValue = config.foreignKeyConstraint;
    this._partitionBy.internalValue = config.partitionBy;
    this._primaryKeyConstraint.internalValue = config.primaryKeyConstraint;
    this._rowAccessPolicy.internalValue = config.rowAccessPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._uniqueConstraint.internalValue = config.uniqueConstraint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_location - computed: false, optional: true, required: false
  private _baseLocation?: string; 
  public get baseLocation() {
    return this.getStringAttribute('base_location');
  }
  public set baseLocation(value: string) {
    this._baseLocation = value;
  }
  public resetBaseLocation() {
    this._baseLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseLocationInput() {
    return this._baseLocation;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // catalog_sync - computed: true, optional: true, required: false
  private _catalogSync?: string; 
  public get catalogSync() {
    return this.getStringAttribute('catalog_sync');
  }
  public set catalogSync(value: string) {
    this._catalogSync = value;
  }
  public resetCatalogSync() {
    this._catalogSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogSyncInput() {
    return this._catalogSync;
  }

  // change_tracking - computed: false, optional: true, required: false
  private _changeTracking?: string; 
  public get changeTracking() {
    return this.getStringAttribute('change_tracking');
  }
  public set changeTracking(value: string) {
    this._changeTracking = value;
  }
  public resetChangeTracking() {
    this._changeTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTrackingInput() {
    return this._changeTracking;
  }

  // cluster_by - computed: false, optional: true, required: false
  private _clusterBy?: string[]; 
  public get clusterBy() {
    return this.getListAttribute('cluster_by');
  }
  public set clusterBy(value: string[]) {
    this._clusterBy = value;
  }
  public resetClusterBy() {
    this._clusterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterByInput() {
    return this._clusterBy;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // data_retention_time_in_days - computed: true, optional: true, required: false
  private _dataRetentionTimeInDays?: number; 
  public get dataRetentionTimeInDays() {
    return this.getNumberAttribute('data_retention_time_in_days');
  }
  public set dataRetentionTimeInDays(value: number) {
    this._dataRetentionTimeInDays = value;
  }
  public resetDataRetentionTimeInDays() {
    this._dataRetentionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionTimeInDaysInput() {
    return this._dataRetentionTimeInDays;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new IcebergTableDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // enable_data_compaction - computed: true, optional: true, required: false
  private _enableDataCompaction?: boolean | cdktn.IResolvable; 
  public get enableDataCompaction() {
    return this.getBooleanAttribute('enable_data_compaction');
  }
  public set enableDataCompaction(value: boolean | cdktn.IResolvable) {
    this._enableDataCompaction = value;
  }
  public resetEnableDataCompaction() {
    this._enableDataCompaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDataCompactionInput() {
    return this._enableDataCompaction;
  }

  // enable_iceberg_merge_on_read - computed: true, optional: true, required: false
  private _enableIcebergMergeOnRead?: boolean | cdktn.IResolvable; 
  public get enableIcebergMergeOnRead() {
    return this.getBooleanAttribute('enable_iceberg_merge_on_read');
  }
  public set enableIcebergMergeOnRead(value: boolean | cdktn.IResolvable) {
    this._enableIcebergMergeOnRead = value;
  }
  public resetEnableIcebergMergeOnRead() {
    this._enableIcebergMergeOnRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIcebergMergeOnReadInput() {
    return this._enableIcebergMergeOnRead;
  }

  // error_logging - computed: false, optional: true, required: false
  private _errorLogging?: string; 
  public get errorLogging() {
    return this.getStringAttribute('error_logging');
  }
  public set errorLogging(value: string) {
    this._errorLogging = value;
  }
  public resetErrorLogging() {
    this._errorLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLoggingInput() {
    return this._errorLogging;
  }

  // external_volume - computed: true, optional: true, required: false
  private _externalVolume?: string; 
  public get externalVolume() {
    return this.getStringAttribute('external_volume');
  }
  public set externalVolume(value: string) {
    this._externalVolume = value;
  }
  public resetExternalVolume() {
    this._externalVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVolumeInput() {
    return this._externalVolume;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // iceberg_version - computed: false, optional: true, required: false
  private _icebergVersion?: number; 
  public get icebergVersion() {
    return this.getNumberAttribute('iceberg_version');
  }
  public set icebergVersion(value: number) {
    this._icebergVersion = value;
  }
  public resetIcebergVersion() {
    this._icebergVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergVersionInput() {
    return this._icebergVersion;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_data_extension_time_in_days - computed: true, optional: true, required: false
  private _maxDataExtensionTimeInDays?: number; 
  public get maxDataExtensionTimeInDays() {
    return this.getNumberAttribute('max_data_extension_time_in_days');
  }
  public set maxDataExtensionTimeInDays(value: number) {
    this._maxDataExtensionTimeInDays = value;
  }
  public resetMaxDataExtensionTimeInDays() {
    this._maxDataExtensionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataExtensionTimeInDaysInput() {
    return this._maxDataExtensionTimeInDays;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new IcebergTableParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // path_layout - computed: false, optional: true, required: false
  private _pathLayout?: string; 
  public get pathLayout() {
    return this.getStringAttribute('path_layout');
  }
  public set pathLayout(value: string) {
    this._pathLayout = value;
  }
  public resetPathLayout() {
    this._pathLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathLayoutInput() {
    return this._pathLayout;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new IcebergTableShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // storage_serialization_policy - computed: true, optional: true, required: false
  private _storageSerializationPolicy?: string; 
  public get storageSerializationPolicy() {
    return this.getStringAttribute('storage_serialization_policy');
  }
  public set storageSerializationPolicy(value: string) {
    this._storageSerializationPolicy = value;
  }
  public resetStorageSerializationPolicy() {
    this._storageSerializationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSerializationPolicyInput() {
    return this._storageSerializationPolicy;
  }

  // target_file_size - computed: true, optional: true, required: false
  private _targetFileSize?: string; 
  public get targetFileSize() {
    return this.getStringAttribute('target_file_size');
  }
  public set targetFileSize(value: string) {
    this._targetFileSize = value;
  }
  public resetTargetFileSize() {
    this._targetFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFileSizeInput() {
    return this._targetFileSize;
  }

  // aggregation_policy - computed: false, optional: true, required: false
  private _aggregationPolicy = new IcebergTableAggregationPolicyOutputReference(this, "aggregation_policy");
  public get aggregationPolicy() {
    return this._aggregationPolicy;
  }
  public putAggregationPolicy(value: IcebergTableAggregationPolicy) {
    this._aggregationPolicy.internalValue = value;
  }
  public resetAggregationPolicy() {
    this._aggregationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationPolicyInput() {
    return this._aggregationPolicy.internalValue;
  }

  // check_constraint - computed: false, optional: true, required: false
  private _checkConstraint = new IcebergTableCheckConstraintList(this, "check_constraint", false);
  public get checkConstraint() {
    return this._checkConstraint;
  }
  public putCheckConstraint(value: IcebergTableCheckConstraint[] | cdktn.IResolvable) {
    this._checkConstraint.internalValue = value;
  }
  public resetCheckConstraint() {
    this._checkConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkConstraintInput() {
    return this._checkConstraint.internalValue;
  }

  // column - computed: false, optional: false, required: true
  private _column = new IcebergTableColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: IcebergTableColumn[] | cdktn.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // foreign_key_constraint - computed: false, optional: true, required: false
  private _foreignKeyConstraint = new IcebergTableForeignKeyConstraintList(this, "foreign_key_constraint", false);
  public get foreignKeyConstraint() {
    return this._foreignKeyConstraint;
  }
  public putForeignKeyConstraint(value: IcebergTableForeignKeyConstraint[] | cdktn.IResolvable) {
    this._foreignKeyConstraint.internalValue = value;
  }
  public resetForeignKeyConstraint() {
    this._foreignKeyConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeyConstraintInput() {
    return this._foreignKeyConstraint.internalValue;
  }

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy = new IcebergTablePartitionByList(this, "partition_by", false);
  public get partitionBy() {
    return this._partitionBy;
  }
  public putPartitionBy(value: IcebergTablePartitionBy[] | cdktn.IResolvable) {
    this._partitionBy.internalValue = value;
  }
  public resetPartitionBy() {
    this._partitionBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy.internalValue;
  }

  // primary_key_constraint - computed: false, optional: true, required: false
  private _primaryKeyConstraint = new IcebergTablePrimaryKeyConstraintOutputReference(this, "primary_key_constraint");
  public get primaryKeyConstraint() {
    return this._primaryKeyConstraint;
  }
  public putPrimaryKeyConstraint(value: IcebergTablePrimaryKeyConstraint) {
    this._primaryKeyConstraint.internalValue = value;
  }
  public resetPrimaryKeyConstraint() {
    this._primaryKeyConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyConstraintInput() {
    return this._primaryKeyConstraint.internalValue;
  }

  // row_access_policy - computed: false, optional: true, required: false
  private _rowAccessPolicy = new IcebergTableRowAccessPolicyOutputReference(this, "row_access_policy");
  public get rowAccessPolicy() {
    return this._rowAccessPolicy;
  }
  public putRowAccessPolicy(value: IcebergTableRowAccessPolicy) {
    this._rowAccessPolicy.internalValue = value;
  }
  public resetRowAccessPolicy() {
    this._rowAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAccessPolicyInput() {
    return this._rowAccessPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IcebergTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IcebergTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // unique_constraint - computed: false, optional: true, required: false
  private _uniqueConstraint = new IcebergTableUniqueConstraintList(this, "unique_constraint", false);
  public get uniqueConstraint() {
    return this._uniqueConstraint;
  }
  public putUniqueConstraint(value: IcebergTableUniqueConstraint[] | cdktn.IResolvable) {
    this._uniqueConstraint.internalValue = value;
  }
  public resetUniqueConstraint() {
    this._uniqueConstraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueConstraintInput() {
    return this._uniqueConstraint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_location: cdktn.stringToTerraform(this._baseLocation),
      catalog: cdktn.stringToTerraform(this._catalog),
      catalog_sync: cdktn.stringToTerraform(this._catalogSync),
      change_tracking: cdktn.stringToTerraform(this._changeTracking),
      cluster_by: cdktn.listMapper(cdktn.stringToTerraform, false)(this._clusterBy),
      comment: cdktn.stringToTerraform(this._comment),
      data_retention_time_in_days: cdktn.numberToTerraform(this._dataRetentionTimeInDays),
      database: cdktn.stringToTerraform(this._database),
      enable_data_compaction: cdktn.booleanToTerraform(this._enableDataCompaction),
      enable_iceberg_merge_on_read: cdktn.booleanToTerraform(this._enableIcebergMergeOnRead),
      error_logging: cdktn.stringToTerraform(this._errorLogging),
      external_volume: cdktn.stringToTerraform(this._externalVolume),
      iceberg_version: cdktn.numberToTerraform(this._icebergVersion),
      id: cdktn.stringToTerraform(this._id),
      max_data_extension_time_in_days: cdktn.numberToTerraform(this._maxDataExtensionTimeInDays),
      name: cdktn.stringToTerraform(this._name),
      path_layout: cdktn.stringToTerraform(this._pathLayout),
      schema: cdktn.stringToTerraform(this._schema),
      storage_serialization_policy: cdktn.stringToTerraform(this._storageSerializationPolicy),
      target_file_size: cdktn.stringToTerraform(this._targetFileSize),
      aggregation_policy: icebergTableAggregationPolicyToTerraform(this._aggregationPolicy.internalValue),
      check_constraint: cdktn.listMapper(icebergTableCheckConstraintToTerraform, true)(this._checkConstraint.internalValue),
      column: cdktn.listMapper(icebergTableColumnToTerraform, true)(this._column.internalValue),
      foreign_key_constraint: cdktn.listMapper(icebergTableForeignKeyConstraintToTerraform, true)(this._foreignKeyConstraint.internalValue),
      partition_by: cdktn.listMapper(icebergTablePartitionByToTerraform, true)(this._partitionBy.internalValue),
      primary_key_constraint: icebergTablePrimaryKeyConstraintToTerraform(this._primaryKeyConstraint.internalValue),
      row_access_policy: icebergTableRowAccessPolicyToTerraform(this._rowAccessPolicy.internalValue),
      timeouts: icebergTableTimeoutsToTerraform(this._timeouts.internalValue),
      unique_constraint: cdktn.listMapper(icebergTableUniqueConstraintToTerraform, true)(this._uniqueConstraint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_location: {
        value: cdktn.stringToHclTerraform(this._baseLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog: {
        value: cdktn.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_sync: {
        value: cdktn.stringToHclTerraform(this._catalogSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_tracking: {
        value: cdktn.stringToHclTerraform(this._changeTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_by: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._clusterBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_retention_time_in_days: {
        value: cdktn.numberToHclTerraform(this._dataRetentionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database: {
        value: cdktn.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_data_compaction: {
        value: cdktn.booleanToHclTerraform(this._enableDataCompaction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_iceberg_merge_on_read: {
        value: cdktn.booleanToHclTerraform(this._enableIcebergMergeOnRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_logging: {
        value: cdktn.stringToHclTerraform(this._errorLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_volume: {
        value: cdktn.stringToHclTerraform(this._externalVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iceberg_version: {
        value: cdktn.numberToHclTerraform(this._icebergVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_data_extension_time_in_days: {
        value: cdktn.numberToHclTerraform(this._maxDataExtensionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_layout: {
        value: cdktn.stringToHclTerraform(this._pathLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_serialization_policy: {
        value: cdktn.stringToHclTerraform(this._storageSerializationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_file_size: {
        value: cdktn.stringToHclTerraform(this._targetFileSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregation_policy: {
        value: icebergTableAggregationPolicyToHclTerraform(this._aggregationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTableAggregationPolicyList",
      },
      check_constraint: {
        value: cdktn.listMapperHcl(icebergTableCheckConstraintToHclTerraform, true)(this._checkConstraint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTableCheckConstraintList",
      },
      column: {
        value: cdktn.listMapperHcl(icebergTableColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTableColumnList",
      },
      foreign_key_constraint: {
        value: cdktn.listMapperHcl(icebergTableForeignKeyConstraintToHclTerraform, true)(this._foreignKeyConstraint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTableForeignKeyConstraintList",
      },
      partition_by: {
        value: cdktn.listMapperHcl(icebergTablePartitionByToHclTerraform, true)(this._partitionBy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTablePartitionByList",
      },
      primary_key_constraint: {
        value: icebergTablePrimaryKeyConstraintToHclTerraform(this._primaryKeyConstraint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTablePrimaryKeyConstraintList",
      },
      row_access_policy: {
        value: icebergTableRowAccessPolicyToHclTerraform(this._rowAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTableRowAccessPolicyList",
      },
      timeouts: {
        value: icebergTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IcebergTableTimeouts",
      },
      unique_constraint: {
        value: cdktn.listMapperHcl(icebergTableUniqueConstraintToHclTerraform, true)(this._uniqueConstraint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IcebergTableUniqueConstraintList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
