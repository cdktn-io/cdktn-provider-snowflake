# `catalogIntegrationAwsGlue` Submodule <a name="`catalogIntegrationAwsGlue` Submodule" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogIntegrationAwsGlue <a name="CatalogIntegrationAwsGlue" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue snowflake_catalog_integration_aws_glue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue(
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
  glue_aws_role_arn: str,
  glue_catalog_id: str,
  name: str,
  catalog_namespace: str = None,
  comment: str = None,
  glue_region: str = None,
  id: str = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  timeouts: CatalogIntegrationAwsGlueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueAwsRoleArn">glue_aws_role_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueCatalogId">glue_catalog_id</a></code> | <code>str</code> | Specifies the ID of your AWS account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueRegion">glue_region</a></code> | <code>str</code> | Specifies the AWS region of your AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#enabled CatalogIntegrationAwsGlue#enabled}

---

##### `glue_aws_role_arn`<sup>Required</sup> <a name="glue_aws_role_arn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueAwsRoleArn"></a>

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_aws_role_arn CatalogIntegrationAwsGlue#glue_aws_role_arn}

---

##### `glue_catalog_id`<sup>Required</sup> <a name="glue_catalog_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueCatalogId"></a>

- *Type:* str

Specifies the ID of your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_catalog_id CatalogIntegrationAwsGlue#glue_catalog_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#name CatalogIntegrationAwsGlue#name}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.catalogNamespace"></a>

- *Type:* str

Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#catalog_namespace CatalogIntegrationAwsGlue#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.comment"></a>

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#comment CatalogIntegrationAwsGlue#comment}

---

##### `glue_region`<sup>Optional</sup> <a name="glue_region" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.glueRegion"></a>

- *Type:* str

Specifies the AWS region of your AWS Glue Data Catalog.

You must specify a value for this attribute if your Snowflake account is not hosted on AWS. Otherwise, the default region is the Snowflake deployment region for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_region CatalogIntegrationAwsGlue#glue_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.refreshIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#refresh_interval_seconds CatalogIntegrationAwsGlue#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#timeouts CatalogIntegrationAwsGlue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetCatalogNamespace">reset_catalog_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetGlueRegion">reset_glue_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetRefreshIntervalSeconds">reset_refresh_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}.

---

##### `reset_catalog_namespace` <a name="reset_catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetCatalogNamespace"></a>

```python
def reset_catalog_namespace() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_glue_region` <a name="reset_glue_region" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetGlueRegion"></a>

```python
def reset_glue_region() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refresh_interval_seconds` <a name="reset_refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetRefreshIntervalSeconds"></a>

```python
def reset_refresh_interval_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CatalogIntegrationAwsGlue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CatalogIntegrationAwsGlue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CatalogIntegrationAwsGlue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CatalogIntegrationAwsGlue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CatalogIntegrationAwsGlue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList">CatalogIntegrationAwsGlueDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList">CatalogIntegrationAwsGlueShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference">CatalogIntegrationAwsGlueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespaceInput">catalog_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArnInput">glue_aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogIdInput">glue_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegionInput">glue_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSecondsInput">refresh_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArn">glue_aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogId">glue_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegion">glue_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.describeOutput"></a>

```python
describe_output: CatalogIntegrationAwsGlueDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList">CatalogIntegrationAwsGlueDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.showOutput"></a>

```python
show_output: CatalogIntegrationAwsGlueShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList">CatalogIntegrationAwsGlueShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeouts"></a>

```python
timeouts: CatalogIntegrationAwsGlueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference">CatalogIntegrationAwsGlueTimeoutsOutputReference</a>

---

##### `catalog_namespace_input`<sup>Optional</sup> <a name="catalog_namespace_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespaceInput"></a>

```python
catalog_namespace_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `glue_aws_role_arn_input`<sup>Optional</sup> <a name="glue_aws_role_arn_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArnInput"></a>

```python
glue_aws_role_arn_input: str
```

- *Type:* str

---

##### `glue_catalog_id_input`<sup>Optional</sup> <a name="glue_catalog_id_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogIdInput"></a>

```python
glue_catalog_id_input: str
```

- *Type:* str

---

##### `glue_region_input`<sup>Optional</sup> <a name="glue_region_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegionInput"></a>

```python
glue_region_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `refresh_interval_seconds_input`<sup>Optional</sup> <a name="refresh_interval_seconds_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSecondsInput"></a>

```python
refresh_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CatalogIntegrationAwsGlueTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `glue_aws_role_arn`<sup>Required</sup> <a name="glue_aws_role_arn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueAwsRoleArn"></a>

```python
glue_aws_role_arn: str
```

- *Type:* str

---

##### `glue_catalog_id`<sup>Required</sup> <a name="glue_catalog_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueCatalogId"></a>

```python
glue_catalog_id: str
```

- *Type:* str

---

##### `glue_region`<sup>Required</sup> <a name="glue_region" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.glueRegion"></a>

```python
glue_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogIntegrationAwsGlueConfig <a name="CatalogIntegrationAwsGlueConfig" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  enabled: bool | IResolvable,
  glue_aws_role_arn: str,
  glue_catalog_id: str,
  name: str,
  catalog_namespace: str = None,
  comment: str = None,
  glue_region: str = None,
  id: str = None,
  refresh_interval_seconds: typing.Union[int, float] = None,
  timeouts: CatalogIntegrationAwsGlueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the catalog integration is available for use for Iceberg tables. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueAwsRoleArn">glue_aws_role_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueCatalogId">glue_catalog_id</a></code> | <code>str</code> | Specifies the ID of your AWS account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.comment">comment</a></code> | <code>str</code> | (Default: ``) Specifies a comment for the catalog integration. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueRegion">glue_region</a></code> | <code>str</code> | Specifies the AWS region of your AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the catalog integration is available for use for Iceberg tables.

