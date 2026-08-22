/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ExternalAccessIntegrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the network rules for external locations reachable through this integration. At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}
  */
  readonly allowedNetworkRules: string[];
  /**
  * Specifies a comment for the external access integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether the integration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the external access integration. Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}
  */
  readonly name: string;
  /**
  * allowed_api_authentication_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}
  */
  readonly allowedApiAuthenticationIntegrations?: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations;
  /**
  * allowed_authentication_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}
  */
  readonly allowedAuthenticationSecrets?: ExternalAccessIntegrationAllowedAuthenticationSecrets;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}
  */
  readonly timeouts?: ExternalAccessIntegrationTimeouts;
}
export interface ExternalAccessIntegrationDescribeOutput {
}

export function externalAccessIntegrationDescribeOutputToTerraform(struct?: ExternalAccessIntegrationDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function externalAccessIntegrationDescribeOutputToHclTerraform(struct?: ExternalAccessIntegrationDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalAccessIntegrationDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalAccessIntegrationDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalAccessIntegrationDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_api_authentication_integrations - computed: true, optional: false, required: false
  public get allowedApiAuthenticationIntegrations() {
    return this.getListAttribute('allowed_api_authentication_integrations');
  }

  // allowed_authentication_secrets - computed: true, optional: false, required: false
  public get allowedAuthenticationSecrets() {
    return this.getListAttribute('allowed_authentication_secrets');
  }

  // allowed_network_rules - computed: true, optional: false, required: false
  public get allowedNetworkRules() {
    return this.getListAttribute('allowed_network_rules');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class ExternalAccessIntegrationDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): ExternalAccessIntegrationDescribeOutputOutputReference {
    return new ExternalAccessIntegrationDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalAccessIntegrationShowOutput {
}

export function externalAccessIntegrationShowOutputToTerraform(struct?: ExternalAccessIntegrationShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function externalAccessIntegrationShowOutputToHclTerraform(struct?: ExternalAccessIntegrationShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalAccessIntegrationShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ExternalAccessIntegrationShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalAccessIntegrationShowOutput | undefined) {
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ExternalAccessIntegrationShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): ExternalAccessIntegrationShowOutputOutputReference {
    return new ExternalAccessIntegrationShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalAccessIntegrationAllowedApiAuthenticationIntegrations {
  /**
  * Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#integrations ExternalAccessIntegration#integrations}
  */
  readonly integrations?: string[];
  /**
  * When true, no API authentication integrations are allowed. Conflicts with `integrations`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}
  */
  readonly none?: boolean | cdktn.IResolvable;
}

export function externalAccessIntegrationAllowedApiAuthenticationIntegrationsToTerraform(struct?: ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference | ExternalAccessIntegrationAllowedApiAuthenticationIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    integrations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.integrations),
    none: cdktn.booleanToTerraform(struct!.none),
  }
}


export function externalAccessIntegrationAllowedApiAuthenticationIntegrationsToHclTerraform(struct?: ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference | ExternalAccessIntegrationAllowedApiAuthenticationIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    integrations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.integrations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    none: {
      value: cdktn.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalAccessIntegrationAllowedApiAuthenticationIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrations !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrations = this._integrations;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._integrations = undefined;
      this._none = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._integrations = value.integrations;
      this._none = value.none;
    }
  }

  // integrations - computed: false, optional: true, required: false
  private _integrations?: string[]; 
  public get integrations() {
    return cdktn.Fn.tolist(this.getListAttribute('integrations'));
  }
  public set integrations(value: string[]) {
    this._integrations = value;
  }
  public resetIntegrations() {
    this._integrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktn.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktn.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }
}
export interface ExternalAccessIntegrationAllowedAuthenticationSecrets {
  /**
  * When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#all ExternalAccessIntegration#all}
  */
  readonly all?: boolean | cdktn.IResolvable;
  /**
  * When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}
  */
  readonly none?: boolean | cdktn.IResolvable;
  /**
  * Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#secrets ExternalAccessIntegration#secrets}
  */
  readonly secrets?: string[];
}

export function externalAccessIntegrationAllowedAuthenticationSecretsToTerraform(struct?: ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference | ExternalAccessIntegrationAllowedAuthenticationSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all: cdktn.booleanToTerraform(struct!.all),
    none: cdktn.booleanToTerraform(struct!.none),
    secrets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.secrets),
  }
}


