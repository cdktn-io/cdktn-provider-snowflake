# `catalogIntegrationOpenCatalog` Submodule <a name="`catalogIntegrationOpenCatalog` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationOpenCatalog <a name="CatalogIntegrationOpenCatalog" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog snowflake_catalog_integration_open_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog(
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
  rest_authentication: CatalogIntegrationOpenCatalogRestAuthentication,
  rest_config: CatalogIntegrationOpenCatalogRestConfig,
  catalog_namespace: str = None,
  comment: str = None,
  id: str = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  timeouts: CatalogIntegrationOpenCatalogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.restAuthentication">rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#enabled CatalogIntegrationOpenCatalog#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#name CatalogIntegrationOpenCatalog#name}

---

##### `rest_authentication`<sup>Required</sup> <a name="rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.restAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_authentication CatalogIntegrationOpenCatalog#rest_authentication}

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.restConfig"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_config CatalogIntegrationOpenCatalog#rest_config}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.catalogNamespace"></a>

- *Type:* str

Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_namespace CatalogIntegrationOpenCatalog#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.comment"></a>

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#comment CatalogIntegrationOpenCatalog#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.refreshIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#refresh_interval_seconds CatalogIntegrationOpenCatalog#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#timeouts CatalogIntegrationOpenCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication">put_rest_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig">put_rest_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetCatalogNamespace">reset_catalog_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetRefreshIntervalSeconds">reset_refresh_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rest_authentication` <a name="put_rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication"></a>

```python
def put_rest_authentication(
  oauth_allowed_scopes: typing.List[str],
  oauth_client_id: str,
  oauth_client_secret: str,
  oauth_token_uri: str = None
) -> None
```

###### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication.parameter.oauthAllowedScopes"></a>

- *Type:* typing.List[str]

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_allowed_scopes CatalogIntegrationOpenCatalog#oauth_allowed_scopes}

---

###### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication.parameter.oauthClientId"></a>

- *Type:* str

Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_id CatalogIntegrationOpenCatalog#oauth_client_id}

---

###### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication.parameter.oauthClientSecret"></a>

- *Type:* str

Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_secret CatalogIntegrationOpenCatalog#oauth_client_secret}

---

###### `oauth_token_uri`<sup>Optional</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestAuthentication.parameter.oauthTokenUri"></a>

- *Type:* str

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_token_uri CatalogIntegrationOpenCatalog#oauth_token_uri}

---

##### `put_rest_config` <a name="put_rest_config" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig"></a>

```python
def put_rest_config(
  catalog_name: str,
  catalog_uri: str,
  access_delegation_mode: str = None,
  catalog_api_type: str = None
) -> None
```

###### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig.parameter.catalogName"></a>

- *Type:* str

Specifies the name of the catalog to use in Open Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_name CatalogIntegrationOpenCatalog#catalog_name}

---

###### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig.parameter.catalogUri"></a>

- *Type:* str

Specifies Open Catalog account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_uri CatalogIntegrationOpenCatalog#catalog_uri}

---

###### `access_delegation_mode`<sup>Optional</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig.parameter.accessDelegationMode"></a>

- *Type:* str

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#access_delegation_mode CatalogIntegrationOpenCatalog#access_delegation_mode}

---

###### `catalog_api_type`<sup>Optional</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putRestConfig.parameter.catalogApiType"></a>

- *Type:* str

Specifies how Snowflake connects to Open Catalog.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_api_type CatalogIntegrationOpenCatalog#catalog_api_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}.

---

##### `reset_catalog_namespace` <a name="reset_catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetCatalogNamespace"></a>

```python
def reset_catalog_namespace() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refresh_interval_seconds` <a name="reset_refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetRefreshIntervalSeconds"></a>

```python
def reset_refresh_interval_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CatalogIntegrationOpenCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CatalogIntegrationOpenCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CatalogIntegrationOpenCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CatalogIntegrationOpenCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationOpenCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList">CatalogIntegrationOpenCatalogDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthentication">rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference">CatalogIntegrationOpenCatalogRestAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference">CatalogIntegrationOpenCatalogRestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList">CatalogIntegrationOpenCatalogShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference">CatalogIntegrationOpenCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespaceInput">catalog_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSecondsInput">refresh_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthenticationInput">rest_authentication_input</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfigInput">rest_config_input</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.describeOutput"></a>

```python
describe_output: CatalogIntegrationOpenCatalogDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList">CatalogIntegrationOpenCatalogDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `rest_authentication`<sup>Required</sup> <a name="rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthentication"></a>

