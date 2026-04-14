# `catalogIntegrationIcebergRest` Submodule <a name="`catalogIntegrationIcebergRest` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationIcebergRest <a name="CatalogIntegrationIcebergRest" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest snowflake_catalog_integration_iceberg_rest}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  rest_config: CatalogIntegrationIcebergRestRestConfig,
  bearer_rest_authentication: CatalogIntegrationIcebergRestBearerRestAuthentication = None,
  catalog_namespace: str = None,
  comment: str = None,
  id: str = None,
  oauth_rest_authentication: CatalogIntegrationIcebergRestOauthRestAuthentication = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  sigv4_rest_authentication: CatalogIntegrationIcebergRestSigv4RestAuthentication = None,
  timeouts: CatalogIntegrationIcebergRestTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.bearerRestAuthentication">bearer_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | bearer_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the default namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.oauthRestAuthentication">oauth_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | oauth_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.sigv4RestAuthentication">sigv4_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | sigv4_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#enabled CatalogIntegrationIcebergRest#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#name CatalogIntegrationIcebergRest#name}

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.restConfig"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#rest_config CatalogIntegrationIcebergRest#rest_config}

---

##### `bearer_rest_authentication`<sup>Optional</sup> <a name="bearer_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.bearerRestAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

bearer_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_rest_authentication CatalogIntegrationIcebergRest#bearer_rest_authentication}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.catalogNamespace"></a>

- *Type:* str

Specifies the default namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_namespace CatalogIntegrationIcebergRest#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.comment"></a>

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#comment CatalogIntegrationIcebergRest#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_rest_authentication`<sup>Optional</sup> <a name="oauth_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.oauthRestAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

oauth_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_rest_authentication CatalogIntegrationIcebergRest#oauth_rest_authentication}

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.refreshIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#refresh_interval_seconds CatalogIntegrationIcebergRest#refresh_interval_seconds}

---

##### `sigv4_rest_authentication`<sup>Optional</sup> <a name="sigv4_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.sigv4RestAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

sigv4_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_rest_authentication CatalogIntegrationIcebergRest#sigv4_rest_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#timeouts CatalogIntegrationIcebergRest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication">put_bearer_rest_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication">put_oauth_rest_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig">put_rest_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication">put_sigv4_rest_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetBearerRestAuthentication">reset_bearer_rest_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetCatalogNamespace">reset_catalog_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOauthRestAuthentication">reset_oauth_rest_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetRefreshIntervalSeconds">reset_refresh_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetSigv4RestAuthentication">reset_sigv4_rest_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bearer_rest_authentication` <a name="put_bearer_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication"></a>

```python
def put_bearer_rest_authentication(
  bearer_token: str
) -> None
```

###### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putBearerRestAuthentication.parameter.bearerToken"></a>

- *Type:* str

The bearer token for the identity provider.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_token CatalogIntegrationIcebergRest#bearer_token}

---

##### `put_oauth_rest_authentication` <a name="put_oauth_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication"></a>

```python
def put_oauth_rest_authentication(
  oauth_allowed_scopes: typing.List[str],
  oauth_client_id: str,
  oauth_client_secret: str,
  oauth_token_uri: str = None
) -> None
```

###### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication.parameter.oauthAllowedScopes"></a>

- *Type:* typing.List[str]

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_allowed_scopes CatalogIntegrationIcebergRest#oauth_allowed_scopes}

---

###### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication.parameter.oauthClientId"></a>

- *Type:* str

Specifies the client ID of the OAuth2 credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_id CatalogIntegrationIcebergRest#oauth_client_id}

---

###### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication.parameter.oauthClientSecret"></a>

- *Type:* str

Specifies the secret of the OAuth2 credential.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_secret CatalogIntegrationIcebergRest#oauth_client_secret}

---

###### `oauth_token_uri`<sup>Optional</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putOauthRestAuthentication.parameter.oauthTokenUri"></a>

- *Type:* str

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_token_uri CatalogIntegrationIcebergRest#oauth_token_uri}

---

##### `put_rest_config` <a name="put_rest_config" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig"></a>

```python
def put_rest_config(
  catalog_uri: str,
  access_delegation_mode: str = None,
  catalog_api_type: str = None,
  catalog_name: str = None,
  prefix: str = None
) -> None
```

###### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig.parameter.catalogUri"></a>

- *Type:* str

Specifies the endpoint URL for the catalog REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_uri CatalogIntegrationIcebergRest#catalog_uri}

---

