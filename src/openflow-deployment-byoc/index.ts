/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OpenflowDeploymentByocConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies a comment for the Openflow deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#comment OpenflowDeploymentByoc#comment}
  */
  readonly comment?: string;
  /**
  * Specifies a custom hostname for ingress into the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#custom_ingress_hostname OpenflowDeploymentByoc#custom_ingress_hostname}
  */
  readonly customIngressHostname?: string;
  /**
  * A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#display_name OpenflowDeploymentByoc#display_name}
  */
  readonly displayName?: string;
  /**
  * Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#event_table OpenflowDeploymentByoc#event_table}
  */
  readonly eventTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the Openflow deployment; must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#name OpenflowDeploymentByoc#name}
  */
  readonly name: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_private_link OpenflowDeploymentByoc#use_private_link}
  */
  readonly usePrivateLink?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_user_auth_over_privatelink OpenflowDeploymentByoc#use_user_auth_over_privatelink}
  */
  readonly useUserAuthOverPrivatelink?: string;
  /**
  * Specifies whether the deployment's VPC is created by Snowflake or supplied by you. Valid values are (case-insensitive): `MANAGED` | `PROVIDED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#vpc_type OpenflowDeploymentByoc#vpc_type}
  */
  readonly vpcType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#timeouts OpenflowDeploymentByoc#timeouts}
  */
  readonly timeouts?: OpenflowDeploymentByocTimeouts;
}
export interface OpenflowDeploymentByocDescribeOutput {
}

