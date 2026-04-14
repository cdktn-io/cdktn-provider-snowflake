/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CatalogIntegrationOpenCatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_namespace CatalogIntegrationOpenCatalog#catalog_namespace}
  */
  readonly catalogNamespace?: string;
  /**
  * (Default: ``) Specifies a comment for the catalog integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#comment CatalogIntegrationOpenCatalog#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether the catalog integration is available for use for Iceberg tables. `true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#enabled CatalogIntegrationOpenCatalog#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#name CatalogIntegrationOpenCatalog#name}
  */
  readonly name: string;
  /**
  * Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#refresh_interval_seconds CatalogIntegrationOpenCatalog#refresh_interval_seconds}
  */
  readonly refreshIntervalSeconds?: number;
  /**
  * rest_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_authentication CatalogIntegrationOpenCatalog#rest_authentication}
  */
  readonly restAuthentication: CatalogIntegrationOpenCatalogRestAuthentication;
  /**
  * rest_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_config CatalogIntegrationOpenCatalog#rest_config}
  */
  readonly restConfig: CatalogIntegrationOpenCatalogRestConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#timeouts CatalogIntegrationOpenCatalog#timeouts}
  */
  readonly timeouts?: CatalogIntegrationOpenCatalogTimeouts;
}
export interface CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication {
}