###### `access_delegation_mode`<sup>Optional</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig.parameter.accessDelegationMode"></a>

- *Type:* str

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#access_delegation_mode CatalogIntegrationIcebergRest#access_delegation_mode}

---

###### `catalog_api_type`<sup>Optional</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig.parameter.catalogApiType"></a>

- *Type:* str

Specifies the connection type for the catalog API.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_api_type CatalogIntegrationIcebergRest#catalog_api_type}

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig.parameter.catalogName"></a>

- *Type:* str

Specifies the catalog or identifier to request from your remote catalog service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_name CatalogIntegrationIcebergRest#catalog_name}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putRestConfig.parameter.prefix"></a>

- *Type:* str

Specifies an optional prefix appended to all API routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#prefix CatalogIntegrationIcebergRest#prefix}

---

##### `put_sigv4_rest_authentication` <a name="put_sigv4_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication"></a>

```python
def put_sigv4_rest_authentication(
  sigv4_iam_role: str,
  sigv4_external_id: str = None,
  sigv4_signing_region: str = None
) -> None
```

###### `sigv4_iam_role`<sup>Required</sup> <a name="sigv4_iam_role" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication.parameter.sigv4IamRole"></a>

- *Type:* str

Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_iam_role CatalogIntegrationIcebergRest#sigv4_iam_role}

---

###### `sigv4_external_id`<sup>Optional</sup> <a name="sigv4_external_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication.parameter.sigv4ExternalId"></a>

- *Type:* str

Specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

If you don’t specify this parameter, Snowflake automatically generates a unique external ID when you create a catalog integration. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_external_id CatalogIntegrationIcebergRest#sigv4_external_id}

---

###### `sigv4_signing_region`<sup>Optional</sup> <a name="sigv4_signing_region" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putSigv4RestAuthentication.parameter.sigv4SigningRegion"></a>

- *Type:* str

Specifies the AWS Region associated with your API in API Gateway.

If you don’t specify this parameter, Snowflake uses the region in which your Snowflake account is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_signing_region CatalogIntegrationIcebergRest#sigv4_signing_region}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}.

---

##### `reset_bearer_rest_authentication` <a name="reset_bearer_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetBearerRestAuthentication"></a>

```python
def reset_bearer_rest_authentication() -> None
```

##### `reset_catalog_namespace` <a name="reset_catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetCatalogNamespace"></a>

```python
def reset_catalog_namespace() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_oauth_rest_authentication` <a name="reset_oauth_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetOauthRestAuthentication"></a>

```python
def reset_oauth_rest_authentication() -> None
```

##### `reset_refresh_interval_seconds` <a name="reset_refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetRefreshIntervalSeconds"></a>

```python
def reset_refresh_interval_seconds() -> None
```

##### `reset_sigv4_rest_authentication` <a name="reset_sigv4_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetSigv4RestAuthentication"></a>

```python
def reset_sigv4_rest_authentication() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CatalogIntegrationIcebergRest resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CatalogIntegrationIcebergRest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CatalogIntegrationIcebergRest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CatalogIntegrationIcebergRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationIcebergRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthentication">bearer_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference">CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList">CatalogIntegrationIcebergRestDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthentication">oauth_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference">CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference">CatalogIntegrationIcebergRestRestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList">CatalogIntegrationIcebergRestShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthentication">sigv4_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference">CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference">CatalogIntegrationIcebergRestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthenticationInput">bearer_rest_authentication_input</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespaceInput">catalog_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthenticationInput">oauth_rest_authentication_input</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSecondsInput">refresh_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfigInput">rest_config_input</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthenticationInput">sigv4_rest_authentication_input</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bearer_rest_authentication`<sup>Required</sup> <a name="bearer_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthentication"></a>

```python
bearer_rest_authentication: CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference">CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.describeOutput"></a>

```python
describe_output: CatalogIntegrationIcebergRestDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList">CatalogIntegrationIcebergRestDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `oauth_rest_authentication`<sup>Required</sup> <a name="oauth_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthentication"></a>

```python
oauth_rest_authentication: CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference">CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference</a>

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfig"></a>

```python
rest_config: CatalogIntegrationIcebergRestRestConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference">CatalogIntegrationIcebergRestRestConfigOutputReference</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.showOutput"></a>

```python
show_output: CatalogIntegrationIcebergRestShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList">CatalogIntegrationIcebergRestShowOutputList</a>

---

##### `sigv4_rest_authentication`<sup>Required</sup> <a name="sigv4_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthentication"></a>

```python
sigv4_rest_authentication: CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference">CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeouts"></a>

