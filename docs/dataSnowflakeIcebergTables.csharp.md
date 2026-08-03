# `dataSnowflakeIcebergTables` Submodule <a name="`dataSnowflakeIcebergTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeIcebergTables <a name="DataSnowflakeIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables snowflake_iceberg_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTables(Construct Scope, string Id, DataSnowflakeIcebergTablesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig">DataSnowflakeIcebergTablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig">DataSnowflakeIcebergTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters">ResetWithParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn"></a>

```csharp
private void PutIn(DataSnowflakeIcebergTablesIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit"></a>

```csharp
private void PutLimit(DataSnowflakeIcebergTablesLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetIn"></a>

```csharp
private void ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

##### `ResetWithParameters` <a name="ResetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.resetWithParameters"></a>

```csharp
private void ResetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeIcebergTables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeIcebergTables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeIcebergTables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeIcebergTables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeIcebergTables resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeIcebergTables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeIcebergTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeIcebergTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables">IcebergTables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput">StartsWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput">WithParametersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith">StartsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters">WithParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `IcebergTables`<sup>Required</sup> <a name="IcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.icebergTables"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesList IcebergTables { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList">DataSnowflakeIcebergTablesIcebergTablesList</a>

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.in"></a>

```csharp
public DataSnowflakeIcebergTablesInOutputReference In { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference">DataSnowflakeIcebergTablesInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limit"></a>

```csharp
public DataSnowflakeIcebergTablesLimitOutputReference Limit { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference">DataSnowflakeIcebergTablesLimitOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.inInput"></a>

```csharp
public DataSnowflakeIcebergTablesIn InInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.limitInput"></a>

```csharp
public DataSnowflakeIcebergTablesLimit LimitInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWithInput"></a>

```csharp
public string StartsWithInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithParametersInput`<sup>Optional</sup> <a name="WithParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParametersInput"></a>

```csharp
public bool|IResolvable WithParametersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.startsWith"></a>

```csharp
public string StartsWith { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WithParameters`<sup>Required</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.withParameters"></a>

```csharp
public bool|IResolvable WithParameters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeIcebergTablesConfig <a name="DataSnowflakeIcebergTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    DataSnowflakeIcebergTablesIn In = null,
    string Like = null,
    DataSnowflakeIcebergTablesLimit Limit = null,
    string StartsWith = null,
    bool|IResolvable WithDescribe = null,
    bool|IResolvable WithParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith">StartsWith</a></code> | <code>string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters">WithParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#id DataSnowflakeIcebergTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.in"></a>

```csharp
public DataSnowflakeIcebergTablesIn In { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#in DataSnowflakeIcebergTables#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#like DataSnowflakeIcebergTables#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.limit"></a>

```csharp
public DataSnowflakeIcebergTablesLimit Limit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#limit DataSnowflakeIcebergTables#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.startsWith"></a>

```csharp
public string StartsWith { get; set; }
```

- *Type:* string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#starts_with DataSnowflakeIcebergTables#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_describe DataSnowflakeIcebergTables#with_describe}

---

##### `WithParameters`<sup>Optional</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesConfig.property.withParameters"></a>

```csharp
public bool|IResolvable WithParameters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS FOR ICEBERG TABLE for each iceberg table returned by SHOW ICEBERG TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#with_parameters DataSnowflakeIcebergTables#with_parameters}

---

### DataSnowflakeIcebergTablesIcebergTables <a name="DataSnowflakeIcebergTablesIcebergTables" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTables {

};
```


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutput <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesDescribeOutput {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParameters <a name="DataSnowflakeIcebergTablesIcebergTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParameters {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalog <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalog {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy {

};
```


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize {

};
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutput <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutput {

};
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus {

};
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs {

};
```


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields {

};
```


### DataSnowflakeIcebergTablesIn <a name="DataSnowflakeIcebergTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIn {
    bool|IResolvable Account = null,
    string Database = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database">Database</a></code> | <code>string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema">Schema</a></code> | <code>string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.account"></a>

```csharp
public bool|IResolvable Account { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#account DataSnowflakeIcebergTables#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#database DataSnowflakeIcebergTables#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#schema DataSnowflakeIcebergTables#schema}

---

### DataSnowflakeIcebergTablesLimit <a name="DataSnowflakeIcebergTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesLimit {
    double Rows,
    string From = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows">Rows</a></code> | <code>double</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from">From</a></code> | <code>string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.rows"></a>

```csharp
public double Rows { get; set; }
```

- *Type:* double

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#rows DataSnowflakeIcebergTables#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/iceberg_tables#from DataSnowflakeIcebergTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check">Check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType">SourceIcebergType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault">WriteDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.check"></a>

```csharp
public string Check { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.isNullable"></a>

```csharp
public IResolvable IsNullable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.nameMapping"></a>

```csharp
public string NameMapping { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.primaryKey"></a>

```csharp
public IResolvable PrimaryKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```csharp
public string PrivacyDomain { get; }
```

- *Type:* string

---

##### `SourceIcebergType`<sup>Required</sup> <a name="SourceIcebergType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```csharp
public string SourceIcebergType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```csharp
public IResolvable UniqueKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WriteDefault`<sup>Required</sup> <a name="WriteDefault" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.writeDefault"></a>

```csharp
public string WriteDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutput">DataSnowflakeIcebergTablesIcebergTablesDescribeOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesList <a name="DataSnowflakeIcebergTablesIcebergTablesList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList">DataSnowflakeIcebergTablesIcebergTablesDescribeOutputList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.parameters"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList">DataSnowflakeIcebergTablesIcebergTablesParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList">DataSnowflakeIcebergTablesIcebergTablesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTables">DataSnowflakeIcebergTablesIcebergTables</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalog">DataSnowflakeIcebergTablesIcebergTablesParametersCatalog</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSync</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompaction</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnRead</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolume</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehavior</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync">CatalogSync</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction">EnableDataCompaction</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead">EnableIcebergMergeOnRead</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume">ExternalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior">IcebergMergeOnReadBehavior</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize">TargetFileSize</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalog"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogList</a>

---

##### `CatalogSync`<sup>Required</sup> <a name="CatalogSync" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.catalogSync"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList CatalogSync { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList">DataSnowflakeIcebergTablesIcebergTablesParametersCatalogSyncList</a>

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList DataRetentionTimeInDays { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersDataRetentionTimeInDaysList</a>

---

##### `EnableDataCompaction`<sup>Required</sup> <a name="EnableDataCompaction" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableDataCompaction"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList EnableDataCompaction { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableDataCompactionList</a>

---

##### `EnableIcebergMergeOnRead`<sup>Required</sup> <a name="EnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList EnableIcebergMergeOnRead { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList">DataSnowflakeIcebergTablesIcebergTablesParametersEnableIcebergMergeOnReadList</a>

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.externalVolume"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList ExternalVolume { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList">DataSnowflakeIcebergTablesIcebergTablesParametersExternalVolumeList</a>

---

##### `IcebergMergeOnReadBehavior`<sup>Required</sup> <a name="IcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.icebergMergeOnReadBehavior"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList IcebergMergeOnReadBehavior { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList">DataSnowflakeIcebergTablesIcebergTablesParametersIcebergMergeOnReadBehaviorList</a>

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList MaxDataExtensionTimeInDays { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeIcebergTablesIcebergTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.replaceInvalidCharacters"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList ReplaceInvalidCharacters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList</a>

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.storageSerializationPolicy"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList StorageSerializationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList</a>

---

##### `TargetFileSize`<sup>Required</sup> <a name="TargetFileSize" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.targetFileSize"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList TargetFileSize { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParameters">DataSnowflakeIcebergTablesIcebergTablesParameters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters">DataSnowflakeIcebergTablesIcebergTablesParametersReplaceInvalidCharacters</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy">DataSnowflakeIcebergTablesIcebergTablesParametersStorageSerializationPolicy</a>

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSizeOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize">DataSnowflakeIcebergTablesIcebergTablesParametersTargetFileSize</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">CurrentSnapshotId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState">ExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">LastSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">PendingSnapshotCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentSnapshotId`<sup>Required</sup> <a name="CurrentSnapshotId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```csharp
public double CurrentSnapshotId { get; }
```

- *Type:* double

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```csharp
public string ExecutionState { get; }
```

- *Type:* string

---

##### `LastSnapshotTime`<sup>Required</sup> <a name="LastSnapshotTime" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```csharp
public string LastSnapshotTime { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `PendingSnapshotCount`<sup>Required</sup> <a name="PendingSnapshotCount" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```csharp
public double PendingSnapshotCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatus</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus">AutoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation">BaseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata">CanWriteMetadata</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName">CatalogSyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName">CatalogTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId">CurrentPartitionSpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName">ExternalVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion">IcebergTableFormatVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType">IcebergTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs">PartitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRefreshStatus`<sup>Required</sup> <a name="AutoRefreshStatus" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.autoRefreshStatus"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList AutoRefreshStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList">DataSnowflakeIcebergTablesIcebergTablesShowOutputAutoRefreshStatusList</a>

---

##### `BaseLocation`<sup>Required</sup> <a name="BaseLocation" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.baseLocation"></a>

```csharp
public string BaseLocation { get; }
```

- *Type:* string

---

##### `CanWriteMetadata`<sup>Required</sup> <a name="CanWriteMetadata" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.canWriteMetadata"></a>

```csharp
public IResolvable CanWriteMetadata { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogNamespace"></a>

```csharp
public string CatalogNamespace { get; }
```

- *Type:* string

---

##### `CatalogSyncName`<sup>Required</sup> <a name="CatalogSyncName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogSyncName"></a>

```csharp
public string CatalogSyncName { get; }
```

- *Type:* string

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.catalogTableName"></a>

```csharp
public string CatalogTableName { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CurrentPartitionSpecId`<sup>Required</sup> <a name="CurrentPartitionSpecId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```csharp
public double CurrentPartitionSpecId { get; }
```

- *Type:* double

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ExternalVolumeName`<sup>Required</sup> <a name="ExternalVolumeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.externalVolumeName"></a>

```csharp
public string ExternalVolumeName { get; }
```

- *Type:* string

---

##### `IcebergTableFormatVersion`<sup>Required</sup> <a name="IcebergTableFormatVersion" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```csharp
public double IcebergTableFormatVersion { get; }
```

- *Type:* double

---

##### `IcebergTableType`<sup>Required</sup> <a name="IcebergTableType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.icebergTableType"></a>

```csharp
public string IcebergTableType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.nameMapping"></a>

```csharp
public string NameMapping { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `PartitionSpecs`<sup>Required</sup> <a name="PartitionSpecs" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.partitionSpecs"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList PartitionSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutput">DataSnowflakeIcebergTablesIcebergTablesShowOutput</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform">Transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```csharp
public double FieldId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```csharp
public double SourceId { get; }
```

- *Type:* double

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```csharp
public string Transform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFields</a>

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get"></a>

```csharp
private DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference <a name="DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId">SpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```csharp
public double SpecId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs">DataSnowflakeIcebergTablesIcebergTablesShowOutputPartitionSpecs</a>

---


### DataSnowflakeIcebergTablesInOutputReference <a name="DataSnowflakeIcebergTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetAccount"></a>

```csharp
private void ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput">AccountInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account">Account</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.accountInput"></a>

```csharp
public bool|IResolvable AccountInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.account"></a>

```csharp
public bool|IResolvable Account { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesInOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesIn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesIn">DataSnowflakeIcebergTablesIn</a>

---


### DataSnowflakeIcebergTablesLimitOutputReference <a name="DataSnowflakeIcebergTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeIcebergTablesLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rowsInput"></a>

```csharp
public double RowsInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimitOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeIcebergTablesLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeIcebergTables.DataSnowflakeIcebergTablesLimit">DataSnowflakeIcebergTablesLimit</a>

---