```python
rest_authentication: CatalogIntegrationOpenCatalogRestAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference">CatalogIntegrationOpenCatalogRestAuthenticationOutputReference</a>

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfig"></a>

```python
rest_config: CatalogIntegrationOpenCatalogRestConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference">CatalogIntegrationOpenCatalogRestConfigOutputReference</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.showOutput"></a>

```python
show_output: CatalogIntegrationOpenCatalogShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList">CatalogIntegrationOpenCatalogShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeouts"></a>

```python
timeouts: CatalogIntegrationOpenCatalogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference">CatalogIntegrationOpenCatalogTimeoutsOutputReference</a>

---

##### `catalog_namespace_input`<sup>Optional</sup> <a name="catalog_namespace_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespaceInput"></a>

```python
catalog_namespace_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `refresh_interval_seconds_input`<sup>Optional</sup> <a name="refresh_interval_seconds_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSecondsInput"></a>

```python
refresh_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rest_authentication_input`<sup>Optional</sup> <a name="rest_authentication_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restAuthenticationInput"></a>

```python
rest_authentication_input: CatalogIntegrationOpenCatalogRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---

##### `rest_config_input`<sup>Optional</sup> <a name="rest_config_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.restConfigInput"></a>

```python
rest_config_input: CatalogIntegrationOpenCatalogRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CatalogIntegrationOpenCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationOpenCatalogConfig <a name="CatalogIntegrationOpenCatalogConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  name: str,
  rest_authentication: CatalogIntegrationOpenCatalogRestAuthentication,
  rest_config: CatalogIntegrationOpenCatalogRestConfig,
  catalog_namespace: str = None,
  comment: str = None,
  id: str = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  timeouts: CatalogIntegrationOpenCatalogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restAuthentication">rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | rest_authentication block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | rest_config block. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#enabled CatalogIntegrationOpenCatalog#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#name CatalogIntegrationOpenCatalog#name}

---

##### `rest_authentication`<sup>Required</sup> <a name="rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restAuthentication"></a>

```python
rest_authentication: CatalogIntegrationOpenCatalogRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

rest_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_authentication CatalogIntegrationOpenCatalog#rest_authentication}

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.restConfig"></a>

```python
rest_config: CatalogIntegrationOpenCatalogRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

rest_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#rest_config CatalogIntegrationOpenCatalog#rest_config}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

Specifies the default Open Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_namespace CatalogIntegrationOpenCatalog#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#comment CatalogIntegrationOpenCatalog#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#id CatalogIntegrationOpenCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#refresh_interval_seconds CatalogIntegrationOpenCatalog#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogConfig.property.timeouts"></a>

```python
timeouts: CatalogIntegrationOpenCatalogTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#timeouts CatalogIntegrationOpenCatalog#timeouts}

---

### CatalogIntegrationOpenCatalogDescribeOutput <a name="CatalogIntegrationOpenCatalogDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput()
```


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication()
```


### CatalogIntegrationOpenCatalogDescribeOutputRestConfig <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig()
```


### CatalogIntegrationOpenCatalogRestAuthentication <a name="CatalogIntegrationOpenCatalogRestAuthentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication(
  oauth_allowed_scopes: typing.List[str],
  oauth_client_id: str,
  oauth_client_secret: str,
  oauth_token_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | Specifies one or more scopes for the OAuth token. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthTokenUri">oauth_token_uri</a></code> | <code>str</code> | Specifies URL for the third-party identity provider. |

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more scopes for the OAuth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_allowed_scopes CatalogIntegrationOpenCatalog#oauth_allowed_scopes}

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

Specifies the client ID of the OAuth2 credential associated with your Open Catalog service connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_id CatalogIntegrationOpenCatalog#oauth_client_id}

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

Specifies the secret of the OAuth2 credential associated with your Open Catalog service connection.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_client_secret CatalogIntegrationOpenCatalog#oauth_client_secret}

---

##### `oauth_token_uri`<sup>Optional</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication.property.oauthTokenUri"></a>

```python
oauth_token_uri: str
```

- *Type:* str

Specifies URL for the third-party identity provider.

If not specified, Snowflake assumes the remote catalog provider is the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#oauth_token_uri CatalogIntegrationOpenCatalog#oauth_token_uri}

---

### CatalogIntegrationOpenCatalogRestConfig <a name="CatalogIntegrationOpenCatalogRestConfig" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig(
  catalog_name: str,
  catalog_uri: str,
  access_delegation_mode: str = None,
  catalog_api_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Specifies the name of the catalog to use in Open Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogUri">catalog_uri</a></code> | <code>str</code> | Specifies Open Catalog account URL. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.accessDelegationMode">access_delegation_mode</a></code> | <code>str</code> | Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogApiType">catalog_api_type</a></code> | <code>str</code> | Specifies how Snowflake connects to Open Catalog. |

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Specifies the name of the catalog to use in Open Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_name CatalogIntegrationOpenCatalog#catalog_name}

---

##### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogUri"></a>

```python
catalog_uri: str
```

- *Type:* str

Specifies Open Catalog account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_uri CatalogIntegrationOpenCatalog#catalog_uri}

---

##### `access_delegation_mode`<sup>Optional</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.accessDelegationMode"></a>

```python
access_delegation_mode: str
```

- *Type:* str

Specifies the access delegation mode for accessing Iceberg table files in your external cloud storage.

Valid values are (case-insensitive): `VENDED_CREDENTIALS` | `EXTERNAL_VOLUME_CREDENTIALS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#access_delegation_mode CatalogIntegrationOpenCatalog#access_delegation_mode}