`true` allows users to create new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration function normally. `false` prevents users from creating new Iceberg tables that reference this integration. Existing Iceberg tables that reference this integration cannot access the catalog in the table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#enabled CatalogIntegrationAwsGlue#enabled}

---

##### `glue_aws_role_arn`<sup>Required</sup> <a name="glue_aws_role_arn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueAwsRoleArn"></a>

```python
glue_aws_role_arn: str
```

- *Type:* str

Specifies the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_aws_role_arn CatalogIntegrationAwsGlue#glue_aws_role_arn}

---

##### `glue_catalog_id`<sup>Required</sup> <a name="glue_catalog_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueCatalogId"></a>

```python
glue_catalog_id: str
```

- *Type:* str

Specifies the ID of your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_catalog_id CatalogIntegrationAwsGlue#glue_catalog_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) of the catalog integration; must be unique in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#name CatalogIntegrationAwsGlue#name}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

Specifies the default AWS Glue Data Catalog namespace for all Iceberg tables that you associate with the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#catalog_namespace CatalogIntegrationAwsGlue#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: ``) Specifies a comment for the catalog integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#comment CatalogIntegrationAwsGlue#comment}

---

##### `glue_region`<sup>Optional</sup> <a name="glue_region" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.glueRegion"></a>

```python
glue_region: str
```

- *Type:* str

Specifies the AWS region of your AWS Glue Data Catalog.

You must specify a value for this attribute if your Snowflake account is not hosted on AWS. Otherwise, the default region is the Snowflake deployment region for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#glue_region CatalogIntegrationAwsGlue#glue_region}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#id CatalogIntegrationAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_seconds`<sup>Optional</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of seconds to wait between attempts to poll the external Iceberg catalog for metadata updates for automated refresh.

For Delta-based tables, specifies the number of seconds to wait between attempts to poll your external cloud storage for new metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#refresh_interval_seconds CatalogIntegrationAwsGlue#refresh_interval_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueConfig.property.timeouts"></a>

```python
timeouts: CatalogIntegrationAwsGlueTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#timeouts CatalogIntegrationAwsGlue#timeouts}

---

### CatalogIntegrationAwsGlueDescribeOutput <a name="CatalogIntegrationAwsGlueDescribeOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput()
```


### CatalogIntegrationAwsGlueShowOutput <a name="CatalogIntegrationAwsGlueShowOutput" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput()
```


### CatalogIntegrationAwsGlueTimeouts <a name="CatalogIntegrationAwsGlueTimeouts" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#create CatalogIntegrationAwsGlue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#delete CatalogIntegrationAwsGlue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#read CatalogIntegrationAwsGlue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/catalog_integration_aws_glue#update CatalogIntegrationAwsGlue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogIntegrationAwsGlueDescribeOutputList <a name="CatalogIntegrationAwsGlueDescribeOutputList" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationAwsGlueDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationAwsGlueDescribeOutputOutputReference <a name="CatalogIntegrationAwsGlueDescribeOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogSource">catalog_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueAwsRoleArn">glue_aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueCatalogId">glue_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueRegion">glue_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.refreshIntervalSeconds">refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.tableFormat">table_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput">CatalogIntegrationAwsGlueDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_source`<sup>Required</sup> <a name="catalog_source" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.catalogSource"></a>

```python
catalog_source: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `glue_aws_role_arn`<sup>Required</sup> <a name="glue_aws_role_arn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueAwsRoleArn"></a>

```python
glue_aws_role_arn: str
```

- *Type:* str

---

##### `glue_catalog_id`<sup>Required</sup> <a name="glue_catalog_id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueCatalogId"></a>

```python
glue_catalog_id: str
```

- *Type:* str

---

##### `glue_region`<sup>Required</sup> <a name="glue_region" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.glueRegion"></a>

```python
glue_region: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `refresh_interval_seconds`<sup>Required</sup> <a name="refresh_interval_seconds" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.refreshIntervalSeconds"></a>

```python
refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_format`<sup>Required</sup> <a name="table_format" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.tableFormat"></a>

```python
table_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationAwsGlueDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueDescribeOutput">CatalogIntegrationAwsGlueDescribeOutput</a>

---


### CatalogIntegrationAwsGlueShowOutputList <a name="CatalogIntegrationAwsGlueShowOutputList" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CatalogIntegrationAwsGlueShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CatalogIntegrationAwsGlueShowOutputOutputReference <a name="CatalogIntegrationAwsGlueShowOutputOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput">CatalogIntegrationAwsGlueShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: CatalogIntegrationAwsGlueShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueShowOutput">CatalogIntegrationAwsGlueShowOutput</a>

---


### CatalogIntegrationAwsGlueTimeoutsOutputReference <a name="CatalogIntegrationAwsGlueTimeoutsOutputReference" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import catalog_integration_aws_glue

catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CatalogIntegrationAwsGlueTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.catalogIntegrationAwsGlue.CatalogIntegrationAwsGlueTimeouts">CatalogIntegrationAwsGlueTimeouts</a>

---



