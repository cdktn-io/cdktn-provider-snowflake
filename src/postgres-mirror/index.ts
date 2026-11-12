/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PostgresMirrorConfig extends cdktn.TerraformMetaArguments {
  /**
  * (Default: `true`) Specifies whether destroying the mirror also drops its target database. A kept target database can never be the target of a mirror again, so with `false`, a replacement that keeps the same `target_database` fails. A kept target database stays owned by the `SNOWFLAKE` application. To manage or drop it, first transfer its ownership with `GRANT OWNERSHIP ON DATABASE`, which needs the `MANAGE GRANTS` privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#drop_target_database_on_destroy PostgresMirror#drop_target_database_on_destroy}
  */
  readonly dropTargetDatabaseOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Specifies the external volume for Iceberg target tables. Valid only with `target_table_type = "ICEBERG"`. When not set, the tables use Snowflake-managed storage. Grant `USAGE` on the volume to `APPLICATION SNOWFLAKE` first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#external_volume PostgresMirror#external_volume}
  */
  readonly externalVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the mirror. It must be unique across all Postgres instances in the account. Snowflake stores the name lowercased, and the lowercased name is the resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#name PostgresMirror#name}
  */
  readonly name: string;
  /**
  * Specifies the source database on the Postgres instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_database PostgresMirror#postgres_database}
  */
  readonly postgresDatabase: string;
  /**
  * Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_instance PostgresMirror#postgres_instance}
  */
  readonly postgresInstance: string;
  /**
  * Specifies the source schemas to mirror. Every current and future table in them is included. Schema names are literal and case-sensitive, written without Postgres quoting, such as `MixedCase` rather than `"MixedCase"`. Schemas are added and removed in place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_schemas PostgresMirror#postgres_schemas}
  */
  readonly postgresSchemas?: string[];
  /**
  * Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_tables PostgresMirror#postgres_tables}
  */
  readonly postgresTables?: string[];
  /**
  * Specifies the Snowflake database the mirror creates and keeps up to date. The database must not exist yet, and Snowflake uppercases its name. The mirror protects the database, so do not manage it with `snowflake_database`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_database PostgresMirror#target_database}
  */
  readonly targetDatabase: string;
  /**
  * Specifies the format of the target tables. When not set, Snowflake uses `SNOWFLAKE`. Valid values are (case-insensitive): `SNOWFLAKE` | `ICEBERG`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_table_type PostgresMirror#target_table_type}
  */
  readonly targetTableType?: string;
  /**
  * Specifies the warehouse the mirror's apply task runs on. When not set, the task runs on serverless compute. Snowflake uppercases the name, so the warehouse itself must have an uppercase name; the case used in the configuration does not matter. Grant `USAGE` on the warehouse to `APPLICATION SNOWFLAKE` first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#warehouse PostgresMirror#warehouse}
  */
  readonly warehouse?: string;
  /**
  * refresh_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#refresh_interval PostgresMirror#refresh_interval}
  */
  readonly refreshInterval?: PostgresMirrorRefreshInterval;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#timeouts PostgresMirror#timeouts}
  */
  readonly timeouts?: PostgresMirrorTimeouts;
}
export interface PostgresMirrorDescribeOutput {
}

export function postgresMirrorDescribeOutputToTerraform(struct?: PostgresMirrorDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function postgresMirrorDescribeOutputToHclTerraform(struct?: PostgresMirrorDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresMirrorDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PostgresMirrorDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresMirrorDescribeOutput | undefined) {
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

export class PostgresMirrorDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): PostgresMirrorDescribeOutputOutputReference {
    return new PostgresMirrorDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PostgresMirrorRefreshInterval {
  /**
  * Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#hours PostgresMirror#hours}
  */
  readonly hours?: number;
  /**
  * Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#minutes PostgresMirror#minutes}
  */
  readonly minutes?: number;
  /**
  * Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#seconds PostgresMirror#seconds}
  */
  readonly seconds?: number;
}

export function postgresMirrorRefreshIntervalToTerraform(struct?: PostgresMirrorRefreshIntervalOutputReference | PostgresMirrorRefreshInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hours: cdktn.numberToTerraform(struct!.hours),
    minutes: cdktn.numberToTerraform(struct!.minutes),
    seconds: cdktn.numberToTerraform(struct!.seconds),
  }
}


export function postgresMirrorRefreshIntervalToHclTerraform(struct?: PostgresMirrorRefreshIntervalOutputReference | PostgresMirrorRefreshInterval): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hours: {
      value: cdktn.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktn.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktn.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresMirrorRefreshIntervalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PostgresMirrorRefreshInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresMirrorRefreshInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface PostgresMirrorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}
  */
  readonly update?: string;
}

