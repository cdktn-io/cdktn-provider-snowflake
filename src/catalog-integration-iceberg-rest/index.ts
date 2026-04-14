/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CatalogIntegrationIcebergRestConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the default namespace for all Iceberg tables that you associate with the catalog integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_namespace CatalogIntegrationIcebergRest#catalog_namespace}
  */
  readonly catalogNamespace?: string;
  /**
  * (Default: ``) Specifies a comment for the catalog integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#comment CatalogIntegrationIcebergRest#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether the catalog integration is available for use for Iceberg tables. `true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#enabled CatalogIntegrationIcebergRest#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#name CatalogIntegrationIcebergRest#name}
  */
  readonly name: string;
  /**
  * Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#refresh_interval_seconds CatalogIntegrationIcebergRest#refresh_interval_seconds}
  */
  readonly refreshIntervalSeconds?: number;
  /**
  * bearer_rest_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_rest_authentication CatalogIntegrationIcebergRest#bearer_rest_authentication}
  */
  readonly bearerRestAuthentication?: CatalogIntegrationIcebergRestBearerRestAuthentication;
  /**
  * oauth_rest_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_rest_authentication CatalogIntegrationIcebergRest#oauth_rest_authentication}
  */
  readonly oauthRestAuthentication?: CatalogIntegrationIcebergRestOauthRestAuthentication;
  /**
  * rest_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#rest_config CatalogIntegrationIcebergRest#rest_config}
  */
  readonly restConfig: CatalogIntegrationIcebergRestRestConfig;
  /**
  * sigv4_rest_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_rest_authentication CatalogIntegrationIcebergRest#sigv4_rest_authentication}
  */
  readonly sigv4RestAuthentication?: CatalogIntegrationIcebergRestSigv4RestAuthentication;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#timeouts CatalogIntegrationIcebergRest#timeouts}
  */
  readonly timeouts?: CatalogIntegrationIcebergRestTimeouts;
}
export interface CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication {
}

export function catalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationToTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationToHclTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference {
    return new CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication {
}

export function catalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationToTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationToHclTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oauth_allowed_scopes - computed: true, optional: false, required: false
  public get oauthAllowedScopes() {
    return this.getListAttribute('oauth_allowed_scopes');
  }

  // oauth_client_id - computed: true, optional: false, required: false
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }

  // oauth_token_uri - computed: true, optional: false, required: false
  public get oauthTokenUri() {
    return this.getStringAttribute('oauth_token_uri');
  }
}

export class CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference {
    return new CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationIcebergRestDescribeOutputRestConfig {
}

export function catalogIntegrationIcebergRestDescribeOutputRestConfigToTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationIcebergRestDescribeOutputRestConfigToHclTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationIcebergRestDescribeOutputRestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestDescribeOutputRestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_delegation_mode - computed: true, optional: false, required: false
  public get accessDelegationMode() {
    return this.getStringAttribute('access_delegation_mode');
  }

