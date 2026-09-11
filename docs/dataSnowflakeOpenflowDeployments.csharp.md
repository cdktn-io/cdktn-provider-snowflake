# `dataSnowflakeOpenflowDeployments` Submodule <a name="`dataSnowflakeOpenflowDeployments` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowDeployments <a name="DataSnowflakeOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments snowflake_openflow_deployments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeployments(Construct Scope, string Id, DataSnowflakeOpenflowDeploymentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig">DataSnowflakeOpenflowDeploymentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig">DataSnowflakeOpenflowDeploymentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters">ResetWithParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeOpenflowDeploymentsLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

##### `ResetWithParameters` <a name="ResetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters"></a>

```csharp
private void ResetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowDeployments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowDeployments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowDeployments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeOpenflowDeployments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeOpenflowDeployments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeOpenflowDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments">OpenflowDeployments</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput">WithParametersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters">WithParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a>

---

##### `OpenflowDeployments`<sup>Required</sup> <a name="OpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList OpenflowDeployments { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithParametersInput`<sup>Optional</sup> <a name="WithParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput"></a>

```csharp
public bool|IResolvable WithParametersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithParameters`<sup>Required</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters"></a>

```csharp
public bool|IResolvable WithParameters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowDeploymentsConfig <a name="DataSnowflakeOpenflowDeploymentsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Like = null,
    DataSnowflakeOpenflowDeploymentsLimit Limit = null,
    string StartsWith = null,
    bool|IResolvable WithDescribe = null,
    bool|IResolvable WithParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith">StartsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters">WithParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#like DataSnowflakeOpenflowDeployments#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#limit DataSnowflakeOpenflowDeployments#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#starts_with DataSnowflakeOpenflowDeployments#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_describe DataSnowflakeOpenflowDeployments#with_describe}

---

##### `WithParameters`<sup>Optional</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters"></a>

```csharp
public bool|IResolvable WithParameters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_parameters DataSnowflakeOpenflowDeployments#with_parameters}

---

### DataSnowflakeOpenflowDeploymentsLimit <a name="DataSnowflakeOpenflowDeploymentsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#rows DataSnowflakeOpenflowDeployments#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#from DataSnowflakeOpenflowDeployments#from}

---

### DataSnowflakeOpenflowDeploymentsOpenflowDeployments <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeployments {

};
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput {

};
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters {

};
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable {

};
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowDeploymentsLimitOutputReference <a name="DataSnowflakeOpenflowDeploymentsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get"></a>

```csharp
private DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType">VpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink"></a>

```csharp
public IResolvable UsePrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```csharp
public IResolvable UseUserAuthOverPrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType"></a>

```csharp
public string VpcType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get"></a>

```csharp
private DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeployments InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get"></a>

```csharp
private DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get"></a>

```csharp
private DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable">EventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList EventTable { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get"></a>

```csharp
private DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType">VpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink"></a>

```csharp
public IResolvable UsePrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```csharp
public IResolvable UseUserAuthOverPrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType"></a>

```csharp
public string VpcType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a>

---



