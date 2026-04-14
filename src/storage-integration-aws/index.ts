/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StorageIntegrationAwsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies a comment for the storage integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#comment StorageIntegrationAws#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this storage integration is available for usage in stages. `TRUE` allows users to create new stages that reference this integration. Existing stages that reference this integration function normally. `FALSE` prevents users from creating new stages that reference this integration. Existing stages that reference this integration cannot access the storage location in the stage definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#enabled StorageIntegrationAws#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#id StorageIntegrationAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * String that specifies the identifier (i.e. name) for the integration; must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#name StorageIntegrationAws#name}
  */
  readonly name: string;
  /**
  * Explicitly limits external stages that use the integration to reference one or more storage locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#storage_allowed_locations StorageIntegrationAws#storage_allowed_locations}
  */
  readonly storageAllowedLocations: string[];
  /**
  * Optionally specifies an external ID that Snowflake uses to establish a trust relationship with AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#storage_aws_external_id StorageIntegrationAws#storage_aws_external_id}
  */
  readonly storageAwsExternalId?: string;
  /**
  * Enables support for AWS access control lists (ACLs) to grant the bucket owner full control. `bucket-owner-full-control` is the only currently supported value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#storage_aws_object_acl StorageIntegrationAws#storage_aws_object_acl}
  */
  readonly storageAwsObjectAcl?: string;
  /**
  * Specifies the Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#storage_aws_role_arn StorageIntegrationAws#storage_aws_role_arn}
  */
  readonly storageAwsRoleArn: string;
  /**
  * Explicitly prohibits external stages that use the integration from referencing one or more storage locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#storage_blocked_locations StorageIntegrationAws#storage_blocked_locations}
  */
  readonly storageBlockedLocations?: string[];
  /**
  * Specifies the storage provider for the integration. Valid options are: `S3` | `S3GOV` | `S3CHINA` | `GCS` | `AZURE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#storage_provider StorageIntegrationAws#storage_provider}
  */
  readonly storageProvider: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to use outbound private connectivity to harden the security posture. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#use_privatelink_endpoint StorageIntegrationAws#use_privatelink_endpoint}
  */
  readonly usePrivatelinkEndpoint?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#timeouts StorageIntegrationAws#timeouts}
  */
  readonly timeouts?: StorageIntegrationAwsTimeouts;
}
export interface StorageIntegrationAwsDescribeOutput {
}

