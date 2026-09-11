# `dataSnowflakeOpenflowDeployments` Submodule <a name="`dataSnowflakeOpenflowDeployments` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowDeployments <a name="DataSnowflakeOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments snowflake_openflow_deployments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  like: str = None,
  limit: DataSnowflakeOpenflowDeploymentsLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None,
  with_parameters: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#like DataSnowflakeOpenflowDeployments#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#limit DataSnowflakeOpenflowDeployments#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#starts_with DataSnowflakeOpenflowDeployments#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_describe DataSnowflakeOpenflowDeployments#with_describe}

---

##### `with_parameters`<sup>Optional</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withParameters"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_parameters DataSnowflakeOpenflowDeployments#with_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe">reset_with_describe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters">reset_with_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_limit` <a name="put_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#rows DataSnowflakeOpenflowDeployments#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#from DataSnowflakeOpenflowDeployments#from}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

##### `reset_with_parameters` <a name="reset_with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters"></a>

```python
def reset_with_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeOpenflowDeployments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeOpenflowDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments">openflow_deployments</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput">limit_input</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput">with_parameters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit"></a>

```python
limit: DataSnowflakeOpenflowDeploymentsLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a>

---

##### `openflow_deployments`<sup>Required</sup> <a name="openflow_deployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments"></a>

```python
openflow_deployments: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput"></a>

```python
limit_input: DataSnowflakeOpenflowDeploymentsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_parameters_input`<sup>Optional</sup> <a name="with_parameters_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput"></a>

```python
with_parameters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `with_parameters`<sup>Required</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters"></a>

```python
with_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowDeploymentsConfig <a name="DataSnowflakeOpenflowDeploymentsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  like: str = None,
  limit: DataSnowflakeOpenflowDeploymentsLimit = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None,
  with_parameters: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters">with_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#like DataSnowflakeOpenflowDeployments#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit"></a>

```python
limit: DataSnowflakeOpenflowDeploymentsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#limit DataSnowflakeOpenflowDeployments#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#starts_with DataSnowflakeOpenflowDeployments#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_describe DataSnowflakeOpenflowDeployments#with_describe}

---

##### `with_parameters`<sup>Optional</sup> <a name="with_parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters"></a>

```python
with_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_parameters DataSnowflakeOpenflowDeployments#with_parameters}

---

### DataSnowflakeOpenflowDeploymentsLimit <a name="DataSnowflakeOpenflowDeploymentsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#rows DataSnowflakeOpenflowDeployments#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#from DataSnowflakeOpenflowDeployments#from}

---

### DataSnowflakeOpenflowDeploymentsOpenflowDeployments <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments()
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput()
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters()
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable()
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowDeploymentsLimitOutputReference <a name="DataSnowflakeOpenflowDeploymentsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowDeploymentsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink">use_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">use_user_auth_over_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType">vpc_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `custom_ingress_hostname`<sup>Required</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `use_private_link`<sup>Required</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink"></a>

```python
use_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_user_auth_over_private_link`<sup>Required</sup> <a name="use_user_auth_over_private_link" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```python
use_user_auth_over_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters"></a>

```python
parameters: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowDeploymentsOpenflowDeployments
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable">event_table</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_table`<sup>Required</sup> <a name="event_table" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable"></a>

```python
event_table: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import data_snowflake_openflow_deployments

dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname">custom_ingress_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink">use_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink">use_user_auth_over_private_link</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType">vpc_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `custom_ingress_hostname`<sup>Required</sup> <a name="custom_ingress_hostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname"></a>

```python
custom_ingress_hostname: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `use_private_link`<sup>Required</sup> <a name="use_private_link" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink"></a>

```python
use_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `use_user_auth_over_private_link`<sup>Required</sup> <a name="use_user_auth_over_private_link" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```python
use_user_auth_over_private_link: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `vpc_type`<sup>Required</sup> <a name="vpc_type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType"></a>

```python
vpc_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a>

---