export function postgresMirrorTimeoutsToTerraform(struct?: PostgresMirrorTimeouts | cdktn.IResolvable): any {
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


export function postgresMirrorTimeoutsToHclTerraform(struct?: PostgresMirrorTimeouts | cdktn.IResolvable): any {
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

export class PostgresMirrorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresMirrorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PostgresMirrorTimeouts | cdktn.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror snowflake_postgres_mirror}
*/
export class PostgresMirror extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_postgres_mirror";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresMirror to import
  * @param importFromId The id of the existing PostgresMirror that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresMirror to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_postgres_mirror", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror snowflake_postgres_mirror} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresMirrorConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresMirrorConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_postgres_mirror',
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
    this._dropTargetDatabaseOnDestroy = config.dropTargetDatabaseOnDestroy;
    this._externalVolume = config.externalVolume;
    this._id = config.id;
    this._name = config.name;
    this._postgresDatabase = config.postgresDatabase;
    this._postgresInstance = config.postgresInstance;
    this._postgresSchemas = config.postgresSchemas;
    this._postgresTables = config.postgresTables;
    this._targetDatabase = config.targetDatabase;
    this._targetTableType = config.targetTableType;
    this._warehouse = config.warehouse;
    this._refreshInterval.internalValue = config.refreshInterval;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new PostgresMirrorDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // drop_target_database_on_destroy - computed: false, optional: true, required: false
  private _dropTargetDatabaseOnDestroy?: boolean | cdktn.IResolvable; 
  public get dropTargetDatabaseOnDestroy() {
    return this.getBooleanAttribute('drop_target_database_on_destroy');
  }
  public set dropTargetDatabaseOnDestroy(value: boolean | cdktn.IResolvable) {
    this._dropTargetDatabaseOnDestroy = value;
  }
  public resetDropTargetDatabaseOnDestroy() {
    this._dropTargetDatabaseOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTargetDatabaseOnDestroyInput() {
    return this._dropTargetDatabaseOnDestroy;
  }

  // external_volume - computed: false, optional: true, required: false
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

  // postgres_database - computed: false, optional: false, required: true
  private _postgresDatabase?: string; 
  public get postgresDatabase() {
    return this.getStringAttribute('postgres_database');
  }
  public set postgresDatabase(value: string) {
    this._postgresDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase;
  }

  // postgres_instance - computed: false, optional: false, required: true
  private _postgresInstance?: string; 
  public get postgresInstance() {
    return this.getStringAttribute('postgres_instance');
  }
  public set postgresInstance(value: string) {
    this._postgresInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresInstanceInput() {
    return this._postgresInstance;
  }

  // postgres_schemas - computed: false, optional: true, required: false
  private _postgresSchemas?: string[]; 
  public get postgresSchemas() {
    return cdktn.Fn.tolist(this.getListAttribute('postgres_schemas'));
  }
  public set postgresSchemas(value: string[]) {
    this._postgresSchemas = value;
  }
  public resetPostgresSchemas() {
    this._postgresSchemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSchemasInput() {
    return this._postgresSchemas;
  }

  // postgres_tables - computed: false, optional: true, required: false
  private _postgresTables?: string[]; 
  public get postgresTables() {
    return cdktn.Fn.tolist(this.getListAttribute('postgres_tables'));
  }
  public set postgresTables(value: string[]) {
    this._postgresTables = value;
  }
  public resetPostgresTables() {
    this._postgresTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresTablesInput() {
    return this._postgresTables;
  }

  // target_database - computed: false, optional: false, required: true
  private _targetDatabase?: string; 
  public get targetDatabase() {
    return this.getStringAttribute('target_database');
  }
  public set targetDatabase(value: string) {
    this._targetDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseInput() {
    return this._targetDatabase;
  }

  // target_table_type - computed: false, optional: true, required: false
  private _targetTableType?: string; 
  public get targetTableType() {
    return this.getStringAttribute('target_table_type');
  }
  public set targetTableType(value: string) {
    this._targetTableType = value;
  }
  public resetTargetTableType() {
    this._targetTableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableTypeInput() {
    return this._targetTableType;
  }

  // warehouse - computed: false, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval = new PostgresMirrorRefreshIntervalOutputReference(this, "refresh_interval");
  public get refreshInterval() {
    return this._refreshInterval;
  }
  public putRefreshInterval(value: PostgresMirrorRefreshInterval) {
    this._refreshInterval.internalValue = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PostgresMirrorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PostgresMirrorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drop_target_database_on_destroy: cdktn.booleanToTerraform(this._dropTargetDatabaseOnDestroy),
      external_volume: cdktn.stringToTerraform(this._externalVolume),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      postgres_database: cdktn.stringToTerraform(this._postgresDatabase),
      postgres_instance: cdktn.stringToTerraform(this._postgresInstance),
      postgres_schemas: cdktn.listMapper(cdktn.stringToTerraform, false)(this._postgresSchemas),
      postgres_tables: cdktn.listMapper(cdktn.stringToTerraform, false)(this._postgresTables),
      target_database: cdktn.stringToTerraform(this._targetDatabase),
      target_table_type: cdktn.stringToTerraform(this._targetTableType),
      warehouse: cdktn.stringToTerraform(this._warehouse),
      refresh_interval: postgresMirrorRefreshIntervalToTerraform(this._refreshInterval.internalValue),
      timeouts: postgresMirrorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drop_target_database_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._dropTargetDatabaseOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_volume: {
        value: cdktn.stringToHclTerraform(this._externalVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_database: {
        value: cdktn.stringToHclTerraform(this._postgresDatabase),
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
      postgres_schemas: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._postgresSchemas),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      postgres_tables: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._postgresTables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_database: {
        value: cdktn.stringToHclTerraform(this._targetDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_table_type: {
        value: cdktn.stringToHclTerraform(this._targetTableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse: {
        value: cdktn.stringToHclTerraform(this._warehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval: {
        value: postgresMirrorRefreshIntervalToHclTerraform(this._refreshInterval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PostgresMirrorRefreshIntervalList",
      },
      timeouts: {
        value: postgresMirrorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresMirrorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
