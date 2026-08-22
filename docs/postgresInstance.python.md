# `postgresInstance` Submodule <a name="`postgresInstance` Submodule" id="@cdktn/provider-snowflake.postgresInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresInstance <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance snowflake_postgres_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_authority: str,
  compute_family: str,
  name: str,
  postgres_version: typing.Union[int, float],
  storage_size_gb: typing.Union[int, float],
  comment: str = None,
  high_availability: str = None,
  id: str = None,
  maintenance_window_start: typing.Union[int, float] = None,
  network_policy: str = None,
  postgres_settings: str = None,
  storage_integration: str = None,
  timeouts: PostgresInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.authenticationAuthority">authentication_authority</a></code> | <code>str</code> | Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` \| `POSTGRES_OR_SNOWFLAKE`. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.computeFamily">compute_family</a></code> | <code>str</code> | Specifies the compute family for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Postgres instance; |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresVersion">postgres_version</a></code> | <code>typing.Union[int, float]</code> | Specifies the Postgres version for the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageSizeGb">storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | Specifies the storage size in GB for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.highAvailability">high_availability</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.maintenanceWindowStart">maintenance_window_start</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.networkPolicy">network_policy</a></code> | <code>str</code> | Specifies the network policy to associate with the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresSettings">postgres_settings</a></code> | <code>str</code> | Specifies custom Postgres settings as a JSON string. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageIntegration">storage_integration</a></code> | <code>str</code> | Specifies the storage integration for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_authority`<sup>Required</sup> <a name="authentication_authority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.authenticationAuthority"></a>

- *Type:* str

Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` | `POSTGRES_OR_SNOWFLAKE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#authentication_authority PostgresInstance#authentication_authority}

---

##### `compute_family`<sup>Required</sup> <a name="compute_family" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.computeFamily"></a>

- *Type:* str

Specifies the compute family for the Postgres instance.

Valid values are (case-insensitive): `STANDARD_M` | `STANDARD_L` | `STANDARD_XL` | `STANDARD_2XL` | `STANDARD_4XL` | `STANDARD_8XL` | `STANDARD_12XL` | `STANDARD_24XL` | `HIGHMEM_L` | `HIGHMEM_XL` | `HIGHMEM_2XL` | `HIGHMEM_4XL` | `HIGHMEM_8XL` | `HIGHMEM_12XL` | `HIGHMEM_16XL` | `HIGHMEM_24XL` | `HIGHMEM_32XL` | `HIGHMEM_48XL` | `BURST_XS` | `BURST_S` | `BURST_M`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#compute_family PostgresInstance#compute_family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Postgres instance;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#name PostgresInstance#name}

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresVersion"></a>

- *Type:* typing.Union[int, float]

Specifies the Postgres version for the instance.

Note that Snowflake does not allow downgrading; the version can only be upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_version PostgresInstance#postgres_version}

---

##### `storage_size_gb`<sup>Required</sup> <a name="storage_size_gb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageSizeGb"></a>

- *Type:* typing.Union[int, float]

Specifies the storage size in GB for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_size_gb PostgresInstance#storage_size_gb}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#comment PostgresInstance#comment}

---

##### `high_availability`<sup>Optional</sup> <a name="high_availability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.highAvailability"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#high_availability PostgresInstance#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_start`<sup>Optional</sup> <a name="maintenance_window_start" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.maintenanceWindowStart"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#maintenance_window_start PostgresInstance#maintenance_window_start}

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.networkPolicy"></a>

- *Type:* str

Specifies the network policy to associate with the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#network_policy PostgresInstance#network_policy}

---

##### `postgres_settings`<sup>Optional</sup> <a name="postgres_settings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.postgresSettings"></a>

- *Type:* str

Specifies custom Postgres settings as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_settings PostgresInstance#postgres_settings}

---

##### `storage_integration`<sup>Optional</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.storageIntegration"></a>

- *Type:* str

Specifies the storage integration for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_integration PostgresInstance#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#timeouts PostgresInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability">reset_high_availability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart">reset_maintenance_window_start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy">reset_network_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings">reset_postgres_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration">reset_storage_integration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#create PostgresInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#delete PostgresInstance#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#read PostgresInstance#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#update PostgresInstance#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_high_availability` <a name="reset_high_availability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetHighAvailability"></a>

```python
def reset_high_availability() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window_start` <a name="reset_maintenance_window_start" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetMaintenanceWindowStart"></a>

```python
def reset_maintenance_window_start() -> None
```

##### `reset_network_policy` <a name="reset_network_policy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetNetworkPolicy"></a>

```python
def reset_network_policy() -> None
```

##### `reset_postgres_settings` <a name="reset_postgres_settings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetPostgresSettings"></a>

```python
def reset_postgres_settings() -> None
```

##### `reset_storage_integration` <a name="reset_storage_integration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetStorageIntegration"></a>

```python
def reset_storage_integration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PostgresInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput">authentication_authority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput">compute_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput">high_availability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput">maintenance_window_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput">network_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput">postgres_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput">postgres_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput">storage_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput">storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority">authentication_authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily">compute_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability">high_availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy">network_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings">postgres_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion">postgres_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration">storage_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb">storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.describeOutput"></a>

```python
describe_output: PostgresInstanceDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList">PostgresInstanceDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.showOutput"></a>