```python
timeouts: CatalogIntegrationIcebergRestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference">CatalogIntegrationIcebergRestTimeoutsOutputReference</a>

---

##### `bearer_rest_authentication_input`<sup>Optional</sup> <a name="bearer_rest_authentication_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.bearerRestAuthenticationInput"></a>

```python
bearer_rest_authentication_input: CatalogIntegrationIcebergRestBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---

##### `catalog_namespace_input`<sup>Optional</sup> <a name="catalog_namespace_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespaceInput"></a>

```python
catalog_namespace_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_rest_authentication_input`<sup>Optional</sup> <a name="oauth_rest_authentication_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.oauthRestAuthenticationInput"></a>

```python
oauth_rest_authentication_input: CatalogIntegrationIcebergRestOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---

##### `refresh_interval_seconds_input`<sup>Optional</sup> <a name="refresh_interval_seconds_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSecondsInput"></a>

```python
refresh_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rest_config_input`<sup>Optional</sup> <a name="rest_config_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.restConfigInput"></a>

```python
rest_config_input: CatalogIntegrationIcebergRestRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---

##### `sigv4_rest_authentication_input`<sup>Optional</sup> <a name="sigv4_rest_authentication_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.sigv4RestAuthenticationInput"></a>

```python
sigv4_rest_authentication_input: CatalogIntegrationIcebergRestSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CatalogIntegrationIcebergRestTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationIcebergRestBearerRestAuthentication <a name="CatalogIntegrationIcebergRestBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication(
  bearer_token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.property.bearerToken">bearer_token</a></code> | <code>str</code> | The bearer token for the identity provider. |

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication.property.bearerToken"></a>

```python
bearer_token: str
```

- *Type:* str

The bearer token for the identity provider.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_token CatalogIntegrationIcebergRest#bearer_token}

---

### CatalogIntegrationIcebergRestConfig <a name="CatalogIntegrationIcebergRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  rest_config: CatalogIntegrationIcebergRestRestConfig,
  bearer_rest_authentication: CatalogIntegrationIcebergRestBearerRestAuthentication = None,
  catalog_namespace: str = None,
  comment: str = None,
  id: str = None,
  oauth_rest_authentication: CatalogIntegrationIcebergRestOauthRestAuthentication = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  sigv4_rest_authentication: CatalogIntegrationIcebergRestSigv4RestAuthentication = None,
  timeouts: CatalogIntegrationIcebergRestTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.bearerRestAuthentication">bearer_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | bearer_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the default namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.oauthRestAuthentication">oauth_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | oauth_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.sigv4RestAuthentication">sigv4_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | sigv4_rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#enabled CatalogIntegrationIcebergRest#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#name CatalogIntegrationIcebergRest#name}

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.restConfig"></a>

```python
rest_config: CatalogIntegrationIcebergRestRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#rest_config CatalogIntegrationIcebergRest#rest_config}

---

##### `bearer_rest_authentication`<sup>Optional</sup> <a name="bearer_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.bearerRestAuthentication"></a>

```python
bearer_rest_authentication: CatalogIntegrationIcebergRestBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

bearer_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#bearer_rest_authentication CatalogIntegrationIcebergRest#bearer_rest_authentication}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

Specifies the default namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_namespace CatalogIntegrationIcebergRest#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#comment CatalogIntegrationIcebergRest#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#id CatalogIntegrationIcebergRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauth_rest_authentication`<sup>Optional</sup> <a name="oauth_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.oauthRestAuthentication"></a>

```python
oauth_rest_authentication: CatalogIntegrationIcebergRestOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

oauth_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_rest_authentication CatalogIntegrationIcebergRest#oauth_rest_authentication}

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#refresh_interval_seconds CatalogIntegrationIcebergRest#refresh_interval_seconds}

---

##### `sigv4_rest_authentication`<sup>Optional</sup> <a name="sigv4_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.sigv4RestAuthentication"></a>

```python
sigv4_rest_authentication: CatalogIntegrationIcebergRestSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

sigv4_rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_rest_authentication CatalogIntegrationIcebergRest#sigv4_rest_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestConfig.property.timeouts"></a>

```python
timeouts: CatalogIntegrationIcebergRestTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#timeouts CatalogIntegrationIcebergRest#timeouts}

---

### CatalogIntegrationIcebergRestDescribeOutput <a name="CatalogIntegrationIcebergRestDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput()
```


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication()
```


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication()
```


