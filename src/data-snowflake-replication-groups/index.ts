/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/replication_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataSnowflakeReplicationGroupsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/replication_groups#id DataSnowflakeReplicationGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Limits results to replication groups in this account, as organization and account name. Matches [SHOW REPLICATION GROUPS](https://docs.snowflake.com/en/sql-reference/sql/show-replication-groups) `IN ACCOUNT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/replication_groups#in_account DataSnowflakeReplicationGroups#in_account}
  */
  readonly inAccount?: string;
}
export interface DataSnowflakeReplicationGroupsReplicationGroupsShowOutput {
}

export function dataSnowflakeReplicationGroupsReplicationGroupsShowOutputToTerraform(struct?: DataSnowflakeReplicationGroupsReplicationGroupsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeReplicationGroupsReplicationGroupsShowOutputToHclTerraform(struct?: DataSnowflakeReplicationGroupsReplicationGroupsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeReplicationGroupsReplicationGroupsShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeReplicationGroupsReplicationGroupsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeReplicationGroupsReplicationGroupsShowOutput | undefined) {
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

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // is_listing_auto_fulfillment_group - computed: true, optional: false, required: false
  public get isListingAutoFulfillmentGroup() {
    return this.getBooleanAttribute('is_listing_auto_fulfillment_group');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_scheduled_refresh - computed: true, optional: false, required: false
  public get nextScheduledRefresh() {
    return this.getStringAttribute('next_scheduled_refresh');
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

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // region_group - computed: true, optional: false, required: false
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }

  // replication_schedule - computed: true, optional: false, required: false
  public get replicationSchedule() {
    return this.getStringAttribute('replication_schedule');
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

export class DataSnowflakeReplicationGroupsReplicationGroupsShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeReplicationGroupsReplicationGroupsShowOutputOutputReference {
    return new DataSnowflakeReplicationGroupsReplicationGroupsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeReplicationGroupsReplicationGroups {
}

export function dataSnowflakeReplicationGroupsReplicationGroupsToTerraform(struct?: DataSnowflakeReplicationGroupsReplicationGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataSnowflakeReplicationGroupsReplicationGroupsToHclTerraform(struct?: DataSnowflakeReplicationGroupsReplicationGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeReplicationGroupsReplicationGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataSnowflakeReplicationGroupsReplicationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeReplicationGroupsReplicationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeReplicationGroupsReplicationGroupsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeReplicationGroupsReplicationGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataSnowflakeReplicationGroupsReplicationGroupsOutputReference {
    return new DataSnowflakeReplicationGroupsReplicationGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/replication_groups snowflake_replication_groups}
*/
export class DataSnowflakeReplicationGroups extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_replication_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataSnowflakeReplicationGroups resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeReplicationGroups to import
  * @param importFromId The id of the existing DataSnowflakeReplicationGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/replication_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeReplicationGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_replication_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/replication_groups snowflake_replication_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeReplicationGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeReplicationGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_replication_groups',
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
    this._inAccount = config.inAccount;
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

  // in_account - computed: false, optional: true, required: false
  private _inAccount?: string; 
  public get inAccount() {
    return this.getStringAttribute('in_account');
  }
  public set inAccount(value: string) {
    this._inAccount = value;
  }
  public resetInAccount() {
    this._inAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inAccountInput() {
    return this._inAccount;
  }

  // replication_groups - computed: true, optional: false, required: false
  private _replicationGroups = new DataSnowflakeReplicationGroupsReplicationGroupsList(this, "replication_groups", false);
  public get replicationGroups() {
    return this._replicationGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      in_account: cdktn.stringToTerraform(this._inAccount),
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
      in_account: {
        value: cdktn.stringToHclTerraform(this._inAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