  // catalog_api_type - computed: true, optional: false, required: false
  public get catalogApiType() {
    return this.getStringAttribute('catalog_api_type');
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // catalog_uri - computed: true, optional: false, required: false
  public get catalogUri() {
    return this.getStringAttribute('catalog_uri');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class CatalogIntegrationIcebergRestDescribeOutputRestConfigList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference {
    return new CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication {
}

export function catalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationToTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationToHclTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sigv4_iam_role - computed: true, optional: false, required: false
  public get sigv4IamRole() {
    return this.getStringAttribute('sigv4_iam_role');
  }

  // sigv4_signing_region - computed: true, optional: false, required: false
  public get sigv4SigningRegion() {
    return this.getStringAttribute('sigv4_signing_region');
  }
}

export class CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference {
    return new CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationIcebergRestDescribeOutput {
}

export function catalogIntegrationIcebergRestDescribeOutputToTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationIcebergRestDescribeOutputToHclTerraform(struct?: CatalogIntegrationIcebergRestDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationIcebergRestDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationIcebergRestDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bearer_rest_authentication - computed: true, optional: false, required: false
  private _bearerRestAuthentication = new CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList(this, "bearer_rest_authentication", false);
  public get bearerRestAuthentication() {
    return this._bearerRestAuthentication;
  }

  // catalog_namespace - computed: true, optional: false, required: false
  public get catalogNamespace() {
    return this.getStringAttribute('catalog_namespace');
  }

  // catalog_source - computed: true, optional: false, required: false
  public get catalogSource() {
    return this.getStringAttribute('catalog_source');
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

  // oauth_rest_authentication - computed: true, optional: false, required: false
  private _oauthRestAuthentication = new CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList(this, "oauth_rest_authentication", false);
  public get oauthRestAuthentication() {
    return this._oauthRestAuthentication;
  }

  // refresh_interval_seconds - computed: true, optional: false, required: false
  public get refreshIntervalSeconds() {
    return this.getNumberAttribute('refresh_interval_seconds');
  }

  // rest_config - computed: true, optional: false, required: false
  private _restConfig = new CatalogIntegrationIcebergRestDescribeOutputRestConfigList(this, "rest_config", false);
  public get restConfig() {
    return this._restConfig;
  }

  // sigv4_rest_authentication - computed: true, optional: false, required: false
  private _sigv4RestAuthentication = new CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList(this, "sigv4_rest_authentication", false);
  public get sigv4RestAuthentication() {
    return this._sigv4RestAuthentication;
  }

  // table_format - computed: true, optional: false, required: false
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
}

export class CatalogIntegrationIcebergRestDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationIcebergRestDescribeOutputOutputReference {
    return new CatalogIntegrationIcebergRestDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationIcebergRestShowOutput {
}

export function catalogIntegrationIcebergRestShowOutputToTerraform(struct?: CatalogIntegrationIcebergRestShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationIcebergRestShowOutputToHclTerraform(struct?: CatalogIntegrationIcebergRestShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationIcebergRestShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationIcebergRestShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestShowOutput | undefined) {
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

export class CatalogIntegrationIcebergRestShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationIcebergRestShowOutputOutputReference {
    return new CatalogIntegrationIcebergRestShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationIcebergRestBearerRestAuthentication {
  /**
  * The bearer token for the identity provider. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_token CatalogIntegrationIcebergRest#bearer_token}
  */
  readonly bearerToken: string;
}

export function catalogIntegrationIcebergRestBearerRestAuthenticationToTerraform(struct?: CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference | CatalogIntegrationIcebergRestBearerRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktn.stringToTerraform(struct!.bearerToken),
  }
}


export function catalogIntegrationIcebergRestBearerRestAuthenticationToHclTerraform(struct?: CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference | CatalogIntegrationIcebergRestBearerRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktn.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogIntegrationIcebergRestBearerRestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestBearerRestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerToken = value.bearerToken;
    }
  }

  // bearer_token - computed: false, optional: false, required: true
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }
}
export interface CatalogIntegrationIcebergRestOauthRestAuthentication {
  /**
  * Specifies one or more scopes for the OAuth token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_allowed_scopes CatalogIntegrationIcebergRest#oauth_allowed_scopes}
  */
  readonly oauthAllowedScopes: string[];
  /**
  * Specifies the client ID of the OAuth2 credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_id CatalogIntegrationIcebergRest#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * Specifies the secret of the OAuth2 credential. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_secret CatalogIntegrationIcebergRest#oauth_client_secret}
  */
  readonly oauthClientSecret: string;
  /**
  * Specifies URL for the third-party identity provider. If not specified, Snowflake assumes the remote catalog provider is the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_token_uri CatalogIntegrationIcebergRest#oauth_token_uri}
  */
  readonly oauthTokenUri?: string;
}

export function catalogIntegrationIcebergRestOauthRestAuthenticationToTerraform(struct?: CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference | CatalogIntegrationIcebergRestOauthRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_allowed_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oauthAllowedScopes),
    oauth_client_id: cdktn.stringToTerraform(struct!.oauthClientId),
    oauth_client_secret: cdktn.stringToTerraform(struct!.oauthClientSecret),
    oauth_token_uri: cdktn.stringToTerraform(struct!.oauthTokenUri),
  }
}


export function catalogIntegrationIcebergRestOauthRestAuthenticationToHclTerraform(struct?: CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference | CatalogIntegrationIcebergRestOauthRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth_allowed_scopes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oauthAllowedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oauth_client_id: {
      value: cdktn.stringToHclTerraform(struct!.oauthClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_client_secret: {
      value: cdktn.stringToHclTerraform(struct!.oauthClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_token_uri: {
      value: cdktn.stringToHclTerraform(struct!.oauthTokenUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogIntegrationIcebergRestOauthRestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthAllowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthAllowedScopes = this._oauthAllowedScopes;
    }
    if (this._oauthClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthClientId = this._oauthClientId;
    }
    if (this._oauthClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthClientSecret = this._oauthClientSecret;
    }
    if (this._oauthTokenUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenUri = this._oauthTokenUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestOauthRestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthAllowedScopes = undefined;
      this._oauthClientId = undefined;
      this._oauthClientSecret = undefined;
      this._oauthTokenUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthAllowedScopes = value.oauthAllowedScopes;
      this._oauthClientId = value.oauthClientId;
      this._oauthClientSecret = value.oauthClientSecret;
      this._oauthTokenUri = value.oauthTokenUri;
    }
  }

  // oauth_allowed_scopes - computed: false, optional: false, required: true
  private _oauthAllowedScopes?: string[]; 
  public get oauthAllowedScopes() {
    return this.getListAttribute('oauth_allowed_scopes');
  }
  public set oauthAllowedScopes(value: string[]) {
    this._oauthAllowedScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAllowedScopesInput() {
    return this._oauthAllowedScopes;
  }

  // oauth_client_id - computed: false, optional: false, required: true
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: false, required: true
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_token_uri - computed: false, optional: true, required: false
  private _oauthTokenUri?: string; 
  public get oauthTokenUri() {
    return this.getStringAttribute('oauth_token_uri');
  }
  public set oauthTokenUri(value: string) {
    this._oauthTokenUri = value;
  }
  public resetOauthTokenUri() {
    this._oauthTokenUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenUriInput() {
    return this._oauthTokenUri;
  }
}
export interface CatalogIntegrationIcebergRestRestConfig {
  /**
  * Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#access_delegation_mode CatalogIntegrationIcebergRest#access_delegation_mode}
  */
  readonly accessDelegationMode?: string;
  /**
  * Specifies the connection type for the catalog API. Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_api_type CatalogIntegrationIcebergRest#catalog_api_type}
  */
  readonly catalogApiType?: string;
  /**
  * Specifies the catalog or identifier to request from your remote catalog service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_name CatalogIntegrationIcebergRest#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Specifies the endpoint URL for the catalog REST API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_uri CatalogIntegrationIcebergRest#catalog_uri}
  */
  readonly catalogUri: string;
  /**
  * Specifies an optional prefix appended to all API routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#prefix CatalogIntegrationIcebergRest#prefix}
  */
  readonly prefix?: string;
}

export function catalogIntegrationIcebergRestRestConfigToTerraform(struct?: CatalogIntegrationIcebergRestRestConfigOutputReference | CatalogIntegrationIcebergRestRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_delegation_mode: cdktn.stringToTerraform(struct!.accessDelegationMode),
    catalog_api_type: cdktn.stringToTerraform(struct!.catalogApiType),
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    catalog_uri: cdktn.stringToTerraform(struct!.catalogUri),
    prefix: cdktn.stringToTerraform(struct!.prefix),
  }
}


export function catalogIntegrationIcebergRestRestConfigToHclTerraform(struct?: CatalogIntegrationIcebergRestRestConfigOutputReference | CatalogIntegrationIcebergRestRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_delegation_mode: {
      value: cdktn.stringToHclTerraform(struct!.accessDelegationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_api_type: {
      value: cdktn.stringToHclTerraform(struct!.catalogApiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog_uri: {
      value: cdktn.stringToHclTerraform(struct!.catalogUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogIntegrationIcebergRestRestConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogIntegrationIcebergRestRestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessDelegationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDelegationMode = this._accessDelegationMode;
    }
    if (this._catalogApiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogApiType = this._catalogApiType;
    }
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._catalogUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogUri = this._catalogUri;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestRestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessDelegationMode = undefined;
      this._catalogApiType = undefined;
      this._catalogName = undefined;
      this._catalogUri = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessDelegationMode = value.accessDelegationMode;
      this._catalogApiType = value.catalogApiType;
      this._catalogName = value.catalogName;
      this._catalogUri = value.catalogUri;
      this._prefix = value.prefix;
    }
  }

  // access_delegation_mode - computed: false, optional: true, required: false
  private _accessDelegationMode?: string; 
  public get accessDelegationMode() {
    return this.getStringAttribute('access_delegation_mode');
  }
  public set accessDelegationMode(value: string) {
    this._accessDelegationMode = value;
  }
  public resetAccessDelegationMode() {
    this._accessDelegationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDelegationModeInput() {
    return this._accessDelegationMode;
  }

  // catalog_api_type - computed: false, optional: true, required: false
  private _catalogApiType?: string; 
  public get catalogApiType() {
    return this.getStringAttribute('catalog_api_type');
  }
  public set catalogApiType(value: string) {
    this._catalogApiType = value;
  }
  public resetCatalogApiType() {
    this._catalogApiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogApiTypeInput() {
    return this._catalogApiType;
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // catalog_uri - computed: false, optional: false, required: true
  private _catalogUri?: string; 
  public get catalogUri() {
    return this.getStringAttribute('catalog_uri');
  }
  public set catalogUri(value: string) {
    this._catalogUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogUriInput() {
    return this._catalogUri;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface CatalogIntegrationIcebergRestSigv4RestAuthentication {
  /**
  * Specifies an external ID that Snowflake uses to establish a trust relationship with AWS. If you don’t specify this parameter, Snowflake automatically generates a unique external ID when you create a catalog integration. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_external_id CatalogIntegrationIcebergRest#sigv4_external_id}
  */
  readonly sigv4ExternalId?: string;
  /**
  * Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_iam_role CatalogIntegrationIcebergRest#sigv4_iam_role}
  */
  readonly sigv4IamRole: string;
  /**
  * Specifies the AWS Region associated with your API in API Gateway. If you don’t specify this parameter, Snowflake uses the region in which your Snowflake account is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_signing_region CatalogIntegrationIcebergRest#sigv4_signing_region}
  */
  readonly sigv4SigningRegion?: string;
}

export function catalogIntegrationIcebergRestSigv4RestAuthenticationToTerraform(struct?: CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference | CatalogIntegrationIcebergRestSigv4RestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sigv4_external_id: cdktn.stringToTerraform(struct!.sigv4ExternalId),
    sigv4_iam_role: cdktn.stringToTerraform(struct!.sigv4IamRole),
    sigv4_signing_region: cdktn.stringToTerraform(struct!.sigv4SigningRegion),
  }
}


export function catalogIntegrationIcebergRestSigv4RestAuthenticationToHclTerraform(struct?: CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference | CatalogIntegrationIcebergRestSigv4RestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sigv4_external_id: {
      value: cdktn.stringToHclTerraform(struct!.sigv4ExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigv4_iam_role: {
      value: cdktn.stringToHclTerraform(struct!.sigv4IamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sigv4_signing_region: {
      value: cdktn.stringToHclTerraform(struct!.sigv4SigningRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogIntegrationIcebergRestSigv4RestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sigv4ExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigv4ExternalId = this._sigv4ExternalId;
    }
    if (this._sigv4IamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigv4IamRole = this._sigv4IamRole;
    }
    if (this._sigv4SigningRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigv4SigningRegion = this._sigv4SigningRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationIcebergRestSigv4RestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sigv4ExternalId = undefined;
      this._sigv4IamRole = undefined;
      this._sigv4SigningRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sigv4ExternalId = value.sigv4ExternalId;
      this._sigv4IamRole = value.sigv4IamRole;
      this._sigv4SigningRegion = value.sigv4SigningRegion;
    }
  }

  // sigv4_external_id - computed: false, optional: true, required: false
  private _sigv4ExternalId?: string; 
  public get sigv4ExternalId() {
    return this.getStringAttribute('sigv4_external_id');
  }
  public set sigv4ExternalId(value: string) {
    this._sigv4ExternalId = value;
  }
  public resetSigv4ExternalId() {
    this._sigv4ExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigv4ExternalIdInput() {
    return this._sigv4ExternalId;
  }

  // sigv4_iam_role - computed: false, optional: false, required: true
  private _sigv4IamRole?: string; 
  public get sigv4IamRole() {
    return this.getStringAttribute('sigv4_iam_role');
  }
  public set sigv4IamRole(value: string) {
    this._sigv4IamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sigv4IamRoleInput() {
    return this._sigv4IamRole;
  }

  // sigv4_signing_region - computed: false, optional: true, required: false
  private _sigv4SigningRegion?: string; 
  public get sigv4SigningRegion() {
    return this.getStringAttribute('sigv4_signing_region');
  }
  public set sigv4SigningRegion(value: string) {
    this._sigv4SigningRegion = value;
  }
  public resetSigv4SigningRegion() {
    this._sigv4SigningRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigv4SigningRegionInput() {
    return this._sigv4SigningRegion;
  }
}
export interface CatalogIntegrationIcebergRestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}
  */
  readonly update?: string;
}

export function catalogIntegrationIcebergRestTimeoutsToTerraform(struct?: CatalogIntegrationIcebergRestTimeouts | cdktn.IResolvable): any {
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


export function catalogIntegrationIcebergRestTimeoutsToHclTerraform(struct?: CatalogIntegrationIcebergRestTimeouts | cdktn.IResolvable): any {
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

export class CatalogIntegrationIcebergRestTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CatalogIntegrationIcebergRestTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CatalogIntegrationIcebergRestTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest snowflake_catalog_integration_iceberg_rest}
*/
export class CatalogIntegrationIcebergRest extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_catalog_integration_iceberg_rest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CatalogIntegrationIcebergRest resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogIntegrationIcebergRest to import
  * @param importFromId The id of the existing CatalogIntegrationIcebergRest that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogIntegrationIcebergRest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_catalog_integration_iceberg_rest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest snowflake_catalog_integration_iceberg_rest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogIntegrationIcebergRestConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogIntegrationIcebergRestConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_catalog_integration_iceberg_rest',
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
    this._catalogNamespace = config.catalogNamespace;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._refreshIntervalSeconds = config.refreshIntervalSeconds;
    this._bearerRestAuthentication.internalValue = config.bearerRestAuthentication;
    this._oauthRestAuthentication.internalValue = config.oauthRestAuthentication;
    this._restConfig.internalValue = config.restConfig;
    this._sigv4RestAuthentication.internalValue = config.sigv4RestAuthentication;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_namespace - computed: false, optional: true, required: false
  private _catalogNamespace?: string; 
  public get catalogNamespace() {
    return this.getStringAttribute('catalog_namespace');
  }
  public set catalogNamespace(value: string) {
    this._catalogNamespace = value;
  }
  public resetCatalogNamespace() {
    this._catalogNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNamespaceInput() {
    return this._catalogNamespace;
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
  private _describeOutput = new CatalogIntegrationIcebergRestDescribeOutputList(this, "describe_output", false);
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

  // refresh_interval_seconds - computed: false, optional: true, required: false
  private _refreshIntervalSeconds?: number; 
  public get refreshIntervalSeconds() {
    return this.getNumberAttribute('refresh_interval_seconds');
  }
  public set refreshIntervalSeconds(value: number) {
    this._refreshIntervalSeconds = value;
  }
  public resetRefreshIntervalSeconds() {
    this._refreshIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalSecondsInput() {
    return this._refreshIntervalSeconds;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new CatalogIntegrationIcebergRestShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // bearer_rest_authentication - computed: false, optional: true, required: false
  private _bearerRestAuthentication = new CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference(this, "bearer_rest_authentication");
  public get bearerRestAuthentication() {
    return this._bearerRestAuthentication;
  }
  public putBearerRestAuthentication(value: CatalogIntegrationIcebergRestBearerRestAuthentication) {
    this._bearerRestAuthentication.internalValue = value;
  }
  public resetBearerRestAuthentication() {
    this._bearerRestAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerRestAuthenticationInput() {
    return this._bearerRestAuthentication.internalValue;
  }

  // oauth_rest_authentication - computed: false, optional: true, required: false
  private _oauthRestAuthentication = new CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference(this, "oauth_rest_authentication");
  public get oauthRestAuthentication() {
    return this._oauthRestAuthentication;
  }
  public putOauthRestAuthentication(value: CatalogIntegrationIcebergRestOauthRestAuthentication) {
    this._oauthRestAuthentication.internalValue = value;
  }
  public resetOauthRestAuthentication() {
    this._oauthRestAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRestAuthenticationInput() {
    return this._oauthRestAuthentication.internalValue;
  }

  // rest_config - computed: false, optional: false, required: true
  private _restConfig = new CatalogIntegrationIcebergRestRestConfigOutputReference(this, "rest_config");
  public get restConfig() {
    return this._restConfig;
  }
  public putRestConfig(value: CatalogIntegrationIcebergRestRestConfig) {
    this._restConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restConfigInput() {
    return this._restConfig.internalValue;
  }

  // sigv4_rest_authentication - computed: false, optional: true, required: false
  private _sigv4RestAuthentication = new CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference(this, "sigv4_rest_authentication");
  public get sigv4RestAuthentication() {
    return this._sigv4RestAuthentication;
  }
  public putSigv4RestAuthentication(value: CatalogIntegrationIcebergRestSigv4RestAuthentication) {
    this._sigv4RestAuthentication.internalValue = value;
  }
  public resetSigv4RestAuthentication() {
    this._sigv4RestAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigv4RestAuthenticationInput() {
    return this._sigv4RestAuthentication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CatalogIntegrationIcebergRestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CatalogIntegrationIcebergRestTimeouts) {
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
      catalog_namespace: cdktn.stringToTerraform(this._catalogNamespace),
      comment: cdktn.stringToTerraform(this._comment),
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      refresh_interval_seconds: cdktn.numberToTerraform(this._refreshIntervalSeconds),
      bearer_rest_authentication: catalogIntegrationIcebergRestBearerRestAuthenticationToTerraform(this._bearerRestAuthentication.internalValue),
      oauth_rest_authentication: catalogIntegrationIcebergRestOauthRestAuthenticationToTerraform(this._oauthRestAuthentication.internalValue),
      rest_config: catalogIntegrationIcebergRestRestConfigToTerraform(this._restConfig.internalValue),
      sigv4_rest_authentication: catalogIntegrationIcebergRestSigv4RestAuthenticationToTerraform(this._sigv4RestAuthentication.internalValue),
      timeouts: catalogIntegrationIcebergRestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_namespace: {
        value: cdktn.stringToHclTerraform(this._catalogNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      refresh_interval_seconds: {
        value: cdktn.numberToHclTerraform(this._refreshIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bearer_rest_authentication: {
        value: catalogIntegrationIcebergRestBearerRestAuthenticationToHclTerraform(this._bearerRestAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogIntegrationIcebergRestBearerRestAuthenticationList",
      },
      oauth_rest_authentication: {
        value: catalogIntegrationIcebergRestOauthRestAuthenticationToHclTerraform(this._oauthRestAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogIntegrationIcebergRestOauthRestAuthenticationList",
      },
      rest_config: {
        value: catalogIntegrationIcebergRestRestConfigToHclTerraform(this._restConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogIntegrationIcebergRestRestConfigList",
      },
      sigv4_rest_authentication: {
        value: catalogIntegrationIcebergRestSigv4RestAuthenticationToHclTerraform(this._sigv4RestAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogIntegrationIcebergRestSigv4RestAuthenticationList",
      },
      timeouts: {
        value: catalogIntegrationIcebergRestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CatalogIntegrationIcebergRestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