### CatalogIntegrationIcebergRestDescribeOutputRestConfig <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig()
```


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication()
```


### CatalogIntegrationIcebergRestOauthRestAuthentication <a name="CatalogIntegrationIcebergRestOauthRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication(
  oauth_allowed_scopes: typing.List[str],
  oauth_client_id: str,
  oauth_client_secret: str,
  oauth_token_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | Specifies one or more scopes for the OAuth token. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Specifies the client ID of the OAuth2 credential. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Specifies the secret of the OAuth2 credential. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthTokenUri">oauth_token_uri</a></code> | <code>str</code> | Specifies URL for the third-party identity provider. |

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_allowed_scopes CatalogIntegrationIcebergRest#oauth_allowed_scopes}

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

Specifies the client ID of the OAuth2 credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_id CatalogIntegrationIcebergRest#oauth_client_id}

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

Specifies the secret of the OAuth2 credential.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_client_secret CatalogIntegrationIcebergRest#oauth_client_secret}

---

##### `oauth_token_uri`<sup>Optional</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication.property.oauthTokenUri"></a>

```python
oauth_token_uri: str
```

- *Type:* str

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#oauth_token_uri CatalogIntegrationIcebergRest#oauth_token_uri}

---

### CatalogIntegrationIcebergRestRestConfig <a name="CatalogIntegrationIcebergRestRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig(
  catalog_uri: str,
  access_delegation_mode: str = None,
  catalog_api_type: str = None,
  catalog_name: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogUri">catalog_uri</a></code> | <code>str</code> | Specifies the endpoint URL for the catalog REST API. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.accessDelegationMode">access_delegation_mode</a></code> | <code>str</code> | Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogApiType">catalog_api_type</a></code> | <code>str</code> | Specifies the connection type for the catalog API. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Specifies the catalog or identifier to request from your remote catalog service. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.prefix">prefix</a></code> | <code>str</code> | Specifies an optional prefix appended to all API routes. |

---

##### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogUri"></a>

```python
catalog_uri: str
```

- *Type:* str

Specifies the endpoint URL for the catalog REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_uri CatalogIntegrationIcebergRest#catalog_uri}

---

##### `access_delegation_mode`<sup>Optional</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.accessDelegationMode"></a>

```python
access_delegation_mode: str
```

- *Type:* str

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#access_delegation_mode CatalogIntegrationIcebergRest#access_delegation_mode}

---

##### `catalog_api_type`<sup>Optional</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogApiType"></a>

```python
catalog_api_type: str
```

- *Type:* str

Specifies the connection type for the catalog API.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_api_type CatalogIntegrationIcebergRest#catalog_api_type}

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Specifies the catalog or identifier to request from your remote catalog service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#catalog_name CatalogIntegrationIcebergRest#catalog_name}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Specifies an optional prefix appended to all API routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#prefix CatalogIntegrationIcebergRest#prefix}

---

### CatalogIntegrationIcebergRestShowOutput <a name="CatalogIntegrationIcebergRestShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput()
```


### CatalogIntegrationIcebergRestSigv4RestAuthentication <a name="CatalogIntegrationIcebergRestSigv4RestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication(
  sigv4_iam_role: str,
  sigv4_external_id: str = None,
  sigv4_signing_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4IamRole">sigv4_iam_role</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4ExternalId">sigv4_external_id</a></code> | <code>str</code> | Specifies an external ID that Snowflake uses to establish a trust relationship with AWS. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4SigningRegion">sigv4_signing_region</a></code> | <code>str</code> | Specifies the AWS Region associated with your API in API Gateway. |

---

##### `sigv4_iam_role`<sup>Required</sup> <a name="sigv4_iam_role" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4IamRole"></a>

```python
sigv4_iam_role: str
```

- *Type:* str

Specifies the Amazon Resource Name (ARN) for an IAM role that has permission to access your REST API in API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_iam_role CatalogIntegrationIcebergRest#sigv4_iam_role}

---

##### `sigv4_external_id`<sup>Optional</sup> <a name="sigv4_external_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4ExternalId"></a>

```python
sigv4_external_id: str
```

- *Type:* str

Specifies an external ID that Snowflake uses to establish a trust relationship with AWS.

If you don’t specify this parameter, Snowflake automatically generates a unique external ID when you create a catalog integration. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_external_id CatalogIntegrationIcebergRest#sigv4_external_id}

---

##### `sigv4_signing_region`<sup>Optional</sup> <a name="sigv4_signing_region" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication.property.sigv4SigningRegion"></a>

```python
sigv4_signing_region: str
```

- *Type:* str

Specifies the AWS Region associated with your API in API Gateway.

If you don’t specify this parameter, Snowflake uses the region in which your Snowflake account is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#sigv4_signing_region CatalogIntegrationIcebergRest#sigv4_signing_region}

---

### CatalogIntegrationIcebergRestTimeouts <a name="CatalogIntegrationIcebergRestTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#create CatalogIntegrationIcebergRest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#delete CatalogIntegrationIcebergRest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#read CatalogIntegrationIcebergRest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_iceberg_rest#update CatalogIntegrationIcebergRest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerTokenInput">bearer_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerToken">bearer_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_token_input`<sup>Optional</sup> <a name="bearer_token_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerTokenInput"></a>