export function externalAccessIntegrationAllowedAuthenticationSecretsToHclTerraform(struct?: ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference | ExternalAccessIntegrationAllowedAuthenticationSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all: {
      value: cdktn.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    none: {
      value: cdktn.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secrets: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalAccessIntegrationAllowedAuthenticationSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalAccessIntegrationAllowedAuthenticationSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._none = undefined;
      this._secrets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._none = value.none;
      this._secrets = value.secrets;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktn.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktn.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktn.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktn.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return cdktn.Fn.tolist(this.getListAttribute('secrets'));
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}
export interface ExternalAccessIntegrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}
  */
  readonly update?: string;
}

export function externalAccessIntegrationTimeoutsToTerraform(struct?: ExternalAccessIntegrationTimeouts | cdktn.IResolvable): any {
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


export function externalAccessIntegrationTimeoutsToHclTerraform(struct?: ExternalAccessIntegrationTimeouts | cdktn.IResolvable): any {
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

export class ExternalAccessIntegrationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalAccessIntegrationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ExternalAccessIntegrationTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration snowflake_external_access_integration}
*/
export class ExternalAccessIntegration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_external_access_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalAccessIntegration to import
  * @param importFromId The id of the existing ExternalAccessIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalAccessIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_external_access_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration snowflake_external_access_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalAccessIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalAccessIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_access_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.20.0',
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
    this._allowedNetworkRules = config.allowedNetworkRules;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._allowedApiAuthenticationIntegrations.internalValue = config.allowedApiAuthenticationIntegrations;
    this._allowedAuthenticationSecrets.internalValue = config.allowedAuthenticationSecrets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_network_rules - computed: false, optional: false, required: true
  private _allowedNetworkRules?: string[]; 
  public get allowedNetworkRules() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_network_rules'));
  }
  public set allowedNetworkRules(value: string[]) {
    this._allowedNetworkRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNetworkRulesInput() {
    return this._allowedNetworkRules;
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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new ExternalAccessIntegrationDescribeOutputList(this, "describe_output", false);
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
  private _showOutput = new ExternalAccessIntegrationShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // allowed_api_authentication_integrations - computed: false, optional: true, required: false
  private _allowedApiAuthenticationIntegrations = new ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference(this, "allowed_api_authentication_integrations");
  public get allowedApiAuthenticationIntegrations() {
    return this._allowedApiAuthenticationIntegrations;
  }
  public putAllowedApiAuthenticationIntegrations(value: ExternalAccessIntegrationAllowedApiAuthenticationIntegrations) {
    this._allowedApiAuthenticationIntegrations.internalValue = value;
  }
  public resetAllowedApiAuthenticationIntegrations() {
    this._allowedApiAuthenticationIntegrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedApiAuthenticationIntegrationsInput() {
    return this._allowedApiAuthenticationIntegrations.internalValue;
  }

  // allowed_authentication_secrets - computed: false, optional: true, required: false
  private _allowedAuthenticationSecrets = new ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference(this, "allowed_authentication_secrets");
  public get allowedAuthenticationSecrets() {
    return this._allowedAuthenticationSecrets;
  }
  public putAllowedAuthenticationSecrets(value: ExternalAccessIntegrationAllowedAuthenticationSecrets) {
    this._allowedAuthenticationSecrets.internalValue = value;
  }
  public resetAllowedAuthenticationSecrets() {
    this._allowedAuthenticationSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticationSecretsInput() {
    return this._allowedAuthenticationSecrets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExternalAccessIntegrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExternalAccessIntegrationTimeouts) {
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
      allowed_network_rules: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedNetworkRules),
      comment: cdktn.stringToTerraform(this._comment),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      allowed_api_authentication_integrations: externalAccessIntegrationAllowedApiAuthenticationIntegrationsToTerraform(this._allowedApiAuthenticationIntegrations.internalValue),
      allowed_authentication_secrets: externalAccessIntegrationAllowedAuthenticationSecretsToTerraform(this._allowedAuthenticationSecrets.internalValue),
      timeouts: externalAccessIntegrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_network_rules: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedNetworkRules),
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
      allowed_api_authentication_integrations: {
        value: externalAccessIntegrationAllowedApiAuthenticationIntegrationsToHclTerraform(this._allowedApiAuthenticationIntegrations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsList",
      },
      allowed_authentication_secrets: {
        value: externalAccessIntegrationAllowedAuthenticationSecretsToHclTerraform(this._allowedAuthenticationSecrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalAccessIntegrationAllowedAuthenticationSecretsList",
      },
      timeouts: {
        value: externalAccessIntegrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalAccessIntegrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