```python
show_output: PostgresInstanceShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList">PostgresInstanceShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeouts"></a>

```python
timeouts: PostgresInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference">PostgresInstanceTimeoutsOutputReference</a>

---

##### `authentication_authority_input`<sup>Optional</sup> <a name="authentication_authority_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthorityInput"></a>

```python
authentication_authority_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compute_family_input`<sup>Optional</sup> <a name="compute_family_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamilyInput"></a>

```python
compute_family_input: str
```

- *Type:* str

---

##### `high_availability_input`<sup>Optional</sup> <a name="high_availability_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailabilityInput"></a>

```python
high_availability_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_start_input`<sup>Optional</sup> <a name="maintenance_window_start_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStartInput"></a>

```python
maintenance_window_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_policy_input`<sup>Optional</sup> <a name="network_policy_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicyInput"></a>

```python
network_policy_input: str
```

- *Type:* str

---

##### `postgres_settings_input`<sup>Optional</sup> <a name="postgres_settings_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettingsInput"></a>

```python
postgres_settings_input: str
```

- *Type:* str

---

##### `postgres_version_input`<sup>Optional</sup> <a name="postgres_version_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersionInput"></a>

```python
postgres_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_integration_input`<sup>Optional</sup> <a name="storage_integration_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegrationInput"></a>

```python
storage_integration_input: str
```

- *Type:* str

---

##### `storage_size_gb_input`<sup>Optional</sup> <a name="storage_size_gb_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGbInput"></a>

```python
storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | PostgresInstanceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---

##### `authentication_authority`<sup>Required</sup> <a name="authentication_authority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.authenticationAuthority"></a>

```python
authentication_authority: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_family`<sup>Required</sup> <a name="compute_family" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.computeFamily"></a>

```python
compute_family: str
```

- *Type:* str

---

##### `high_availability`<sup>Required</sup> <a name="high_availability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.highAvailability"></a>

```python
high_availability: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window_start`<sup>Required</sup> <a name="maintenance_window_start" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

---

##### `postgres_settings`<sup>Required</sup> <a name="postgres_settings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresSettings"></a>

```python
postgres_settings: str
```

- *Type:* str

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.postgresVersion"></a>

```python
postgres_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

---

##### `storage_size_gb`<sup>Required</sup> <a name="storage_size_gb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.storageSizeGb"></a>

```python
storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresInstanceConfig <a name="PostgresInstanceConfig" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authentication_authority: str,
  compute_family: str,
  name: str,
  postgres_version: typing.Union[int, float],
  storage_size_gb: typing.Union[int, float],
  comment: str = None,
  high_availability: str = None,
  id: str = None,
  maintenance_window_start: typing.Union[int, float] = None,
  network_policy: str = None,
  postgres_settings: str = None,
  storage_integration: str = None,
  timeouts: PostgresInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority">authentication_authority</a></code> | <code>str</code> | Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` \| `POSTGRES_OR_SNOWFLAKE`. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily">compute_family</a></code> | <code>str</code> | Specifies the compute family for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Postgres instance; |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion">postgres_version</a></code> | <code>typing.Union[int, float]</code> | Specifies the Postgres version for the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb">storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | Specifies the storage size in GB for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability">high_availability</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy">network_policy</a></code> | <code>str</code> | Specifies the network policy to associate with the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings">postgres_settings</a></code> | <code>str</code> | Specifies custom Postgres settings as a JSON string. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration">storage_integration</a></code> | <code>str</code> | Specifies the storage integration for the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authentication_authority`<sup>Required</sup> <a name="authentication_authority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.authenticationAuthority"></a>

```python
authentication_authority: str
```

- *Type:* str

Specifies the authentication authority for the Postgres instance. Valid values are (case-insensitive): `POSTGRES` | `POSTGRES_OR_SNOWFLAKE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#authentication_authority PostgresInstance#authentication_authority}

---

##### `compute_family`<sup>Required</sup> <a name="compute_family" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.computeFamily"></a>

```python
compute_family: str
```

- *Type:* str

Specifies the compute family for the Postgres instance.

Valid values are (case-insensitive): `STANDARD_M` | `STANDARD_L` | `STANDARD_XL` | `STANDARD_2XL` | `STANDARD_4XL` | `STANDARD_8XL` | `STANDARD_12XL` | `STANDARD_24XL` | `HIGHMEM_L` | `HIGHMEM_XL` | `HIGHMEM_2XL` | `HIGHMEM_4XL` | `HIGHMEM_8XL` | `HIGHMEM_12XL` | `HIGHMEM_16XL` | `HIGHMEM_24XL` | `HIGHMEM_32XL` | `HIGHMEM_48XL` | `BURST_XS` | `BURST_S` | `BURST_M`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#compute_family PostgresInstance#compute_family}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Postgres instance;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#name PostgresInstance#name}

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresVersion"></a>

```python
postgres_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the Postgres version for the instance.

Note that Snowflake does not allow downgrading; the version can only be upgraded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_version PostgresInstance#postgres_version}