```python
bearer_token_input: str
```

- *Type:* str

---

##### `bearer_token`<sup>Required</sup> <a name="bearer_token" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.bearerToken"></a>

```python
bearer_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestBearerRestAuthentication">CatalogIntegrationIcebergRestBearerRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputList <a name="CatalogIntegrationIcebergRestDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationIcebergRestDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri">oauth_token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_token_uri`<sup>Required</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```python
oauth_token_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthentication</a>

---


### CatalogIntegrationIcebergRestDescribeOutputOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.bearerRestAuthentication">bearer_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogSource">catalog_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.oauthRestAuthentication">oauth_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList">CatalogIntegrationIcebergRestDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.sigv4RestAuthentication">sigv4_rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput">CatalogIntegrationIcebergRestDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_rest_authentication`<sup>Required</sup> <a name="bearer_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.bearerRestAuthentication"></a>

```python
bearer_rest_authentication: CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputBearerRestAuthenticationList</a>

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_source`<sup>Required</sup> <a name="catalog_source" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.catalogSource"></a>

```python
catalog_source: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oauth_rest_authentication`<sup>Required</sup> <a name="oauth_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.oauthRestAuthentication"></a>

```python
oauth_rest_authentication: CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputOauthRestAuthenticationList</a>

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.restConfig"></a>

```python
rest_config: CatalogIntegrationIcebergRestDescribeOutputRestConfigList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList">CatalogIntegrationIcebergRestDescribeOutputRestConfigList</a>

---

##### `sigv4_rest_authentication`<sup>Required</sup> <a name="sigv4_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.sigv4RestAuthentication"></a>

```python
sigv4_rest_authentication: CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList</a>

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutput">CatalogIntegrationIcebergRestDescribeOutput</a>

---


### CatalogIntegrationIcebergRestDescribeOutputRestConfigList <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.accessDelegationMode">access_delegation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogApiType">catalog_api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogUri">catalog_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig">CatalogIntegrationIcebergRestDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_delegation_mode`<sup>Required</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```python
access_delegation_mode: str
```

- *Type:* str

---

##### `catalog_api_type`<sup>Required</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```python
catalog_api_type: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```python
catalog_uri: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestDescribeOutputRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputRestConfig">CatalogIntegrationIcebergRestDescribeOutputRestConfig</a>

---


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole">sigv4_iam_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">sigv4_signing_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sigv4_iam_role`<sup>Required</sup> <a name="sigv4_iam_role" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```python
sigv4_iam_role: str
```

- *Type:* str

---

##### `sigv4_signing_region`<sup>Required</sup> <a name="sigv4_signing_region" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```python
sigv4_signing_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication">CatalogIntegrationIcebergRestDescribeOutputSigv4RestAuthentication</a>

---


### CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resetOauthTokenUri">reset_oauth_token_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_token_uri` <a name="reset_oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.resetOauthTokenUri"></a>

```python
def reset_oauth_token_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopesInput">oauth_allowed_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientIdInput">oauth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecretInput">oauth_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUriInput">oauth_token_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUri">oauth_token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_allowed_scopes_input`<sup>Optional</sup> <a name="oauth_allowed_scopes_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopesInput"></a>

```python
oauth_allowed_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_id_input`<sup>Optional</sup> <a name="oauth_client_id_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientIdInput"></a>

```python
oauth_client_id_input: str
```

- *Type:* str

---

##### `oauth_client_secret_input`<sup>Optional</sup> <a name="oauth_client_secret_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecretInput"></a>

```python
oauth_client_secret_input: str
```

- *Type:* str

---

