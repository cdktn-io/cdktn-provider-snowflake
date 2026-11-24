/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FailoverGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}
  */
  readonly allowedAccounts: string[];
  /**
  * Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}
  */
  readonly allowedDatabases?: string[];
  /**
  * External volumes enabled for replication and failover. OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}
  */
  readonly allowedExternalVolumes?: string[];
  /**
  * Integration types enabled for replication and failover. OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}
  */
  readonly allowedIntegrationTypes?: string[];
  /**
  * Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}
  */
  readonly allowedShares?: string[];
  /**
  * Comment for the failover group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}
  */
  readonly comment?: string;
  /**
  * Notification integration that receives refresh error notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}
  */
  readonly errorIntegration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allows replicating objects to accounts on lower editions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}
  */
  readonly ignoreEditionCheck?: boolean | cdktn.IResolvable;
  /**
  * Specifies the identifier for the failover group; must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}
  */
  readonly name: string;
  /**
  * Types of objects for which replication and failover from the source account to the target accounts is enabled. Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}
  */
  readonly objectTypes: string[];
  /**
  * Specifies whether the failover group uses Optimized Refresh. Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}
  */
  readonly optimizedRefresh?: boolean | cdktn.IResolvable;
  /**
  * Enables the read-only mode of a primary failover group. Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
  /**
  * Schedule for refreshing secondary failover groups. An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}
  */
  readonly replicationSchedule?: string;
  /**
  * Specifies whether the failover group uses RPO Assurance. Set on the primary failover group only. Needs no replication schedule, enables Optimized Refresh automatically, and cannot be set together with `optimized_refresh`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#rpo_assurance FailoverGroup#rpo_assurance}
  */
  readonly rpoAssurance?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}
  */
  readonly timeouts?: FailoverGroupTimeouts;
}
export interface FailoverGroupShowOutput {
}

export function failoverGroupShowOutputToTerraform(struct?: FailoverGroupShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function failoverGroupShowOutputToHclTerraform(struct?: FailoverGroupShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class FailoverGroupShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FailoverGroupShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailoverGroupShowOutput | undefined) {
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

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // allowed_accounts - computed: true, optional: false, required: false
  public get allowedAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_accounts'));
  }

  // allowed_integration_types - computed: true, optional: false, required: false
  public get allowedIntegrationTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_integration_types'));
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // error_integration - computed: true, optional: false, required: false
  public get errorIntegration() {
    return this.getStringAttribute('error_integration');
  }

  // is_listing_auto_fulfillment_group - computed: true, optional: false, required: false
  public get isListingAutoFulfillmentGroup() {
    return this.getBooleanAttribute('is_listing_auto_fulfillment_group');
  }

  // is_optimized_refresh_enabled - computed: true, optional: false, required: false
  public get isOptimizedRefreshEnabled() {
    return this.getBooleanAttribute('is_optimized_refresh_enabled');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // is_primary_read_only - computed: true, optional: false, required: false
  public get isPrimaryReadOnly() {
    return this.getBooleanAttribute('is_primary_read_only');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_scheduled_refresh - computed: true, optional: false, required: false
  public get nextScheduledRefresh() {
    return this.getStringAttribute('next_scheduled_refresh');
  }

  // object_types - computed: true, optional: false, required: false
  public get objectTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('object_types'));
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // region_group - computed: true, optional: false, required: false
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }

  // replication_schedule - computed: true, optional: false, required: false
  public get replicationSchedule() {
    return this.getStringAttribute('replication_schedule');
  }

  // rpo_assurance - computed: true, optional: false, required: false
  public get rpoAssurance() {
    return this.getBooleanAttribute('rpo_assurance');
  }

  // secondary_state - computed: true, optional: false, required: false
  public get secondaryState() {
    return this.getStringAttribute('secondary_state');
  }

  // snowflake_region - computed: true, optional: false, required: false
  public get snowflakeRegion() {
    return this.getStringAttribute('snowflake_region');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class FailoverGroupShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): FailoverGroupShowOutputOutputReference {
    return new FailoverGroupShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailoverGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}
  */
  readonly update?: string;
}