export function openflowDeploymentByocDescribeOutputToTerraform(struct?: OpenflowDeploymentByocDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function openflowDeploymentByocDescribeOutputToHclTerraform(struct?: OpenflowDeploymentByocDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OpenflowDeploymentByocDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenflowDeploymentByocDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenflowDeploymentByocDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // custom_ingress_hostname - computed: true, optional: false, required: false
  public get customIngressHostname() {
    return this.getStringAttribute('custom_ingress_hostname');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_private_link - computed: true, optional: false, required: false
  public get usePrivateLink() {
    return this.getBooleanAttribute('use_private_link');
  }

  // use_user_auth_over_private_link - computed: true, optional: false, required: false
  public get useUserAuthOverPrivateLink() {
    return this.getBooleanAttribute('use_user_auth_over_private_link');
  }

  // vpc_type - computed: true, optional: false, required: false
  public get vpcType() {
    return this.getStringAttribute('vpc_type');
  }
}

export class OpenflowDeploymentByocDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): OpenflowDeploymentByocDescribeOutputOutputReference {
    return new OpenflowDeploymentByocDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenflowDeploymentByocParametersEventTable {
}

export function openflowDeploymentByocParametersEventTableToTerraform(struct?: OpenflowDeploymentByocParametersEventTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function openflowDeploymentByocParametersEventTableToHclTerraform(struct?: OpenflowDeploymentByocParametersEventTable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OpenflowDeploymentByocParametersEventTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenflowDeploymentByocParametersEventTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenflowDeploymentByocParametersEventTable | undefined) {
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

export class OpenflowDeploymentByocParametersEventTableList extends cdktn.ComplexList {

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
  public get(index: number): OpenflowDeploymentByocParametersEventTableOutputReference {
    return new OpenflowDeploymentByocParametersEventTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenflowDeploymentByocParameters {
}

export function openflowDeploymentByocParametersToTerraform(struct?: OpenflowDeploymentByocParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function openflowDeploymentByocParametersToHclTerraform(struct?: OpenflowDeploymentByocParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OpenflowDeploymentByocParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenflowDeploymentByocParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenflowDeploymentByocParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_table - computed: true, optional: false, required: false
  private _eventTable = new OpenflowDeploymentByocParametersEventTableList(this, "event_table", false);
  public get eventTable() {
    return this._eventTable;
  }
}

export class OpenflowDeploymentByocParametersList extends cdktn.ComplexList {

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
  public get(index: number): OpenflowDeploymentByocParametersOutputReference {
    return new OpenflowDeploymentByocParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenflowDeploymentByocShowOutput {
}

export function openflowDeploymentByocShowOutputToTerraform(struct?: OpenflowDeploymentByocShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function openflowDeploymentByocShowOutputToHclTerraform(struct?: OpenflowDeploymentByocShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class OpenflowDeploymentByocShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OpenflowDeploymentByocShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenflowDeploymentByocShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // custom_ingress_hostname - computed: true, optional: false, required: false
  public get customIngressHostname() {
    return this.getStringAttribute('custom_ingress_hostname');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }

  // use_private_link - computed: true, optional: false, required: false
  public get usePrivateLink() {
    return this.getBooleanAttribute('use_private_link');
  }

  // use_user_auth_over_private_link - computed: true, optional: false, required: false
  public get useUserAuthOverPrivateLink() {
    return this.getBooleanAttribute('use_user_auth_over_private_link');
  }

  // vpc_type - computed: true, optional: false, required: false
  public get vpcType() {
    return this.getStringAttribute('vpc_type');
  }
}

export class OpenflowDeploymentByocShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): OpenflowDeploymentByocShowOutputOutputReference {
    return new OpenflowDeploymentByocShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenflowDeploymentByocTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}
  */
  readonly update?: string;
}

export function openflowDeploymentByocTimeoutsToTerraform(struct?: OpenflowDeploymentByocTimeouts | cdktn.IResolvable): any {
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


export function openflowDeploymentByocTimeoutsToHclTerraform(struct?: OpenflowDeploymentByocTimeouts | cdktn.IResolvable): any {
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

export class OpenflowDeploymentByocTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpenflowDeploymentByocTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: OpenflowDeploymentByocTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc snowflake_openflow_deployment_byoc}
*/
export class OpenflowDeploymentByoc extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_openflow_deployment_byoc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenflowDeploymentByoc to import
  * @param importFromId The id of the existing OpenflowDeploymentByoc that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenflowDeploymentByoc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_openflow_deployment_byoc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc snowflake_openflow_deployment_byoc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenflowDeploymentByocConfig
  */
  public constructor(scope: Construct, id: string, config: OpenflowDeploymentByocConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_openflow_deployment_byoc',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.21.0',
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
    this._customIngressHostname = config.customIngressHostname;
    this._displayName = config.displayName;
    this._eventTable = config.eventTable;
    this._id = config.id;
    this._name = config.name;
    this._usePrivateLink = config.usePrivateLink;
    this._useUserAuthOverPrivatelink = config.useUserAuthOverPrivatelink;
    this._vpcType = config.vpcType;
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

  // custom_ingress_hostname - computed: false, optional: true, required: false
  private _customIngressHostname?: string; 
  public get customIngressHostname() {
    return this.getStringAttribute('custom_ingress_hostname');
  }
  public set customIngressHostname(value: string) {
    this._customIngressHostname = value;
  }
  public resetCustomIngressHostname() {
    this._customIngressHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIngressHostnameInput() {
    return this._customIngressHostname;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new OpenflowDeploymentByocDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // event_table - computed: true, optional: true, required: false
  private _eventTable?: string; 
  public get eventTable() {
    return this.getStringAttribute('event_table');
  }
  public set eventTable(value: string) {
    this._eventTable = value;
  }
  public resetEventTable() {
    this._eventTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTableInput() {
    return this._eventTable;
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

  // parameters - computed: true, optional: false, required: false
  private _parameters = new OpenflowDeploymentByocParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new OpenflowDeploymentByocShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_private_link - computed: false, optional: true, required: false
  private _usePrivateLink?: string; 
  public get usePrivateLink() {
    return this.getStringAttribute('use_private_link');
  }
  public set usePrivateLink(value: string) {
    this._usePrivateLink = value;
  }
  public resetUsePrivateLink() {
    this._usePrivateLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateLinkInput() {
    return this._usePrivateLink;
  }

  // use_user_auth_over_privatelink - computed: false, optional: true, required: false
  private _useUserAuthOverPrivatelink?: string; 
  public get useUserAuthOverPrivatelink() {
    return this.getStringAttribute('use_user_auth_over_privatelink');
  }
  public set useUserAuthOverPrivatelink(value: string) {
    this._useUserAuthOverPrivatelink = value;
  }
  public resetUseUserAuthOverPrivatelink() {
    this._useUserAuthOverPrivatelink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUserAuthOverPrivatelinkInput() {
    return this._useUserAuthOverPrivatelink;
  }

  // vpc_type - computed: false, optional: false, required: true
  private _vpcType?: string; 
  public get vpcType() {
    return this.getStringAttribute('vpc_type');
  }
  public set vpcType(value: string) {
    this._vpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcTypeInput() {
    return this._vpcType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpenflowDeploymentByocTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpenflowDeploymentByocTimeouts) {
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
      custom_ingress_hostname: cdktn.stringToTerraform(this._customIngressHostname),
      display_name: cdktn.stringToTerraform(this._displayName),
      event_table: cdktn.stringToTerraform(this._eventTable),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      use_private_link: cdktn.stringToTerraform(this._usePrivateLink),
      use_user_auth_over_privatelink: cdktn.stringToTerraform(this._useUserAuthOverPrivatelink),
      vpc_type: cdktn.stringToTerraform(this._vpcType),
      timeouts: openflowDeploymentByocTimeoutsToTerraform(this._timeouts.internalValue),
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
      custom_ingress_hostname: {
        value: cdktn.stringToHclTerraform(this._customIngressHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_table: {
        value: cdktn.stringToHclTerraform(this._eventTable),
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
      use_private_link: {
        value: cdktn.stringToHclTerraform(this._usePrivateLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_user_auth_over_privatelink: {
        value: cdktn.stringToHclTerraform(this._useUserAuthOverPrivatelink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_type: {
        value: cdktn.stringToHclTerraform(this._vpcType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: openflowDeploymentByocTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpenflowDeploymentByocTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