---

##### `storage_size_gb`<sup>Required</sup> <a name="storage_size_gb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageSizeGb"></a>

```python
storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the storage size in GB for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_size_gb PostgresInstance#storage_size_gb}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#comment PostgresInstance#comment}

---

##### `high_availability`<sup>Optional</sup> <a name="high_availability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.highAvailability"></a>

```python
high_availability: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the Postgres instance should be configured for high availability.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#high_availability PostgresInstance#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#id PostgresInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_start`<sup>Optional</sup> <a name="maintenance_window_start" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the hour (0-23 UTC) at which the maintenance window starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#maintenance_window_start PostgresInstance#maintenance_window_start}

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

Specifies the network policy to associate with the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#network_policy PostgresInstance#network_policy}

---

##### `postgres_settings`<sup>Optional</sup> <a name="postgres_settings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.postgresSettings"></a>

```python
postgres_settings: str
```

- *Type:* str

Specifies custom Postgres settings as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#postgres_settings PostgresInstance#postgres_settings}

---

##### `storage_integration`<sup>Optional</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

Specifies the storage integration for the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#storage_integration PostgresInstance#storage_integration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceConfig.property.timeouts"></a>

```python
timeouts: PostgresInstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#timeouts PostgresInstance#timeouts}

---

### PostgresInstanceDescribeOutput <a name="PostgresInstanceDescribeOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceDescribeOutput()
```


### PostgresInstanceShowOutput <a name="PostgresInstanceShowOutput" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceShowOutput()
```


### PostgresInstanceTimeouts <a name="PostgresInstanceTimeouts" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#create PostgresInstance#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#delete PostgresInstance#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#read PostgresInstance#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#update PostgresInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#create PostgresInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#delete PostgresInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#read PostgresInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/postgres_instance#update PostgresInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresInstanceDescribeOutputList <a name="PostgresInstanceDescribeOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PostgresInstanceDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PostgresInstanceDescribeOutputOutputReference <a name="PostgresInstanceDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority">authentication_authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily">compute_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability">high_availability</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy">network_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings">postgres_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion">postgres_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier">privatelink_service_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime">retention_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration">storage_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb">storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_authority`<sup>Required</sup> <a name="authentication_authority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.authenticationAuthority"></a>

```python
authentication_authority: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_family`<sup>Required</sup> <a name="compute_family" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.computeFamily"></a>

```python
compute_family: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `high_availability`<sup>Required</sup> <a name="high_availability" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.highAvailability"></a>

```python
high_availability: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `maintenance_window_start`<sup>Required</sup> <a name="maintenance_window_start" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `postgres_settings`<sup>Required</sup> <a name="postgres_settings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresSettings"></a>

```python
postgres_settings: str
```

- *Type:* str

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.postgresVersion"></a>

```python
postgres_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `privatelink_service_identifier`<sup>Required</sup> <a name="privatelink_service_identifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```python
privatelink_service_identifier: str
```

- *Type:* str

---

##### `retention_time`<sup>Required</sup> <a name="retention_time" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.retentionTime"></a>

```python
retention_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_integration`<sup>Required</sup> <a name="storage_integration" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageIntegration"></a>

```python
storage_integration: str
```

- *Type:* str

---

##### `storage_size_gb`<sup>Required</sup> <a name="storage_size_gb" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.storageSizeGb"></a>

```python
storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: PostgresInstanceDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceDescribeOutput">PostgresInstanceDescribeOutput</a>

---


### PostgresInstanceShowOutputList <a name="PostgresInstanceShowOutputList" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PostgresInstanceShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PostgresInstanceShowOutputOutputReference <a name="PostgresInstanceShowOutputOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority">authentication_authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily">compute_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa">is_ha</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings">postgres_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion">postgres_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier">privatelink_service_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime">retention_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_authority`<sup>Required</sup> <a name="authentication_authority" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.authenticationAuthority"></a>

```python
authentication_authority: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_family`<sup>Required</sup> <a name="compute_family" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.computeFamily"></a>

```python
compute_family: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `is_ha`<sup>Required</sup> <a name="is_ha" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.isHa"></a>

```python
is_ha: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `postgres_settings`<sup>Required</sup> <a name="postgres_settings" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresSettings"></a>

```python
postgres_settings: str
```

- *Type:* str

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.postgresVersion"></a>

```python
postgres_version: str
```

- *Type:* str

---

##### `privatelink_service_identifier`<sup>Required</sup> <a name="privatelink_service_identifier" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.privatelinkServiceIdentifier"></a>

```python
privatelink_service_identifier: str
```

- *Type:* str

---

##### `retention_time`<sup>Required</sup> <a name="retention_time" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.retentionTime"></a>

```python
retention_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: PostgresInstanceShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceShowOutput">PostgresInstanceShowOutput</a>

---


### PostgresInstanceTimeoutsOutputReference <a name="PostgresInstanceTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import postgres_instance

postgresInstance.PostgresInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresInstanceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.postgresInstance.PostgresInstanceTimeouts">PostgresInstanceTimeouts</a>

---