---

##### `catalog_api_type`<sup>Optional</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig.property.catalogApiType"></a>

```python
catalog_api_type: str
```

- *Type:* str

Specifies how Snowflake connects to Open Catalog.

Valid values are (case-insensitive): `PUBLIC` | `PRIVATE` | `AWS_API_GATEWAY` | `AWS_PRIVATE_API_GATEWAY` | `AWS_GLUE` | `AWS_PRIVATE_GLUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#catalog_api_type CatalogIntegrationOpenCatalog#catalog_api_type}

---

### CatalogIntegrationOpenCatalogShowOutput <a name="CatalogIntegrationOpenCatalogShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput()
```


### CatalogIntegrationOpenCatalogTimeouts <a name="CatalogIntegrationOpenCatalogTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#create CatalogIntegrationOpenCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#delete CatalogIntegrationOpenCatalog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#read CatalogIntegrationOpenCatalog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_open_catalog#update CatalogIntegrationOpenCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationOpenCatalogDescribeOutputList <a name="CatalogIntegrationOpenCatalogDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationOpenCatalogDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationOpenCatalogDescribeOutputOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogSource">catalog_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restAuthentication">rest_authentication</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList">CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restConfig">rest_config</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList">CatalogIntegrationOpenCatalogDescribeOutputRestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput">CatalogIntegrationOpenCatalogDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_source`<sup>Required</sup> <a name="catalog_source" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.catalogSource"></a>

```python
catalog_source: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rest_authentication`<sup>Required</sup> <a name="rest_authentication" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restAuthentication"></a>

```python
rest_authentication: CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList">CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList</a>

---

##### `rest_config`<sup>Required</sup> <a name="rest_config" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.restConfig"></a>

```python
rest_config: CatalogIntegrationOpenCatalogDescribeOutputRestConfigList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList">CatalogIntegrationOpenCatalogDescribeOutputRestConfigList</a>

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationOpenCatalogDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutput">CatalogIntegrationOpenCatalogDescribeOutput</a>

---


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthTokenUri">oauth_token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication">CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_token_uri`<sup>Required</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```python
oauth_token_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication">CatalogIntegrationOpenCatalogDescribeOutputRestAuthentication</a>

---


### CatalogIntegrationOpenCatalogDescribeOutputRestConfigList <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfigList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference <a name="CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.accessDelegationMode">access_delegation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogApiType">catalog_api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogUri">catalog_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig">CatalogIntegrationOpenCatalogDescribeOutputRestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_delegation_mode`<sup>Required</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.accessDelegationMode"></a>

```python
access_delegation_mode: str
```

- *Type:* str

---

##### `catalog_api_type`<sup>Required</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogApiType"></a>

```python
catalog_api_type: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.catalogUri"></a>

```python
catalog_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfigOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationOpenCatalogDescribeOutputRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogDescribeOutputRestConfig">CatalogIntegrationOpenCatalogDescribeOutputRestConfig</a>

---


