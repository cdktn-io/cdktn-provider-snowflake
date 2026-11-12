/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataSnowflakePostgresMirrorsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists only the mirrors that replicate from this Postgres instance. The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}
  */
  readonly postgresInstance?: string;
  /**
  * (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. The output of describe is saved to the describe_output field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}
  */
  readonly withDescribe?: boolean | cdktn.IResolvable;
}
export interface DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput {
}

export function dataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputToTerraform(struct?: DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputToHclTerraform(struct?: DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_lag_bytes - computed: true, optional: false, required: false
  public get applyLagBytes() {
    return this.getNumberAttribute('apply_lag_bytes');
  }

  // apply_lag_operations - computed: true, optional: false, required: false
  public get applyLagOperations() {
    return this.getNumberAttribute('apply_lag_operations');
  }

  // apply_lag_seconds - computed: true, optional: false, required: false
  public get applyLagSeconds() {
    return this.getNumberAttribute('apply_lag_seconds');
  }

  // catalog_integration_name - computed: true, optional: false, required: false
  public get catalogIntegrationName() {
    return this.getStringAttribute('catalog_integration_name');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // external_volume - computed: true, optional: false, required: false
  public get externalVolume() {
    return this.getStringAttribute('external_volume');
  }

  // feed_only - computed: true, optional: false, required: false
  public get feedOnly() {
    return this.getBooleanAttribute('feed_only');
  }

  // last_applied_commit_lsn - computed: true, optional: false, required: false
  public get lastAppliedCommitLsn() {
    return this.getStringAttribute('last_applied_commit_lsn');
  }

  // last_applied_commit_time - computed: true, optional: false, required: false
  public get lastAppliedCommitTime() {
    return this.getStringAttribute('last_applied_commit_time');
  }

  // last_apply_time - computed: true, optional: false, required: false
  public get lastApplyTime() {
    return this.getStringAttribute('last_apply_time');
  }

  // last_operation_id - computed: true, optional: false, required: false
  public get lastOperationId() {
    return this.getNumberAttribute('last_operation_id');
  }

  // last_operation_time - computed: true, optional: false, required: false
  public get lastOperationTime() {
    return this.getStringAttribute('last_operation_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // postgres_database - computed: true, optional: false, required: false
  public get postgresDatabase() {
    return this.getStringAttribute('postgres_database');
  }

  // postgres_instance - computed: true, optional: false, required: false
  public get postgresInstance() {
    return this.getStringAttribute('postgres_instance');
  }

  // postgres_schemas - computed: true, optional: false, required: false
  public get postgresSchemas() {
    return this.getListAttribute('postgres_schemas');
  }

  // postgres_status - computed: true, optional: false, required: false
  public get postgresStatus() {
    return this.getStringAttribute('postgres_status');
  }

  // postgres_tables - computed: true, optional: false, required: false
  public get postgresTables() {
    return this.getListAttribute('postgres_tables');
  }

  // recent_query_durations - computed: true, optional: false, required: false
  public get recentQueryDurations() {
    return this.getStringAttribute('recent_query_durations');
  }

  // refresh_interval - computed: true, optional: false, required: false
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_database - computed: true, optional: false, required: false
  public get targetDatabase() {
    return this.getStringAttribute('target_database');
  }

  // target_table_type - computed: true, optional: false, required: false
  public get targetTableType() {
    return this.getStringAttribute('target_table_type');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}

export class DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference {
    return new DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput {
}

export function dataSnowflakePostgresMirrorsPostgresMirrorsShowOutputToTerraform(struct?: DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakePostgresMirrorsPostgresMirrorsShowOutputToHclTerraform(struct?: DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // initial_snapshot_tables_remaining - computed: true, optional: false, required: false
  public get initialSnapshotTablesRemaining() {
    return this.getNumberAttribute('initial_snapshot_tables_remaining');
  }

  // last_apply_time - computed: true, optional: false, required: false
  public get lastApplyTime() {
    return this.getStringAttribute('last_apply_time');
  }

  // last_operation_time - computed: true, optional: false, required: false
  public get lastOperationTime() {
    return this.getStringAttribute('last_operation_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // postgres_database - computed: true, optional: false, required: false
  public get postgresDatabase() {
    return this.getStringAttribute('postgres_database');
  }

  // postgres_instance - computed: true, optional: false, required: false
  public get postgresInstance() {
    return this.getStringAttribute('postgres_instance');
  }

  // refresh_interval - computed: true, optional: false, required: false
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table_count - computed: true, optional: false, required: false
  public get tableCount() {
    return this.getNumberAttribute('table_count');
  }

  // target_database - computed: true, optional: false, required: false
  public get targetDatabase() {
    return this.getStringAttribute('target_database');
  }
}

export class DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference {
    return new DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakePostgresMirrorsPostgresMirrors {
}

export function dataSnowflakePostgresMirrorsPostgresMirrorsToTerraform(struct?: DataSnowflakePostgresMirrorsPostgresMirrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakePostgresMirrorsPostgresMirrorsToHclTerraform(struct?: DataSnowflakePostgresMirrorsPostgresMirrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakePostgresMirrorsPostgresMirrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakePostgresMirrorsPostgresMirrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakePostgresMirrorsPostgresMirrorsList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference {
    return new DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors snowflake_postgres_mirrors}
*/
export class DataSnowflakePostgresMirrors extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_postgres_mirrors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakePostgresMirrors to import
  * @param importFromId The id of the existing DataSnowflakePostgresMirrors that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakePostgresMirrors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_postgres_mirrors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors snowflake_postgres_mirrors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakePostgresMirrorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakePostgresMirrorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_postgres_mirrors',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.23.0',
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
    this._id = config.id;
    this._postgresInstance = config.postgresInstance;
    this._withDescribe = config.withDescribe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // postgres_instance - computed: false, optional: true, required: false
  private _postgresInstance?: string; 
  public get postgresInstance() {
    return this.getStringAttribute('postgres_instance');
  }
  public set postgresInstance(value: string) {
    this._postgresInstance = value;
  }
  public resetPostgresInstance() {
    this._postgresInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInstanceInput() {
    return this._postgresInstance;
  }

  // postgres_mirrors - computed: true, optional: false, required: false
  private _postgresMirrors = new DataSnowflakePostgresMirrorsPostgresMirrorsList(this, "postgres_mirrors", false);
  public get postgresMirrors() {
    return this._postgresMirrors;
  }

  // with_describe - computed: false, optional: true, required: false
  private _withDescribe?: boolean | cdktn.IResolvable; 
  public get withDescribe() {
    return this.getBooleanAttribute('with_describe');
  }
  public set withDescribe(value: boolean | cdktn.IResolvable) {
    this._withDescribe = value;
  }
  public resetWithDescribe() {
    this._withDescribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDescribeInput() {
    return this._withDescribe;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      postgres_instance: cdktn.stringToTerraform(this._postgresInstance),
      with_describe: cdktn.booleanToTerraform(this._withDescribe),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_instance: {
        value: cdktn.stringToHclTerraform(this._postgresInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_describe: {
        value: cdktn.booleanToHclTerraform(this._withDescribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