export function failoverGroupTimeoutsToTerraform(struct?: FailoverGroupTimeouts | cdktn.IResolvable): any {
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


export function failoverGroupTimeoutsToHclTerraform(struct?: FailoverGroupTimeouts | cdktn.IResolvable): any {
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

export class FailoverGroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FailoverGroupTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FailoverGroupTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group snowflake_failover_group}
*/
export class FailoverGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_failover_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailoverGroup to import
  * @param importFromId The id of the existing FailoverGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailoverGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_failover_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group snowflake_failover_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailoverGroupConfig
  */
  public constructor(scope: Construct, id: string, config: FailoverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_failover_group',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.24.0',
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
    this._allowedAccounts = config.allowedAccounts;
    this._allowedDatabases = config.allowedDatabases;
    this._allowedExternalVolumes = config.allowedExternalVolumes;
    this._allowedIntegrationTypes = config.allowedIntegrationTypes;
    this._allowedShares = config.allowedShares;
    this._comment = config.comment;
    this._errorIntegration = config.errorIntegration;
    this._id = config.id;
    this._ignoreEditionCheck = config.ignoreEditionCheck;
    this._name = config.name;
    this._objectTypes = config.objectTypes;
    this._optimizedRefresh = config.optimizedRefresh;
    this._readOnly = config.readOnly;
    this._replicationSchedule = config.replicationSchedule;
    this._rpoAssurance = config.rpoAssurance;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_accounts - computed: false, optional: false, required: true
  private _allowedAccounts?: string[]; 
  public get allowedAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_accounts'));
  }
  public set allowedAccounts(value: string[]) {
    this._allowedAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountsInput() {
    return this._allowedAccounts;
  }

  // allowed_databases - computed: false, optional: true, required: false
  private _allowedDatabases?: string[]; 
  public get allowedDatabases() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_databases'));
  }
  public set allowedDatabases(value: string[]) {
    this._allowedDatabases = value;
  }
  public resetAllowedDatabases() {
    this._allowedDatabases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDatabasesInput() {
    return this._allowedDatabases;
  }

  // allowed_external_volumes - computed: false, optional: true, required: false
  private _allowedExternalVolumes?: string[]; 
  public get allowedExternalVolumes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_external_volumes'));
  }
  public set allowedExternalVolumes(value: string[]) {
    this._allowedExternalVolumes = value;
  }
  public resetAllowedExternalVolumes() {
    this._allowedExternalVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExternalVolumesInput() {
    return this._allowedExternalVolumes;
  }

  // allowed_integration_types - computed: false, optional: true, required: false
  private _allowedIntegrationTypes?: string[]; 
  public get allowedIntegrationTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_integration_types'));
  }
  public set allowedIntegrationTypes(value: string[]) {
    this._allowedIntegrationTypes = value;
  }
  public resetAllowedIntegrationTypes() {
    this._allowedIntegrationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIntegrationTypesInput() {
    return this._allowedIntegrationTypes;
  }

  // allowed_shares - computed: false, optional: true, required: false
  private _allowedShares?: string[]; 
  public get allowedShares() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_shares'));
  }
  public set allowedShares(value: string[]) {
    this._allowedShares = value;
  }
  public resetAllowedShares() {
    this._allowedShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSharesInput() {
    return this._allowedShares;
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

  // error_integration - computed: false, optional: true, required: false
  private _errorIntegration?: string; 
  public get errorIntegration() {
    return this.getStringAttribute('error_integration');
  }
  public set errorIntegration(value: string) {
    this._errorIntegration = value;
  }
  public resetErrorIntegration() {
    this._errorIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIntegrationInput() {
    return this._errorIntegration;
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

  // ignore_edition_check - computed: false, optional: true, required: false
  private _ignoreEditionCheck?: boolean | cdktn.IResolvable; 
  public get ignoreEditionCheck() {
    return this.getBooleanAttribute('ignore_edition_check');
  }
  public set ignoreEditionCheck(value: boolean | cdktn.IResolvable) {
    this._ignoreEditionCheck = value;
  }
  public resetIgnoreEditionCheck() {
    this._ignoreEditionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEditionCheckInput() {
    return this._ignoreEditionCheck;
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
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

  // object_types - computed: false, optional: false, required: true
  private _objectTypes?: string[]; 
  public get objectTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('object_types'));
  }
  public set objectTypes(value: string[]) {
    this._objectTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypesInput() {
    return this._objectTypes;
  }

  // optimized_refresh - computed: false, optional: true, required: false
  private _optimizedRefresh?: boolean | cdktn.IResolvable; 
  public get optimizedRefresh() {
    return this.getBooleanAttribute('optimized_refresh');
  }
  public set optimizedRefresh(value: boolean | cdktn.IResolvable) {
    this._optimizedRefresh = value;
  }
  public resetOptimizedRefresh() {
    this._optimizedRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedRefreshInput() {
    return this._optimizedRefresh;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // replication_schedule - computed: false, optional: true, required: false
  private _replicationSchedule?: string; 
  public get replicationSchedule() {
    return this.getStringAttribute('replication_schedule');
  }
  public set replicationSchedule(value: string) {
    this._replicationSchedule = value;
  }
  public resetReplicationSchedule() {
    this._replicationSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationScheduleInput() {
    return this._replicationSchedule;
  }

  // rpo_assurance - computed: false, optional: true, required: false
  private _rpoAssurance?: boolean | cdktn.IResolvable; 
  public get rpoAssurance() {
    return this.getBooleanAttribute('rpo_assurance');
  }
  public set rpoAssurance(value: boolean | cdktn.IResolvable) {
    this._rpoAssurance = value;
  }
  public resetRpoAssurance() {
    this._rpoAssurance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoAssuranceInput() {
    return this._rpoAssurance;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new FailoverGroupShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FailoverGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FailoverGroupTimeouts) {
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
      allowed_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedAccounts),
      allowed_databases: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedDatabases),
      allowed_external_volumes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedExternalVolumes),
      allowed_integration_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedIntegrationTypes),
      allowed_shares: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedShares),
      comment: cdktn.stringToTerraform(this._comment),
      error_integration: cdktn.stringToTerraform(this._errorIntegration),
      id: cdktn.stringToTerraform(this._id),
      ignore_edition_check: cdktn.booleanToTerraform(this._ignoreEditionCheck),
      name: cdktn.stringToTerraform(this._name),
      object_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._objectTypes),
      optimized_refresh: cdktn.booleanToTerraform(this._optimizedRefresh),
      read_only: cdktn.booleanToTerraform(this._readOnly),
      replication_schedule: cdktn.stringToTerraform(this._replicationSchedule),
      rpo_assurance: cdktn.booleanToTerraform(this._rpoAssurance),
      timeouts: failoverGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_accounts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_databases: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedDatabases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_external_volumes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedExternalVolumes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_integration_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedIntegrationTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_shares: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedShares),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_integration: {
        value: cdktn.stringToHclTerraform(this._errorIntegration),
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
      ignore_edition_check: {
        value: cdktn.booleanToHclTerraform(this._ignoreEditionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_types: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._objectTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      optimized_refresh: {
        value: cdktn.booleanToHclTerraform(this._optimizedRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      read_only: {
        value: cdktn.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_schedule: {
        value: cdktn.stringToHclTerraform(this._replicationSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpo_assurance: {
        value: cdktn.booleanToHclTerraform(this._rpoAssurance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: failoverGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FailoverGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