export function catalogIntegrationOpenCatalogDescribeOutputRestAuthenticationToTerraform(struct?: CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationOpenCatalogDescribeOutputRestAuthenticationToHclTerraform(struct?: CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication | undefined) {
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

export class CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference {
    return new CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationOpenCatalogDescribeOutputRestConfig {
}

export function catalogIntegrationOpenCatalogDescribeOutputRestConfigToTerraform(struct?: CatalogIntegrationOpenCatalogDescribeOutputRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationOpenCatalogDescribeOutputRestConfigToHclTerraform(struct?: CatalogIntegrationOpenCatalogDescribeOutputRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationOpenCatalogDescribeOutputRestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationOpenCatalogDescribeOutputRestConfig | undefined) {
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
}

export class CatalogIntegrationOpenCatalogDescribeOutputRestConfigList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference {
    return new CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationOpenCatalogDescribeOutput {
}

export function catalogIntegrationOpenCatalogDescribeOutputToTerraform(struct?: CatalogIntegrationOpenCatalogDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationOpenCatalogDescribeOutputToHclTerraform(struct?: CatalogIntegrationOpenCatalogDescribeOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationOpenCatalogDescribeOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationOpenCatalogDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationOpenCatalogDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // refresh_interval_seconds - computed: true, optional: false, required: false
  public get refreshIntervalSeconds() {
    return this.getNumberAttribute('refresh_interval_seconds');
  }

  // rest_authentication - computed: true, optional: false, required: false
  private _restAuthentication = new CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList(this, "rest_authentication", false);
  public get restAuthentication() {
    return this._restAuthentication;
  }

  // rest_config - computed: true, optional: false, required: false
  private _restConfig = new CatalogIntegrationOpenCatalogDescribeOutputRestConfigList(this, "rest_config", false);
  public get restConfig() {
    return this._restConfig;
  }

  // table_format - computed: true, optional: false, required: false
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
}

export class CatalogIntegrationOpenCatalogDescribeOutputList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationOpenCatalogDescribeOutputOutputReference {
    return new CatalogIntegrationOpenCatalogDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationOpenCatalogShowOutput {
}

export function catalogIntegrationOpenCatalogShowOutputToTerraform(struct?: CatalogIntegrationOpenCatalogShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function catalogIntegrationOpenCatalogShowOutputToHclTerraform(struct?: CatalogIntegrationOpenCatalogShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CatalogIntegrationOpenCatalogShowOutputOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CatalogIntegrationOpenCatalogShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationOpenCatalogShowOutput | undefined) {
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

export class CatalogIntegrationOpenCatalogShowOutputList extends cdktn.ComplexList {

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
  public get(index: number): CatalogIntegrationOpenCatalogShowOutputOutputReference {
    return new CatalogIntegrationOpenCatalogShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogIntegrationOpenCatalogRestAuthentication {
  /**
  * Specifies one or more scopes for the OAuth token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_allowed_scopes CatalogIntegrationOpenCatalog#oauth_allowed_scopes}
  */
  readonly oauthAllowedScopes: string[];
  /**
  * Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_id CatalogIntegrationOpenCatalog#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_secret CatalogIntegrationOpenCatalog#oauth_client_secret}
  */
  readonly oauthClientSecret: string;
  /**
  * Specifies URL for the third-party identity provider. If not specified, Snowflake assumes the remote catalog provider is the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_token_uri CatalogIntegrationOpenCatalog#oauth_token_uri}
  */
  readonly oauthTokenUri?: string;
}

export function catalogIntegrationOpenCatalogRestAuthenticationToTerraform(struct?: CatalogIntegrationOpenCatalogRestAuthenticationOutputReference | CatalogIntegrationOpenCatalogRestAuthentication): any {
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


export function catalogIntegrationOpenCatalogRestAuthenticationToHclTerraform(struct?: CatalogIntegrationOpenCatalogRestAuthenticationOutputReference | CatalogIntegrationOpenCatalogRestAuthentication): any {
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

export class CatalogIntegrationOpenCatalogRestAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogIntegrationOpenCatalogRestAuthentication | undefined {
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

  public set internalValue(value: CatalogIntegrationOpenCatalogRestAuthentication | undefined) {
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
export interface CatalogIntegrationOpenCatalogRestConfig {
  /**
  * Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#access_delegation_mode CatalogIntegrationOpenCatalog#access_delegation_mode}
  */
  readonly accessDelegationMode?: string;
  /**
  * Specifies how Snowflake connects to Open Catalog. Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_api_type CatalogIntegrationOpenCatalog#catalog_api_type}
  */
  readonly catalogApiType?: string;
  /**
  * Specifies the name of the catalog to use in Open Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_name CatalogIntegrationOpenCatalog#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Specifies Open Catalog account URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_uri CatalogIntegrationOpenCatalog#catalog_uri}
  */
  readonly catalogUri: string;
}

export function catalogIntegrationOpenCatalogRestConfigToTerraform(struct?: CatalogIntegrationOpenCatalogRestConfigOutputReference | CatalogIntegrationOpenCatalogRestConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_delegation_mode: cdktn.stringToTerraform(struct!.accessDelegationMode),
    catalog_api_type: cdktn.stringToTerraform(struct!.catalogApiType),
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    catalog_uri: cdktn.stringToTerraform(struct!.catalogUri),
  }
}


export function catalogIntegrationOpenCatalogRestConfigToHclTerraform(struct?: CatalogIntegrationOpenCatalogRestConfigOutputReference | CatalogIntegrationOpenCatalogRestConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogIntegrationOpenCatalogRestConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CatalogIntegrationOpenCatalogRestConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogIntegrationOpenCatalogRestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessDelegationMode = undefined;
      this._catalogApiType = undefined;
      this._catalogName = undefined;
      this._catalogUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessDelegationMode = value.accessDelegationMode;
      this._catalogApiType = value.catalogApiType;
      this._catalogName = value.catalogName;
      this._catalogUri = value.catalogUri;
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

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
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
}
export interface CatalogIntegrationOpenCatalogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}
  */
  readonly update?: string;
}

export function catalogIntegrationOpenCatalogTimeoutsToTerraform(struct?: CatalogIntegrationOpenCatalogTimeouts | cdktn.IResolvable): any {
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


export function catalogIntegrationOpenCatalogTimeoutsToHclTerraform(struct?: CatalogIntegrationOpenCatalogTimeouts | cdktn.IResolvable): any {
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

export class CatalogIntegrationOpenCatalogTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CatalogIntegrationOpenCatalogTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CatalogIntegrationOpenCatalogTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog snowflake_catalog_integration_open_catalog}
*/
export class CatalogIntegrationOpenCatalog extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_catalog_integration_open_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CatalogIntegrationOpenCatalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogIntegrationOpenCatalog to import
  * @param importFromId The id of the existing CatalogIntegrationOpenCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogIntegrationOpenCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_catalog_integration_open_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog snowflake_catalog_integration_open_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogIntegrationOpenCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: CatalogIntegrationOpenCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_catalog_integration_open_catalog',
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
    this._restAuthentication.internalValue = config.restAuthentication;
    this._restConfig.internalValue = config.restConfig;
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
  private _describeOutput = new CatalogIntegrationOpenCatalogDescribeOutputList(this, "describe_output", false);
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
  private _showOutput = new CatalogIntegrationOpenCatalogShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // rest_authentication - computed: false, optional: false, required: true
  private _restAuthentication = new CatalogIntegrationOpenCatalogRestAuthenticationOutputReference(this, "rest_authentication");
  public get restAuthentication() {
    return this._restAuthentication;
  }
  public putRestAuthentication(value: CatalogIntegrationOpenCatalogRestAuthentication) {
    this._restAuthentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restAuthenticationInput() {
    return this._restAuthentication.internalValue;
  }

  // rest_config - computed: false, optional: false, required: true
  private _restConfig = new CatalogIntegrationOpenCatalogRestConfigOutputReference(this, "rest_config");
  public get restConfig() {
    return this._restConfig;
  }
  public putRestConfig(value: CatalogIntegrationOpenCatalogRestConfig) {
    this._restConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restConfigInput() {
    return this._restConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CatalogIntegrationOpenCatalogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CatalogIntegrationOpenCatalogTimeouts) {
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
      rest_authentication: catalogIntegrationOpenCatalogRestAuthenticationToTerraform(this._restAuthentication.internalValue),
      rest_config: catalogIntegrationOpenCatalogRestConfigToTerraform(this._restConfig.internalValue),
      timeouts: catalogIntegrationOpenCatalogTimeoutsToTerraform(this._timeouts.internalValue),
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
      rest_authentication: {
        value: catalogIntegrationOpenCatalogRestAuthenticationToHclTerraform(this._restAuthentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogIntegrationOpenCatalogRestAuthenticationList",
      },
      rest_config: {
        value: catalogIntegrationOpenCatalogRestConfigToHclTerraform(this._restConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CatalogIntegrationOpenCatalogRestConfigList",
      },
      timeouts: {
        value: catalogIntegrationOpenCatalogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CatalogIntegrationOpenCatalogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