##### `oauth_token_uri_input`<sup>Optional</sup> <a name="oauth_token_uri_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUriInput"></a>

```python
oauth_token_uri_input: str
```

- *Type:* str

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

---

##### `oauth_token_uri`<sup>Required</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```python
oauth_token_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestOauthRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestOauthRestAuthentication">CatalogIntegrationIcebergRestOauthRestAuthentication</a>

---


### CatalogIntegrationIcebergRestRestConfigOutputReference <a name="CatalogIntegrationIcebergRestRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetAccessDelegationMode">reset_access_delegation_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogApiType">reset_catalog_api_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_delegation_mode` <a name="reset_access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetAccessDelegationMode"></a>

```python
def reset_access_delegation_mode() -> None
```

##### `reset_catalog_api_type` <a name="reset_catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogApiType"></a>

```python
def reset_catalog_api_type() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationModeInput">access_delegation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiTypeInput">catalog_api_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUriInput">catalog_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationMode">access_delegation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiType">catalog_api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUri">catalog_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_delegation_mode_input`<sup>Optional</sup> <a name="access_delegation_mode_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationModeInput"></a>

```python
access_delegation_mode_input: str
```

- *Type:* str

---

##### `catalog_api_type_input`<sup>Optional</sup> <a name="catalog_api_type_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiTypeInput"></a>

```python
catalog_api_type_input: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `catalog_uri_input`<sup>Optional</sup> <a name="catalog_uri_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUriInput"></a>

```python
catalog_uri_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `access_delegation_mode`<sup>Required</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.accessDelegationMode"></a>

```python
access_delegation_mode: str
```

- *Type:* str

---

##### `catalog_api_type`<sup>Required</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogApiType"></a>

```python
catalog_api_type: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.catalogUri"></a>

```python
catalog_uri: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfigOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestRestConfig">CatalogIntegrationIcebergRestRestConfig</a>

---


### CatalogIntegrationIcebergRestShowOutputList <a name="CatalogIntegrationIcebergRestShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationIcebergRestShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationIcebergRestShowOutputOutputReference <a name="CatalogIntegrationIcebergRestShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput">CatalogIntegrationIcebergRestShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestShowOutput">CatalogIntegrationIcebergRestShowOutput</a>

---


### CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference <a name="CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4ExternalId">reset_sigv4_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4SigningRegion">reset_sigv4_signing_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sigv4_external_id` <a name="reset_sigv4_external_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4ExternalId"></a>

```python
def reset_sigv4_external_id() -> None
```

##### `reset_sigv4_signing_region` <a name="reset_sigv4_signing_region" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.resetSigv4SigningRegion"></a>

```python
def reset_sigv4_signing_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalIdInput">sigv4_external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRoleInput">sigv4_iam_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegionInput">sigv4_signing_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalId">sigv4_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRole">sigv4_iam_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion">sigv4_signing_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sigv4_external_id_input`<sup>Optional</sup> <a name="sigv4_external_id_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalIdInput"></a>

```python
sigv4_external_id_input: str
```

- *Type:* str

---

##### `sigv4_iam_role_input`<sup>Optional</sup> <a name="sigv4_iam_role_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRoleInput"></a>

```python
sigv4_iam_role_input: str
```

- *Type:* str

---

##### `sigv4_signing_region_input`<sup>Optional</sup> <a name="sigv4_signing_region_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegionInput"></a>

```python
sigv4_signing_region_input: str
```

- *Type:* str

---

##### `sigv4_external_id`<sup>Required</sup> <a name="sigv4_external_id" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4ExternalId"></a>

```python
sigv4_external_id: str
```

- *Type:* str

---

##### `sigv4_iam_role`<sup>Required</sup> <a name="sigv4_iam_role" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4IamRole"></a>

```python
sigv4_iam_role: str
```

- *Type:* str

---

##### `sigv4_signing_region`<sup>Required</sup> <a name="sigv4_signing_region" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.sigv4SigningRegion"></a>

```python
sigv4_signing_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationIcebergRestSigv4RestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestSigv4RestAuthentication">CatalogIntegrationIcebergRestSigv4RestAuthentication</a>

---


### CatalogIntegrationIcebergRestTimeoutsOutputReference <a name="CatalogIntegrationIcebergRestTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_iceberg_rest

catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CatalogIntegrationIcebergRestTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationIcebergRest.CatalogIntegrationIcebergRestTimeouts">CatalogIntegrationIcebergRestTimeouts</a>

---