### CatalogIntegrationOpenCatalogRestAuthenticationOutputReference <a name="CatalogIntegrationOpenCatalogRestAuthenticationOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resetOauthTokenUri">reset_oauth_token_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_token_uri` <a name="reset_oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.resetOauthTokenUri"></a>

```python
def reset_oauth_token_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopesInput">oauth_allowed_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientIdInput">oauth_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecretInput">oauth_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUriInput">oauth_token_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopes">oauth_allowed_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientId">oauth_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecret">oauth_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUri">oauth_token_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_allowed_scopes_input`<sup>Optional</sup> <a name="oauth_allowed_scopes_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopesInput"></a>

```python
oauth_allowed_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_id_input`<sup>Optional</sup> <a name="oauth_client_id_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientIdInput"></a>

```python
oauth_client_id_input: str
```

- *Type:* str

---

##### `oauth_client_secret_input`<sup>Optional</sup> <a name="oauth_client_secret_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecretInput"></a>

```python
oauth_client_secret_input: str
```

- *Type:* str

---

##### `oauth_token_uri_input`<sup>Optional</sup> <a name="oauth_token_uri_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUriInput"></a>

```python
oauth_token_uri_input: str
```

- *Type:* str

---

##### `oauth_allowed_scopes`<sup>Required</sup> <a name="oauth_allowed_scopes" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthAllowedScopes"></a>

```python
oauth_allowed_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `oauth_client_id`<sup>Required</sup> <a name="oauth_client_id" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientId"></a>

```python
oauth_client_id: str
```

- *Type:* str

---

##### `oauth_client_secret`<sup>Required</sup> <a name="oauth_client_secret" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthClientSecret"></a>

```python
oauth_client_secret: str
```

- *Type:* str

---

##### `oauth_token_uri`<sup>Required</sup> <a name="oauth_token_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.oauthTokenUri"></a>

```python
oauth_token_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationOpenCatalogRestAuthentication
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestAuthentication">CatalogIntegrationOpenCatalogRestAuthentication</a>

---


### CatalogIntegrationOpenCatalogRestConfigOutputReference <a name="CatalogIntegrationOpenCatalogRestConfigOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetAccessDelegationMode">reset_access_delegation_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetCatalogApiType">reset_catalog_api_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_delegation_mode` <a name="reset_access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetAccessDelegationMode"></a>

```python
def reset_access_delegation_mode() -> None
```

##### `reset_catalog_api_type` <a name="reset_catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.resetCatalogApiType"></a>

```python
def reset_catalog_api_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationModeInput">access_delegation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiTypeInput">catalog_api_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUriInput">catalog_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationMode">access_delegation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiType">catalog_api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUri">catalog_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_delegation_mode_input`<sup>Optional</sup> <a name="access_delegation_mode_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationModeInput"></a>

```python
access_delegation_mode_input: str
```

- *Type:* str

---

##### `catalog_api_type_input`<sup>Optional</sup> <a name="catalog_api_type_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiTypeInput"></a>

```python
catalog_api_type_input: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `catalog_uri_input`<sup>Optional</sup> <a name="catalog_uri_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUriInput"></a>

```python
catalog_uri_input: str
```

- *Type:* str

---

##### `access_delegation_mode`<sup>Required</sup> <a name="access_delegation_mode" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.accessDelegationMode"></a>

```python
access_delegation_mode: str
```

- *Type:* str

---

##### `catalog_api_type`<sup>Required</sup> <a name="catalog_api_type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogApiType"></a>

```python
catalog_api_type: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_uri`<sup>Required</sup> <a name="catalog_uri" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.catalogUri"></a>

```python
catalog_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfigOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationOpenCatalogRestConfig
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogRestConfig">CatalogIntegrationOpenCatalogRestConfig</a>

---


### CatalogIntegrationOpenCatalogShowOutputList <a name="CatalogIntegrationOpenCatalogShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationOpenCatalogShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationOpenCatalogShowOutputOutputReference <a name="CatalogIntegrationOpenCatalogShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput">CatalogIntegrationOpenCatalogShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationOpenCatalogShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogShowOutput">CatalogIntegrationOpenCatalogShowOutput</a>

---


### CatalogIntegrationOpenCatalogTimeoutsOutputReference <a name="CatalogIntegrationOpenCatalogTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_open_catalog

catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CatalogIntegrationOpenCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationOpenCatalog.CatalogIntegrationOpenCatalogTimeouts">CatalogIntegrationOpenCatalogTimeouts</a>

---