export function storageIntegrationAwsDescribeOutputToTerraform(struct?: StorageIntegrationAwsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function storageIntegrationAwsDescribeOutputToHclTerraform(struct?: StorageIntegrationAwsDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StorageIntegrationAwsDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageIntegrationAwsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageIntegrationAwsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_locations - computed: true, optional: false, required: false
  public get allowedLocations() {
    return this.getListAttribute('allowed_locations');
  }

  // blocked_locations - computed: true, optional: false, required: false
  public get blockedLocations() {
    return this.getListAttribute('blocked_locations');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // iam_user_arn - computed: true, optional: false, required: false
  public get iamUserArn() {
    return this.getStringAttribute('iam_user_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_acl - computed: true, optional: false, required: false
  public get objectAcl() {
    return this.getStringAttribute('object_acl');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // use_privatelink_endpoint - computed: true, optional: false, required: false
  public get usePrivatelinkEndpoint() {
    return this.getBooleanAttribute('use_privatelink_endpoint');
  }
}

export class StorageIntegrationAwsDescribeOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageIntegrationAwsDescribeOutputOutputReference {
    return new StorageIntegrationAwsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageIntegrationAwsShowOutput {
}

export function storageIntegrationAwsShowOutputToTerraform(struct?: StorageIntegrationAwsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function storageIntegrationAwsShowOutputToHclTerraform(struct?: StorageIntegrationAwsShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StorageIntegrationAwsShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageIntegrationAwsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageIntegrationAwsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
}

export class StorageIntegrationAwsShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageIntegrationAwsShowOutputOutputReference {
    return new StorageIntegrationAwsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageIntegrationAwsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#create StorageIntegrationAws#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#delete StorageIntegrationAws#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#read StorageIntegrationAws#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#update StorageIntegrationAws#update}
  */
  readonly update?: string;
}

export function storageIntegrationAwsTimeoutsToTerraform(struct?: StorageIntegrationAwsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function storageIntegrationAwsTimeoutsToHclTerraform(struct?: StorageIntegrationAwsTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class StorageIntegrationAwsTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageIntegrationAwsTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StorageIntegrationAwsTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws snowflake_storage_integration_aws}
*/
export class StorageIntegrationAws extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_storage_integration_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StorageIntegrationAws resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageIntegrationAws to import
  * @param importFromId The id of the existing StorageIntegrationAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageIntegrationAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_storage_integration_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/storage_integration_aws snowflake_storage_integration_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageIntegrationAwsConfig
  */
  public constructor(scope: Construct, id: string, config: StorageIntegrationAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_storage_integration_aws',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.15.0',
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
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._storageAllowedLocations = config.storageAllowedLocations;
    this._storageAwsExternalId = config.storageAwsExternalId;
    this._storageAwsObjectAcl = config.storageAwsObjectAcl;
    this._storageAwsRoleArn = config.storageAwsRoleArn;
    this._storageBlockedLocations = config.storageBlockedLocations;
    this._storageProvider = config.storageProvider;
    this._usePrivatelinkEndpoint = config.usePrivatelinkEndpoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new StorageIntegrationAwsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new StorageIntegrationAwsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // storage_allowed_locations - computed: false, optional: false, required: true
  private _storageAllowedLocations?: string[]; 
  public get storageAllowedLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('storage_allowed_locations'));
  }
  public set storageAllowedLocations(value: string[]) {
    this._storageAllowedLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAllowedLocationsInput() {
    return this._storageAllowedLocations;
  }

  // storage_aws_external_id - computed: false, optional: true, required: false
  private _storageAwsExternalId?: string; 
  public get storageAwsExternalId() {
    return this.getStringAttribute('storage_aws_external_id');
  }
  public set storageAwsExternalId(value: string) {
    this._storageAwsExternalId = value;
  }
  public resetStorageAwsExternalId() {
    this._storageAwsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsExternalIdInput() {
    return this._storageAwsExternalId;
  }

  // storage_aws_object_acl - computed: false, optional: true, required: false
  private _storageAwsObjectAcl?: string; 
  public get storageAwsObjectAcl() {
    return this.getStringAttribute('storage_aws_object_acl');
  }
  public set storageAwsObjectAcl(value: string) {
    this._storageAwsObjectAcl = value;
  }
  public resetStorageAwsObjectAcl() {
    this._storageAwsObjectAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsObjectAclInput() {
    return this._storageAwsObjectAcl;
  }

  // storage_aws_role_arn - computed: false, optional: false, required: true
  private _storageAwsRoleArn?: string; 
  public get storageAwsRoleArn() {
    return this.getStringAttribute('storage_aws_role_arn');
  }
  public set storageAwsRoleArn(value: string) {
    this._storageAwsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsRoleArnInput() {
    return this._storageAwsRoleArn;
  }

  // storage_blocked_locations - computed: false, optional: true, required: false
  private _storageBlockedLocations?: string[]; 
  public get storageBlockedLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('storage_blocked_locations'));
  }
  public set storageBlockedLocations(value: string[]) {
    this._storageBlockedLocations = value;
  }
  public resetStorageBlockedLocations() {
    this._storageBlockedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlockedLocationsInput() {
    return this._storageBlockedLocations;
  }

  // storage_provider - computed: false, optional: false, required: true
  private _storageProvider?: string; 
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
  public set storageProvider(value: string) {
    this._storageProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderInput() {
    return this._storageProvider;
  }

  // use_privatelink_endpoint - computed: false, optional: true, required: false
  private _usePrivatelinkEndpoint?: string; 
  public get usePrivatelinkEndpoint() {
    return this.getStringAttribute('use_privatelink_endpoint');
  }
  public set usePrivatelinkEndpoint(value: string) {
    this._usePrivatelinkEndpoint = value;
  }
  public resetUsePrivatelinkEndpoint() {
    this._usePrivatelinkEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivatelinkEndpointInput() {
    return this._usePrivatelinkEndpoint;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageIntegrationAwsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageIntegrationAwsTimeouts) {
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
      comment: cdktn.stringToTerraform(this._comment),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      storage_allowed_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._storageAllowedLocations),
      storage_aws_external_id: cdktn.stringToTerraform(this._storageAwsExternalId),
      storage_aws_object_acl: cdktn.stringToTerraform(this._storageAwsObjectAcl),
      storage_aws_role_arn: cdktn.stringToTerraform(this._storageAwsRoleArn),
      storage_blocked_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._storageBlockedLocations),
      storage_provider: cdktn.stringToTerraform(this._storageProvider),
      use_privatelink_endpoint: cdktn.stringToTerraform(this._usePrivatelinkEndpoint),
      timeouts: storageIntegrationAwsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      storage_allowed_locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._storageAllowedLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_aws_external_id: {
        value: cdktn.stringToHclTerraform(this._storageAwsExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_aws_object_acl: {
        value: cdktn.stringToHclTerraform(this._storageAwsObjectAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_aws_role_arn: {
        value: cdktn.stringToHclTerraform(this._storageAwsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_blocked_locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._storageBlockedLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_provider: {
        value: cdktn.stringToHclTerraform(this._storageProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_privatelink_endpoint: {
        value: cdktn.stringToHclTerraform(this._usePrivatelinkEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: storageIntegrationAwsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageIntegrationAwsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
